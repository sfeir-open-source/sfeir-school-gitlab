<!-- .slide: class="transition" -->

# Module 2 : Déploiements

Notes:
Version 1

##==##

<!-- .slide:-->

# Rappels Environments

![center](./assets/images/recap-environments.svg)

##==##

<!-- .slide:-->

# Déploiements : Les environnements

- Suivi de l'état de chaque environnement

Doc : [Environments and deployments | GitLab](https://docs.gitlab.com/ee/ci/environments/)

![center h-300](./assets/images/p3_i132.png)

##==##

<!-- .slide:-->

# Déploiements : Les environnements

- Suivi de l'état de chaque environnement
- Donne accès à un set de variables d'environnements

Doc : [Environments and deployments | GitLab](https://docs.gitlab.com/ee/ci/environments/)

![center h-300](./assets/images/p4_i139.png)

##==##

<!-- .slide:-->

# Déploiements : Les environnements

- Suivi de l'état de chaque environnement
- Donne accès à un set de variables d'environnements
- Défini pour un job

Doc : [Environments and deployments | GitLab](https://docs.gitlab.com/ee/ci/environments/)

![center h-300](./assets/images/p5_i146.png)

##==##

<!-- .slide:-->

# Déploiements : Les environnements

- Suivi de l'état de chaque environnement
- Donne accès à un set de variables d'environnements
- Défini pour un job
- Deux types : statique ou dynamique

Doc : [Environments and deployments | GitLab](https://docs.gitlab.com/ee/ci/environments/)

<div class="flex-row">
<img class="h-300" src="./assets/images/p6_i153.png">
<img class="h-300" src="./assets/images/p6_i154.png">
</div>

##==##

<!-- .slide:-->

# Déploiements : Review Apps

Avantages:

- Permet de compléter toutes les phases du pipeline avant de merger

Doc : [Review Apps | GitLab](https://docs.gitlab.com/ee/ci/review_apps/index.html)

![center](./assets/images/rappels-ci-cd-1.svg)

##==##

<!-- .slide: class="two-column"-->

# Déploiements : Review Apps

Avantages:

- Permet de compléter toutes les phases du pipeline avant de merger
- Réduit la complexité du workflow

Doc : [Review Apps | GitLab](https://docs.gitlab.com/ee/ci/review_apps/index.html)

##--##

![center w-400](./assets/images/p8_i175.png)

##==##

<!-- .slide:-->

# Déploiements : Review Apps

Avantages:

- Permet de compléter toutes les phases du pipeline avant de merger
- Réduit la complexité du workflow
- Isolation

![center h-400](./assets/images/p9_i182.png)

Doc : [Review Apps | GitLab](https://docs.gitlab.com/ee/ci/review_apps/index.html)

##==##

<!-- .slide:-->

# Déploiements : Review Apps

Avantages:

- Permet de compléter toutes les phases du pipeline avant de merger
- Réduit la complexité du workflow
- Isolation
- Répétabilité

![center h-300](./assets/images/p10_i197.png)
![center](./assets/images/rappels-ci-cd-1.svg)

##==##

<!-- .slide: class="two-column"-->

# Déploiements : Review Apps

Avantages:

- Permet de compléter toutes les phases du pipeline avant de merger
- Réduit la complexité du workflow
- Isolation
- Répétabilité

Inconvénients:

- Être en capacité provisionner un environnement à la demande

##--##

![h-800 center](./assets/images/deploiement-review-app.svg)

##==##

<!-- .slide: class="two-column"-->

# Déploiements : Review Apps

Avantages:

- Permet de compléter toutes les phases du pipeline avant de merger
- Réduit la complexité du workflow
- Isolation
- Répétabilité

Inconvénients:

- Être en capacité provisionner un environnement à la demande
- Peut devenir coûteux en terme d'infrastructure

##--##

<br><br>

![center](./assets/images/p12_i221.png)

##==##

<!-- .slide: class="exercice"-->

# Environments & Review Apps

## Lab

- Créer des environnements GitLab

- Mettre en place une review app

##==##

<!-- .slide:-->

# Communiquer : Tags

- Référence à un commit

![center h-700](./assets/images/p14_i234.png)

##==##

<!-- .slide:-->

# Communiquer : Tags

- Référence à un commit
- Documente l'historique

![center h-700](./assets/images/p16_i248.png)

##==##

<!-- .slide:-->

# Communiquer : Releases

- Metadata autour d'un tag

![center h-600](./assets/images/p17_i255.png)

##==##

<!-- .slide:-->

# Communiquer : Releases

- Metadata autour d'un tag
- Archive le code et les assets

![center h-600](./assets/images/p18_i262.png)

##==##

<!-- .slide: class="two-column"-->

# Communiquer : Releases

- Metadata autour d'un tag
- Archive le code et les assets
- Evidence collection

##--##

![center h-800](./assets/images/p19_i269.png)

##==##

<!-- .slide: class="two-column"-->

# Communiquer : Releases

- Metadata autour d'un tag
- Archive le code et les assets
- Evidence collection
- Release note

##--##

![center h-800](./assets/images/p20_i276.png)

##==##

<!-- .slide:-->

# Communiquer : Releases

- Metadata autour d'un tag
- Archive le code et les assets
- Evidence collection
- Release note
- Lien avec les milestones

![center h-300](./assets/images/p21_i283.png)

##==##

<!-- .slide: class="exercice"-->

# Release

## Lab

- Créer une release

- Recevoir des notifications

##==##

<!-- .slide:-->

# Analytics

- CI /CD

![center h-700](./assets/images/p23_i296.png)

##==##

<!-- .slide:-->

# Analytics

- CI /CD
- Repository

![center h-600](./assets/images/p24_i303.png)

##==##

<!-- .slide:-->

# Analytics

- CI /CD
- Repository
- Value Stream

![center h-300](./assets/images/p25_i310.png)

##==##

<!-- .slide:-->

# Analytics

![float-right](./assets/images/p26_i317.png)

- CI /CD
- Repository
- Value Stream
- Insight (Ultimate)
