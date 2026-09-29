# ZAS TRANSIT & TRADE

Site vitrine statique en HTML, CSS et JavaScript. Il fonctionne sans serveur applicatif, base de données ni dépendance JavaScript.

## Pages

- `index.html` : accueil
- `about.html` : entreprise et valeurs
- `services.html` : cinq services
- `contact.html` : coordonnées et demande de devis
- `mentions-legales.html` : informations préparatoires à vérifier avant publication

## Aperçu local

Depuis le dossier du projet, lancez un serveur statique local :

```powershell
python -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000>. Vous pouvez également ouvrir `index.html` directement, mais le serveur local reproduit mieux les conditions d’un hébergement statique.

## Demande de devis

Le formulaire n’enregistre et ne transmet aucune donnée automatiquement. Après validation, le visiteur choisit d’ouvrir WhatsApp ou de préparer un e-mail ; il vérifie et envoie le message dans l’application. Le navigateur ne peut pas joindre automatiquement le fichier sélectionné à ces liens. La réception de fichiers nécessiterait un service sécurisé configuré séparément.

## Images et logo

Le logo utilisé dans tous les en-têtes et comme favicon est `assets/images/logo.png`. L’original `logo.png`, les variantes `color zas.jpeg` et `black zas.jpeg`, ainsi que `favicon.jpg` restent disponibles à la racine. Si le logo est remplacé ou déplacé, mettez à jour ses chemins dans les pages HTML.

Les photographies sont stockées localement dans `assets/images/`. Leurs pages source indiquent un usage gratuit sous la licence Unsplash ; vérifiez que les conditions conviennent à votre usage avant publication commerciale.

- `port-ship.jpg` : [navire porte-conteneurs](https://unsplash.com/photos/blue-and-red-cargo-ship-on-sea-during-daytime-jOqJbvo1P9g)
- `container-terminal.jpg` : [conteneurs à quai](https://unsplash.com/photos/a-large-amount-of-containers-are-stacked-on-top-of-each-other-Annl9CjEaEs)
- `business-meeting.jpg` : [réunion professionnelle](https://unsplash.com/photos/people-having-meeting-on-rectangular-brown-table-ftCWdZOFZqo)
- `port-cranes.jpg` : [grues et conteneurs portuaires](https://unsplash.com/photos/port-cranes-and-stacked-shipping-containers-under-blue-sky-V-Kr_2VmyII)
- `cargo-dock.jpg` : [navires amarrés à un quai](https://unsplash.com/photos/cargo-ships-docked-at-the-pier-during-day-CpsTAUPoScw)
- `forklift-logistics.jpg` : [chariot élévateur](https://unsplash.com/photos/yellow-and-black-forklift-during-daytime-dI-aXC7DWpQ)
- `warehouse-stock.jpg` : [entrepôt de cartons et palettes](https://unsplash.com/photos/a-large-warehouse-filled-with-lots-of-boxes--aCrA9FmT8Y)
- `air-cargo.jpg` : [opérations de chargement à l’aéroport](https://unsplash.com/photos/a-large-airplane-is-being-loaded-with-luggage-miHHRMLDDH8)

## Publication avec GitHub Pages

1. Placez le contenu de ce dossier à la racine du dépôt GitHub (ou dans le dossier de publication configuré).
2. Dans le dépôt, ouvrez **Settings → Pages**.
3. Choisissez la source de déploiement souhaitée, par exemple la branche `main` et le dossier `/ (root)`, puis enregistrez.
4. Attendez la fin du déploiement et vérifiez les pages, images, liens et formulaire sur l’URL fournie par GitHub.

Aucun dépôt distant n’a été modifié dans le cadre de la création de ce site. Complétez et vérifiez `mentions-legales.html` et les droits des images avant la mise en ligne.
