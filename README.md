# Epitech-Msc1-T-WEB-800
# Epic Road Trip - Dream & Ride

## Sommaire

1. [Définition du projet](#définition-du-projet)
   1. [Spécifications de l'API](#spécifications-de-lapi)
   2. [API externes et microservices](#api-externes-et-microservices)
   3. [Développement piloté par les tests](#développement-piloté-par-les-tests)
   4. [Documentation](#documentation)
   5. [Automatisation](#automatisation)
   6. [UI / UX](#ui--ux)
   7. [Bonus](#bonus)
2.

## Définition du projet

Certains sont trop paresseux, certaines sont trop paresseuses, et d'autres sont trop occupé.e.s...
Beaucoup de personnes ne peuvent pas organiser des vacances par elles-mêmes...

Donc, vous allez le faire en leur nom, grâce à un incroyable planificateur de voyage qui rassemble des informations, et suggère des événements et des services !

Lorsque les utilisateurs et utilisatrices entrent des mots-clés, correspondant à un lieu (ou autre), votre application web s'occupe de tout.

De tout pour qu'iels n'aient plus qu'à choisir, se détendre, manger, boire, dormir, s'amuser...

L'application doit inclure toutes les fonctionnalités suivantes :
- saisir un (ou plusieurs) lieu(x),
- affiner les résultats en fonction des dates, du budget, de la région,
- obtenir des suggestions sur les événements culturels et sportifs,
- obtenir des propositions d'hébergement, de restaurants, de bars, de transports,
- visualiser de multiples informations et événements sur une carte,
- obtenir des suggestions d'itinéraires entre deux points,
- obtenir une version imprimable des détails du voyage des utilisateurs et utilisatrices, avec des cartes,
- enregistrer leur recherche pour la réutiliser ou la partager.


Ce projet est ambitieux, mais vous allez devoir vous prouver que vous pouvez le compléter
entièrement en très peu de temps, grâce à la qualité et aux ressources que d'autres ont déjà mises à votre disposition.

### Spécifications de l'API

Vous allez maintenant créer votre propre API. Voici, entre autres, quelques spécifications à respecter :
- profiter (lieu [, contraintes]) -> liste des événements et/ou activités existantes ;
- dormir (lieu [, contraintes]) -> liste des hébergements disponibles ;
- voyager (lieu [, contraintes]) -> liste des transports disponibles ;
- manger (lieu [, contraintes]) -> liste des restaurants disponibles ;
- boire (lieu [, contraintes]) -> liste des bars disponibles.
Vous devez penser à chaque information qui définit un événement, une activité, un restaurant, un bar, un transport.

### API externes et microservices

Vous devez trouver quelques sites Web qui peuvent vous fournir des tonnes d'informations. Ensuite, apprenez comment récupérer et afficher ces informations sur votre site Web, de la manière qui convient le mieux aux utilisateurs et utilisatrices.

### Développement piloté par les tests

Vous voulez devenir la crème de la crème et faire partie de l'élite. Vous devez donc faire des tests
avant de mettre en œuvre ! Les tests garantiront que votre application remplit correctement les fonctionnalités attendues. 

`Des outils comme Jasmine peuvent vous aider dans ce processus.`

### Documentation

Vous devez donner autant que vous recevez. Vous allez donc partager votre API avec d'autres personnes et vous devez la documenter pour les aider également.

`Des outils tels que Swagger peuvent vous aider dans ce processus.`

### Automatisation

L'objectif de votre site est de combiner à terme un certain nombre de microservices. Vous pouvez donc
ajouter de nouvelles fonctionnalités à votre API au fur et à mesure. 

Pour faciliter la détection d'éventuelles erreurs futures lors de ces ajouts, nous vous suggérons de
d'apprendre à automatiser plusieurs tâches telles que le lancement de tests, la génération de documentation (à compléter par écrit si nécessaire) et le déploiement.

`Des outils comme Gulps peuvent vous aider dans cette démarche.`

### UI / UX

L'IU et/ou l'UX peuvent faire une grande différence. Assurez-vous que les informations sont faciles à accéder et à comprendre.

`Votre application doit pouvoir être utilisée sur un smartphone, elle doit donc être réactive et responsive.`

### Bonus

Vous pouvez améliorer ce projet de plusieurs façons, notamment :
- en consommant plus de microservices,
- ajouter d'autres fonctionnalités,
- inclure un microservice de paiement,
- proposer des vidéos d'autres expériences d'utilisateurs et utilisatrices,
- planifier un voyage intergalactique de Tatooine à Dagobah,
- inverser le processus (choisir un événement => trouver des lieux),
- augmenter la sécurité de votre site web.