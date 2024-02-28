<!-- .slide: class="transition" -->

# Module 3 : Aller plus loin

Notes:
Version 1

##==##

<!-- .slide:-->

# Integrations

<div class="flex-row">
<img src="./assets/images/p2_i55.png" class="h-300">
</div>
<div class="flex-row">
<img src="./assets/images/p2_i57.png" class="h-300">

<img src="./assets/images/p2_i58.png" class="h-300">

<img src="./assets/images/p2_i59.png" class="h-300">
</div>

<br>
Et bien d'autres...

##==##

<!-- .slide: class="two-column"-->

# Les API GitLab

API ( APPLICATION PROGRAMMING INTERFACE )

- Permet de réaliser des opérations
  - Issue, milestones

##--##

<br><br><br>

![center h-600](./assets/images/api-gitlab.svg)

##==##

<!-- .slide:-->

# Les API GitLab

API ( APPLICATION PROGRAMMING INTERFACE )

- Permet de réaliser des opérations
  - Issue, milestones
  - Commit, tags, releases

##==##

<!-- .slide:-->

# Les API GitLab

API ( APPLICATION PROGRAMMING INTERFACE )

- Permet de réaliser des opérations
  - Issue, milestones
  - Commit, tags, releases
  - Pipeline

##==##

<!-- .slide:-->

# Les API GitLab

API ( APPLICATION PROGRAMMING INTERFACE )

- Permet de réaliser des opérations
  - Issue, milestones
  - Commit, tags, releases
  - Pipeline
- REST et GraphQL

##==##

<!-- .slide: class="two-column"-->

# Les API GitLab

API ( APPLICATION PROGRAMMING INTERFACE )

- Permet de réaliser des opérations
  - Issue, milestones
  - Commit, tags, releases
  - Pipeline
- Rest et GraphQL

Doc : https://docs.gitlab.com/ee/api/

##--##

<br><br><br>

![h-600 center](./assets/images/p7_i105.png)

##==##


<!-- .slide: class="two-column"-->

# Webhooks

- Permet de lancer un appel API

##--##

![h-800 center](./assets/images/p9_i118.png)

##==##

<!-- .slide: class="two-column"-->

# Webhooks

- Permet de lancer un appel API
- En réaction aux événements du projet
  - Push, Tag

##--##

<br><br>

![h-700 center](./assets/images/p10_i125.png)

##==##

<!-- .slide: class="two-column"-->

# Webhooks

- Permet de lancer un appel API
- En réaction aux événements du projet
  - Push, Tag
  - Issue, Merge request, comment

##--##

<br><br>

![h-700 center](./assets/images/p10_i125.png)

##==##

<!-- .slide: class="two-column"-->

# Webhooks

- Permet de lancer un appel API
- En réaction aux événements du projet
  - Push, Tag
  - Issue, Merge request, comment
  - Release, deploiement

##--##

<br><br>

![h-700 center](./assets/images/p10_i125.png)

##==##

<!-- .slide: class="two-column"-->

# Webhooks

- Permet de lancer un appel API
- En réaction aux événements du projet
  - Push, Tag
  - Issue, Merge request, comment
  - Release, deploiement
  - group

##--##

<br><br>

![h-700 center](./assets/images/p10_i125.png)

##==##

<!-- .slide: class="two-column"-->

# Webhooks

- Permet de lancer un appel API
- En réaction aux événements du projet
  - Push, Tag
  - Issue, Merge request, comment
  - Release, deploiement
  - group
- Contient les infos de l'événement

##--##

<br><br>

![h-700 center](./assets/images/p14_i153.png)

Notes:
Le webhook emet un post et son body contient les infos de l'évent

##==##

<!-- .slide: class="exercice" -->

# Webhooks

## Lab

##==##

<!-- .slide:-->

# Packages et registries

API Gitlab pour publier et utiliser dans les pipelines ou hors gitlab.

- Gestionnaire de package (package registry)
  - Maven, npm, nuget, pypi, tarball
  - En beta: composer, conan, helm
  - En attente: debian, go, ruby gems
- Gestionnaire container docker
- Gestionnaire terraform modules (infrastructure registry)

##==##

<!-- .slide:-->

# Infrastructure

API Gitlab pour exploiter des infras déployés

- Cluster kubernetes
- Google cloud (GCP)
- Gestionnaire terraform backend (tfstate)

##==##

# Tracabilité (todo, quick actions, time tracking)

Todo list : Simple liste de MR identifié à traiter

- Quand une Issue/MR est assignée à soi.
- Quand la review d’une MR est assignée à soi.
- Quand on est identifié dans un commentaire, un description sur les issues, MR, epics
- Quand une MR ne peux pas être mergé et qu’on est le owner
- Quand on le souhaite

Quick actions - Série de mot clé préfixé par un /

- Faire une ou plusieurs actions supplémentaires sur la MR , l’issue ou l’epics(clore, attacher un label, s’assigner, …)
- A saisir dans un commentaire ou une description.

##==##

# Tracabilité (todo, quick actions, time tracking)

Time tracking - Optionnel - Enregistrer un temps passé via quick action /spend <duration>

- S’applique au MR ou issue
- Créer un rapport
- Saisie libre, sans contrôle
- Interrogable via API en GraphQL

##==##

<!-- .slide: class="two-column"-->

# GitLab Wiki

- Documentation au coeur du projet
- Markdown, RDoc, AsciiDoc
- Organiser le contenu
<!-- .element: class="list-fragment" -->

##--##

<br><br><br>

![h-700 center](./assets/images/p19_i184.png)

##==##

<!-- .slide: class="two-column"-->

# GitLab Wiki

- Documentation au coeur du projet
- Markdown, RDoc, AsciiDoc
- Organiser le contenu
- Repository

##--##

<br><br><br>

![h-700 center](./assets/images/gitlab-wiki.svg)

##==##

<!-- .slide: class="two-column"-->

# GitLab Pages

- Hébergement gratuit

##--##

<br><br><br>

![h-700 center](./assets/images/p23_i214.png)

##==##

<!-- .slide: class="two-column"-->

# GitLab Pages

- Hébergement gratuit
- Un site web statique

##--##

<br><br>

<div class="flew-row">
<img src="./assets/images/p24_i225.png" class="h-200">
<img src="./assets/images/p24_i226.png" class="h-200">
<img src="./assets/images/p24_i227.png" class="h-200">
</div>

##==##

<!-- .slide: class="two-column"-->

# GitLab Pages

- Hébergement gratuit
- Un site web statique
- Groupes, utilisateurs ou projets

##--##

<br><br><br>

![h-700 center](./assets/images/p25_i234.png)

##==##

<!-- .slide: class="two-column"-->

# GitLab Pages

- Hébergement gratuit
- Un site web statique
- Groupes, utilisateurs ou projets
- Support TLS

##--##

<br><br><br>

![h-700 center](./assets/images/p26_i241.png)
##==##

<!-- .slide: class="exercice" -->

# Gitlab Pages

## Lab

- Publier un package dans la registry Gitlab

- Déployer un site statique Gitlab Pages
