# Introduction à GitLab CI / CD

## Interconnecté des projets

Au sein de l'entrperise plusieurs équipes travaillent indépendamment l'une de l'autre sur différentes applications. Hors, celles-ci ont bien conscience d'avoir des similutudes techniques sur leur CI.

Nous allons donc revenir sur la CI afin de construire avec une mutalisation des ressources.

Nous allons simuler la création d'un projet **parent/upstream** et d'un autre projet lié **enfant/downstream**.

![01-IMG](./assets/01-img.png)

## Initialisation

Créer un premier projet dit **enfant** avec la configuration CI suivante :

```yml
stages: 
  - .pre
  - trigger

job:
  script:
    - echo "Hello world"

triggered:
 stage: trigger
 rules:
  - if: $CI_PIPELINE_SOURCE != "pipeline"
    when: never
```

Créer un second projet dit **parent**, à côté du précédent, avec pour configuration celle ci-dessous :

```yml
stages:
  - pre
  - trigger

test:
  stage: pre
  script: 
    - echo "Exécution des tests - OK"

trigger:
  stage: trigger
  trigger:
    strategy: depend
    project: <chemin_groupe>/<projet_enfant>
```

Vous pourrez remarquer que le job *trigger*, ne contient pas de balise **script**. La fonctionnalité de trigger de downstream pipeline fait exception à la règle que tout job doit avoir à minima la balise *script*.
La politique de stratégie, via `strategy: depend`, va permettre de forcer le job de déclenchement à attendre que le pipeline en aval soit terminée avant d'être marquée comme réussie.

## Exécution

En appliquant cette première configuration, vous allez pouvoir remarquer une nouvelle structure apparaitre dans l'interface des pipelines.

Dans les projets parent/enfant, une carte **Downstream** permettant de d'accéder directement aux pipelines associées des projets liés apparait. Celle-ci se trouve tout à droite pour les projets *upstream* et à gauche pour les projets *downstream*.

## Etapes suivantes

### restriction d'exécution

Premièrement, on va rajouter une *sécurité* afin de s'assurer que nos actions dans le projet *enfant* ne soient uniquement déclenchées par un autre projet en amont.

Pour cela, il faut rajouter des règles, dans le job **triggered** :

```yml
trigerred:
  ...
  rules:
    - if: $CI_PIPELINE_SOURCE != "pipeline"
      when: never
```

Une fois **push**, les pipelines encléchées par tous commits ou déclenchement manuel n'exécutent plus le job "triggered".
Tandis que si on relance une pipeline depuis le projet *parent*, celui-ci est bien exécuté.

### Transmission d'information

En second temps, on aimerait transmettre de l'information spécifique du projet en amont au projet en aval. Pour ce faire plus moyens sont possibles. Mais l'on va voir ici, un solution au travers des **artéfacts**.

![INFO](./assets/info.png) Cette fonctionnalité est contrainte à avoir une licence de niveau **premium**.

Pour se faire, vous allez rajouter un nouveau job, au projet *parent*. N'oubliez pas d'ajouter l'étape **build** dans la liste *stages*.

```yml
build:
  stage: build
  script:
    - echo "Build action"
    - echo "PROJECT_BUILD=${CI_COMMIT_MESSAGE}" > build.env
  artifacts:
    reports:
      dotenv: build.env
```

Et afin de récupérer cette transmission d'information, vous allez devoir rajouter la dépendance au job **build** pour récupérer l'artéfact *build.env*.

```yml
  needs:
    - project: <chemin_groupe>/<projet_parent>
      job: build
```

Ainsi que dans le bloc *script* la commande suivante :

```yml
    - echo "Build du projet: ${PROJECT_BUILD}"
```

A partir de cette étape, vous pouvez pleinement tester et push tous les commits et analyser le résultat.

![INFO](./assets/info.png) ASTUCE: Il peut-être intéressant d'ajouter dans la configuration CI "Settings/ CI/CD / Varaibles" du projet *enfant*, la variable suivante `CI_DEBUG_TRACE: "true"`, afin qu'à la prochaine exécution plus d'information soit visible.

Nous avons ainsi constituer un projet *parent* qui pourrait correspondre à un projet d'une Feature TEAM, pour une application Angular ou un microservice réalisée en JAVA. Et un second projet *enfant* qui pourrait très bien correspondre à un projet de définition de l'infrastructure d'environnement avec de l'IaC en terraform d'une équipe SRE. Nos deux équipes ont alors chacun leur périmètre de responsabilité avec la possibilité de travailler conjointement au travers de MR sur l'ensemble des projets, le tout en préservant les actions de chacun par les périmètres de responsabilité définit sur les projets developpeur/maintainer.

![INFO](./assets/info.png) **Remarque :** La notion d'environnement GitLab ne s'applique pas sur un job *trigger*. De base, chaque projet amont vs aval a sa gestion propre de ses environnements, sauf en cas d'une relation implicite par exemple transmise au travers d'une variable.
