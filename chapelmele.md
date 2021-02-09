# Un site statique, avec une interface de gestion du contenu

Petite présentation de ma création, et pourquoi c'est mieux que les autres options (pour Chapelmele).

## Petit tour des différentes options

Contrairement à Wordpress ou Wix (les 2 autres options les plus évidentes), chapelmele.com est un site statique.


> Site statique : les pages du site ne sont pas modifiable par des utilisateurs. 
> 
> Le site est donc rempli et mis à jour par l'administrateur qui le fait depuis son poste de travail. Une fois le site mis à jour sur l'ordinateur de l'administrateur, celui-ci devra être envoyé sur le site via FTP. 
> 
> Le site est dit statique car les pages HTML qui le compose sont toujours identiques entre deux visites sans mise à jour. Le serveur donc n'a pas besoin de éléments de scripting (Php, Perl, Python) et de base de données (MySQL, SQLite) pour faire fonctionner le site, puisqu'il sert directement des pages HTML.

http://www.lorenzon.ovh/site-statique.html

Les deux autres résolvent ce problème spécifiquement, et chacun se positionne différement:

* **Wix**: rendre la création d'un site le plus simple et le plus rapide possible. Imaginez un openspace où tous les murs sont des cloisons sur roulette: tout est super adaptable et flexible, mais rien n'est vraiment bien agencé non plus et tu vas sûrement pas avoir de salle de bain amovible.

* **Wordpress**: simplifier le plus possible la tâche de qui est prêt à mettre de l'energie à faire un site. Dans la même analogie, disons que c'est la construction au parpaing. Ca marche rûdement bien, et tout le monde l'utilise, pour plein de bonnes raisons. Par contre c'est pas fun à utiliser, jamais très joli, et si en fait ta maison tu la veux suspendue dans les arbres, ben ça va marcher que moyen.

Un **site statique** en comparaison, c'est soit tu t'en fais un parce-que tu sauras le mettre à jour, soit quelqu'un te le fait et tu passes par lui pour les modifs. 

En contrepartie on a de nombreux avantages, la plupart plus ou moins directement liés à la simplicité de l'architecture. Moins il y a de logiciels qui tournent, moins il y a de bugs, de maintenance, et plus ça va vite. Un site statique c'est 0 logiciel qui tourne, juste une liste de documents.

* **Wix**, c'est `un logiciel` géré par une boite, `qui génère et envoie un autre logiciel` à vos ordis ou téléphones. Vos appareils executent ce logiciel `pour générer le document` que vous voyez à l'écran.

* **Wordpress**, c'est `un logiciel` développé par une communauté, installé sur un serveur que vous louez à une boite ou une autre. Ce logiciel `génère des documents` qui sont envoyés à votre ordi ou tél et qu'il peut directement afficher.

* Un **site statique**, c'est `directement des documents` mis en ligne que vos appareils peuvent obtenir et afficher.

## Pas de maintenance nécessaire


> [Un site statique] n'a pas de logiciel sous-jacent à maintenir
> 
> Nous en avons un peu parlé il y a une seconde, mais revenons-en rapidement à la question, car c’est l’un des principaux avantages du HTML statique.

> Lorsque vous utilisez WordPress et les thèmes/plugins, vous êtes responsable de mettre à jour tout le code sous-jacent et de vous assurer qu’il n’y a aucun problème de compatibilité. Bien que cela soit assez simple (il vous suffit généralement de cliquer sur un bouton), c’est quelque chose que vous devez faire pour garder votre site Web sécurisé et fonctionnel.
> 
> D’un autre côté, si vous avez écrit du HTML statique propre, vous devriez être capable de laisser les choses en paix et de ne jamais vous soucier des mises à jour.


https://kinsta.com/fr/blog/wordpress-vs-html-statique/

## Frais d'hébergement: 0€

Il y a bien le nom de domaine (chapelmele.com) à louer, mais c'est inévitable quelle que soit la solution choisie.

* [wix](https://www.wix.com/upgrade/website) (domaine perso, pas de pub, limitations diverses): 10€50/mois

* [wordpress.com](https://wordpress.com/pricing/) (hébergement nu): 4€/mois


## Fonctionnalités sur mesure

Par exemple, bon courage pour faire un agenda comparable sur Wix. Pas de soucis avec Wordpress, il y aurait sûrement eu un plugin potable. Et ce qui n'existe pas peut être fait en worpress, tout y est possible. ~~mais tout y est chiant~~


## Mise à jour du contenu

Vous vous souvenez du début et du défaut principal d'un site statique ? Oui, et bien j'ai menti. Ou plutôt j'ai triché, et mis en place un fonctionnement hybride qui vous permet de mettre à jour votre site statique, en gardant quand même tous les avantages.

Quand vous vous connectez à l'interface d'administration, vous activez un mode qui permet de faire des modifications superficielles au contenu, et de les enregistrer comme sur un wordpress ou un wix. Ces éditions sont superficielles dans le sens où le `document` initial n'est pas réellement modifié, mais un tout petit `logiciel` est envoyé à l'ordi/téléphone du visiteur pour faire juste cette modif au dernier moment.

Ces edits superficiels peuvent ensuite être intégrés définitivement au site à proprement parler (par moi). Pas besoin de me déranger avant de faire la moindre modif, juste pour les pérenniser proprement.

Best of both worlds ?


## Performances

Et là on arrive dans les parties où le site statique va dominer incontestablement.


![screenshot google pagespeed insight 98%](https://raw.githubusercontent.com/centime/chapelmele/main/readme-imgs/pagespeedinsight-98-2021-02-09.png "google pagespeed insight 98%")


![screenshot gtmetrix performances 100%](https://raw.githubusercontent.com/centime/chapelmele/main/readme-imgs/gtmetrix-100-2021-02-09.png "gtmetrix performances 100%")

Ces scores reflètent les performances d'un site selon tout un tas de critères. Pour voir les détails:

* [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fchapelmele.com%2F&tab=mobile)
* [GTmetrix Performance Report](https://gtmetrix.com/reports/chapelmele.com/5gsIf3SK/)

Vous pouvez vous en foutre, mais les visiteurs pas trop, moi pas du tout, et faire de l'informatique performante c'est ma manière de luter contre l'obsolescence programmée. Même votre grand-mêre avec son ordi d'il y a 12 ans a le droit à une naviguation fluide et agréable.

Un autre qui ne s'en fout pas, c'est Google, qui en fait un critère d'évaluation pour le point suivant...


## Référencement

C'est cool d'avoir un site, c'est mieux s'il est lu. Pour ça, le mieux c'est d'être en haut des résultats de recherches pour tous les trucs pertinents.

Je vais pas faire un cours là-dessus ici, mais pour le SEO (Search Engine Optimization) la simplicité, la flexibilité, et les perfs d'un site statique sont imbattables.


## Sécurité

Sans logiciel, pas de bug. Sans bug, pas de vulnérabilité. Vous avez un mot de passe pour les modifs, tant que vous le perdez pas entre de mauvaises mains il n'y aura jamais la moindre tentative de hack.

~~En fait, mieux qu'un mot de passe, vous avez un (plusieurs!) [token (privilèges limités, révocable, etc...)](https://en.wikipedia.org/wiki/Access_token)~~


## Conclusion

[Ca m'a pris du temps](https://github.com/centime/chapelmele/commits/main), et [il me reste un paquet de trucs à faire](https://github.com/centime/chapelmele). Mais j'ai sincérement monté un truc vraiment cool, qui devrait vous servir, et Chapelmele, fidèlement.

Le design ne rend pas forcément justice à l'élégance de l'architecture, mais c'est juste pas là-dedans que je suis bon, alors j'ai fait de mon mieux.

Des bises,

Vincent

