<!-- .slide: class="transition"-->

# Module 1 : Intégration, déploiement, livraison

Notes:
Version 1

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

![center](./assets/images/p2_i56.png)

##==##

<!-- .slide: class="quote-slide"-->

# Rappels autour du CI / CD

<blockquote>
<cite>
Continuous Integration is a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily - leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible.
</cite>
</blockquote>

![](./assets/images/p3_i63.png)

[Source : Practices of Continuous Integration](https://www.martinfowler.com/articles/continuousIntegration.html)

<!-- .element: class="credits" -->

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

Continuous Integration pourquoi ?

- Accélérer la boucle de feedback

![center](./assets/images/rappels-ci-cd-1.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

- Accélérer la boucle de feedback
- S'assurer de répondre aux exigences :
  - Pas de bug connu

![center](./assets/images/rappels-ci-cd-2.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

- Accélérer la boucle de feedback
- S'assurer de répondre aux exigences :
  - Pas de bug connu
  - Qualité du code

![center](./assets/images/rappels-ci-cd-3.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

- Accélérer la boucle de feedback
- S'assurer de répondre aux exigences :
  - Pas de bug connu
  - Qualité du code
  - Niveau de performance

![center](./assets/images/rappels-ci-cd-4.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

- Accélérer la boucle de feedback
- S'assurer de répondre aux exigences :
  - Pas de bug connu
  - Qualité du code
  - Niveau de performance
  - Niveau de sécurité

![center](./assets/images/rappels-ci-cd-5.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

- Accélérer la boucle de feedback
- S'assurer de répondre aux exigences :
  - Pas de bug connu
  - Qualité du code
  - Niveau de performance
  - Niveau de sécurité
- Réduire le nombre d'erreurs humaines

![center](./assets/images/rappels-ci-cd-6.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI /CD

- Accélérer la boucle de feedback
- S'assurer de répondre aux exigences :
  - Pas de bug connu
  - Qualité du code
  - Niveau de performance
  - Niveau de sécurité
- Réduire le nombre d'erreurs humaines
- Aider les nouveaux venues à s'intégrer
- ...

![center](./assets/images/rappels-ci-cd-7.svg)

##==##

<!-- .slide: class="flex-row" -->

# Dans nos projets

<div class="flex-row">
<img class="h-200" src="./assets/images/p11_i168.png">
<img class="h-200" src="./assets/images/p11_i169.png">
<img class="h-200" src="./assets/images/p11_i170.png">
</div>
<div class="flex-row">
<img class="h-200" src="./assets/images/p11_i171.png">
<img class="h-200" src="./assets/images/p11_i172.png">
<img class="h-200" src="./assets/images/p11_i173.png">
<img class="h-200" src="./assets/images/p11_i174.png">
</div>

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Inventaire :

- Le code source dans un SCM

![](./assets/images/ci-cd-recap-1.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Inventaire :

- Le code source dans un SCM
- Une solution d'intégration continue:

![](./assets/images/ci-cd-recap-2.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Inventaire :

- Le code source dans un SCM
- Une solution d'intégration continue:
  - Valider chaque contribution

![](./assets/images/ci-cd-recap-3.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Inventaire :

- Le code source dans un SCM
- Une solution d'intégration continue:
  - Valider chaque contribution
  - Générer les artefacts

![](./assets/images/ci-cd-recap-3.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Inventaire :

- Le code source dans un SCM
- Une solution d'intégration continue:
  - Valider chaque contribution
  - Générer les artefacts
- Une solution de stockage pour les artefacts

![](./assets/images/ci-cd-recap-4.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Inventaire :

- Le code source dans un SCM
- Une solution d'intégration continue:
  - Valider chaque contribution
  - Générer les artefacts
- Une solution de stockage pour les artefacts
- Cloud ou solution de provisioning d'infrastructure

![](./assets/images/ci-cd-recap-5.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Et GitLab ?

- Le code source dans un SCM
- Une solution d'intégration continue:
  - Valider chaque contribution
  - Générer les artefacts
- Une solution de stockage pour les artefacts
- Cloud ou solution de provisioning d'infrastructure

![](./assets/images/ci-cd-recap-5.svg)

##==##

<!-- .slide:-->

# Rappels autour du CI / CD

Et GitLab ? OK

- Le code source dans un SCM
- Une solution d'intégration continue:
  - Valider chaque contribution
  - Générer les artefacts
- Une solution de stockage pour les artefacts
- Cloud ou solution de provisioning d'infrastructure

![](./assets/images/ci-cd-recap-5.svg)

##==##

<!-- .slide: class="exercice"-->

# Gitlab CI / CD - Lab 1

## Lab

Créer son premier pipeline

##==##

<!-- .slide:-->

## Runner

### Executor

![h-800 center](./assets/images/executor.svg)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Runner

- Permet de lancer l'exécution d'un job

##--##

![](./assets/images/executor-lab-1-1.svg)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Runner

- Permet de lancer l'exécution d'un job
- Managed ou Self-managed (application go)

##--##

![](./assets/images/executor-lab-1-2.svg)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Runner

- Permet de lancer l'exécution d'un job
- Managed ou Self-managed (application go)
- Shared / Group / Specific

##--##

![](./assets/images/executor-lab-1-2.svg)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Runner

- Permet de lancer l'exécution d'un job
- Managed ou Self-managed (application go)
- Shared / Group / Specific
- Des tags pour choisir son runner

Doc : [GitLab Runner | GitLab](https://docs.gitlab.com/runner/)

##--##

![](./assets/images/executor-lab-1-2.svg)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Executor

- L'environnement d'exécution
- Différent types (ex : ssh, docker, docker machine, kubernetes ...)
<!-- .element: class="list-fragment" -->

Doc : [Executors | GitLab](https://docs.gitlab.com/runner/executors/)

<!-- .element: class="fragment" -->

##--##

![](./assets/images/executor-lab-1-3.svg)

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI /CD : managed shared runners

- Linux environment

doc : [GitLab.com settings | GitLab](https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners)

##--##

![](./assets/images/p28_i356.png)

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI /CD : managed shared runners

- Linux environment
- Docker Machine executor

doc : [GitLab.com settings | GitLab](https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners)

##--##

![](./assets/images/p29_i363.png)

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI /CD : managed shared runners

- Linux environment
- Docker Machine executor
- Autoscale GCP instances

doc : [GitLab.com settings | GitLab](https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners)

##--##

![](./assets/images/p30_i370.png)

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI /CD : managed shared runners

- Linux environment
- Docker Machine executor
- Autoscale GCP instances
- [n1-standard-1](https://cloud.google.com/compute/docs/machine-types#n1_standard_machine_types) instances

doc : [GitLab.com settings | GitLab](https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners)

##--##

![center h-150](./assets/images/p31_i377.png)

1 vCPU

<!-- .element: style="text-align:center;" -->

![center h-150](./assets/images/p31_i378.png)

3.75 Go

<!-- .element: style="text-align:center;" -->

![center h-150](./assets/images/p31_i379.png)

25 Go

<!-- .element: style="text-align:center;" -->

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI /CD : managed shared runners

- Linux environment
- Docker Machine executor
- Autoscale GCP instances
- [n1-standard-1](https://cloud.google.com/compute/docs/machine-types#n1_standard_machine_types) instances
- Image par défaut : Ruby

doc : [GitLab.com settings | GitLab](https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners)

##--##

![h-500](./assets/images/p32_i389.png)

##==##

<!-- .slide:  class="exercice"-->

# Gitlab CI / CD

## Lab

- Modification du fichier .gitlab-ci.yml

- Les executors

##==##

<!-- .slide: class="two-column" -->

# GitLab CI / CD : Jobs

- Exécutent des commandes sur un exécuteur

##--##

![h-400](./assets/images/p34_i402.png)

##==##

<!-- .slide: class="two-column" -->

# GitLab CI / CD : Jobs

- Exécutent des commandes sur un exécuteur
- Peuvent s'exécuter en parallèle

##--##

![h-400](./assets/images/p35_i409.png)

##==##

<!-- .slide: -->

# GitLab CI / CD : Jobs

- Exécutent des commandes sur un exécuteur
- Peuvent s'exécuter en parallèle
- statut du job = statut de la commande

![h-300](./assets/images/p36_i416.png)

##==##

<!-- .slide:  class="two-column" -->

# Gitlab CI / CD : Stages

- Permet de séquencer le build

<br><br>
![h-300](./assets/images/p37_i423.png)

##--##

![mt-380 h-300](./assets/images/p37_i424.png)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Stages

- Permet de séquencer le build
- Peut contenir plusieurs jobs

<br><br>
![h-300](./assets/images/p38_i432.png)

##--##

![mt-300 h-500](./assets/images/p38_i433.png)

##==##

<!-- .slide:-->

# Gitlab CI / CD : Stages

- Permet de séquencer le build
- Peut contenir plusieurs jobs
- Un stage en erreur stop le build

![h-300 center](./assets/images/p39_i446.png)

##==##

<!-- .slide:-->

# Gitlab CI / CD : Job options

- Execution
  - image / script / stage
  - tags
  - environment / variables / secrets
  - cache / artifacts
  <!-- .element: class="list-fragment" -->

Source : [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI / CD : Job options

- Execution
  - image / script / stage
  - tags
  - environment / variables / secrets
  - cache / artifacts
- Spécificités du flow d'exécution
  - when

Source : [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

##--##

![mt-700 h-200](./assets/images/p44_i477.png)

##==##

<!-- .slide: class="two-column"-->

# Gitlab CI / CD : Job options

- Execution
  - image / script / stage
  - tags
  - environment / variables / secrets
  - cache / artifacts
- Spécificités du flow d'exécution
  - when
  - retry

Source : [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

##--##

![mt-700 h-200](./assets/images/p45_i484.png)

##==##

<!-- .slide:-->

# Gitlab CI / CD : Job options

- Execution
  - image / script / stage
  - tags
  - environment / variables / secrets
  - cache / artifacts
- Spécificités du flow d'exécution
  - when
  - retry
  - timeout / interruptible

Source : [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

##==##

<!-- .slide: class="two-column" -->

# Gitlab CI / CD : Job options

- Execution
  - image / script / stage
  - tags
  - environment / variables / secrets
  - cache / artifacts
- Spécificités du flow d'exécution
  - when
  - retry
  - timeout / interruptible
  - parallel

Source : [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

##--##

![mt-700 h-200](./assets/images/p47_i497.png)

##==##

<!-- .slide:-->

# Gitlab CI / CD : Job options

- Execution
  - image / script / stage
  - tags
  - environment / variables / secrets
  - cache / artifacts
- Spécificités du flow d'exécution
  - when
  - retry
  - timeout / interruptible
  - parallel
- Specificités workflow
  - Rules / only / except

Source : [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html)

##==##

<!-- .slide: class="exercice"-->

# Gitlab CI / CD

## Lab

- Controller le flow d'execution

- Optimiser les performance de build

- Implémenter le workflow de développement

##==##

<!-- .slide:-->

# Gitlab CI / CD : Workflows

- Permet de décider quand le pipeline est créé

Doc: [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html#workflow)

##==##

<!-- .slide:-->

# Gitlab CI / CD : Workflows

- Permet de décider quand le pipeline est créé
- Permet de modifier les variables selon le déclencheur

Doc: [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html#workflow)

![h-300 center](./assets/images/p51_i522.png)

##==##

<!-- .slide:-->

# Gitlab CI / CD : Workflows

- Permet de décider quand le pipeline est créé
- Permet de modifier les variables selon le déclencheur

![sfeir-icons big](alert-triangle) Duplication de pipelines

Doc: [Keyword reference for the .gitlab-ci.yml file | GitLab](https://docs.gitlab.com/ee/ci/yaml/README.html#workflow)

##==##

<!-- .slide: class="two-column"-->

# GitLab CI / CD : auto devops

- Utilisation de templates

Doc : [Auto DevOps | GitLab](https://docs.gitlab.com/ee/topics/autodevops/)

##--##

![mt-700 h-300](./assets/images/p53_i537.png)

##==##

<!-- .slide: class="two-column"-->

# GitLab CI / CD : auto devops

- Utilisation de templates
- Déploiement dans Kubernetes

Doc : [Auto DevOps | GitLab](https://docs.gitlab.com/ee/topics/autodevops/)

##--##

![h-400 center](./assets/images/p54_i544.png)

##==##

<!-- .slide: -->

# GitLab CI / CD : auto devops

- Utilisation de templates
- Déploiement dans Kubernetes
- Kubernetes piloté par Gitlab

Doc : [Auto DevOps | GitLab](https://docs.gitlab.com/ee/topics/autodevops/)

![](./assets/images/kub-driven-by-gitlab.svg)

##==##

<!-- .slide: class="two-column"-->

# GitLab CI / CD : auto devops

- Utilisation de templates
- Déploiement dans Kubernetes
- Kubernetes piloté par Gitlab
- Monitoring Automatique

Doc : [Auto DevOps | GitLab](https://docs.gitlab.com/ee/topics/autodevops/)

##--##

![mt-600 h-400](./assets/images/p56_i560.png)

##==##

<!-- .slide:-->

# GitLab CI / CD : auto devops

- Utilisation de templates
- Déploiement dans Kubernetes
- Kubernetes piloté par Gitlab
- Monitoring Automatique
- 1 namespace = 1 environment

![h-500 center](./assets/images/p57_i567.png)

##==##

<!-- .slide: class="transition"-->

# Demo

## AutoDevOps

Notes:
Link to AutoDevOps templates :
https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates

Link to Root template :
https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Auto-DevOps.gitlab-ci.yml

Show Deployment from master, do rollout and show environments.Kubernetes link limited. No performance cluster graphs (depreceated)Possibly replaced by Opstrace (based on prometheus)

##==##

<!-- .slide:-->

# GitLab CI / CD : Downstream Pipelines

- Permettent de déclencher un "sous-pipeline" :
  - au sein d'un même projet : *parent-child pipeline*
  - d'un ou plusieur(s) autre(s) projet(s) : *multi-project pipeline* 

Doc : https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html
<br><br>
Exemple : *parent-child pipeline*
<br>
![h-300](./assets/images/p59_i569.png)

##==##

<!-- .slide: class="exercice"-->

# Gitlab CI / CD - Lab 4

## Lab

Les Downstream Pipelines

