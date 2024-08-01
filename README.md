# README

Ce fichier README contient des instructions sur la façon de lancer les scripts back-end et front-end de ce projet.

## Scripts Back-end

> [!NOTE]
> Il est important avant de lancer le projet d'avoir Node.js installé sur votre machine.

Pour lancer les scripts back-end, suivez les étapes suivantes :

1. Assurez-vous d'avoir Node.js installé sur votre machine. Si ce n'est pas le cas, installez-le !
2. Ouvrez une fenêtre de terminal.
3. Accédez au répertoire du projet `back`.
4. Exécutez la commande `npm i` pour installer les dépendances.
5. Lancez votre serveur Wamp/Wamp puis accédez à la création d'une base de données. Appelez-la comme vous le souhaitez.
6. Accédez à votre fichier `.env` et modifiez les éléments suivants :

{mdp_de_bdd} - Si vous en avez un, placez votre mot de passe ici, sinon retirez-le `:`
{port_de_votre_bdd} - Mettez le port de votre serveur
{nom_de_votre_bdd} - Insérez le nom de votre base de données
```
DATABASE_URL="mysql://root:{mdp_de_bdd}@localhost:{port_de_votre_bdd}/{nom_de_votre_bdd}"
JWT_SECRET=""
```

8. Une fois ces étapes terminées, entrez la commande `npx prisma migrate dev`. La création des tables se fera automatiquement.
9. Pour finir, exécutez la commande `npm run dev` pour démarrer le serveur back-end.

## Scripts Front-end

Pour lancer les scripts front-end, suivez les étapes suivantes :

1. Ouvrez une nouvelle fenêtre de terminal.
2. Accédez au répertoire du projet `front`.
3. Exécutez la commande `npm install` pour installer les dépendances.
4. Ensuite, exécutez la commande `npm run dev` pour démarrer l'application front-end.

Ces instructions vous permettront de lancer les scripts back-end et front-end de ce projet sans aucun problème.

Rendez-vous maintenant sur votre localhost que Vite vous a défini. 
![Retrouvez le ici :](exemple.png)
