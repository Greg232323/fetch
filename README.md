# API TMDB

Récupérer des informations de film sur l'API TMDB => https://www.themoviedb.org

- Sur l'`index.html`, afficher les 20 films tendances (trendings) de la semaine
- Sur la page `search.html`, un input permets d'afficher une liste de film/séries, en cliquant sur l'un de ces élément on affiche les détails

**Commencez par la page home(index.html), rendez la fonctionnel APRES vous pourrez passer à la page search.html**

Quelque soit la page un "film" doit afficher :

- title
- image
- nombre de vote
- note moyenne
- date de sortie au format dd/mm/yyyy
- scenario
Avec en plus pour la page `search.html`:
- la/les boite(s) de production et un lien menant sur leur site web
`! N'oubliez pas de vérifier si la/les boite(s) de production existe et/ou ont un site web.`
`Avec un message, s'il n'y en a aucune !`

## RÈGLES

- `PAS` d'injection dans le DOM avec document.write ni innerHTML
- type module

### ressources

2 moyens pour gérer l'autorisation de la requête:
la moderne du site TMDB ( voir cours FETCH)

sinon celle ci-dessous

```js
fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US/trending/movie/week?api_key=${API_KEY}`)
```

```js
const API_KEY = "rentrer ici votre clé api";
```

URL image

```js
// l'url de base à utiliser pour afficher l'image du film
const API_URL_IMG = "https://image.tmdb.org/t/p/original";
```

**Commencez par la page home(index.html), rendez la fonctionnel, `APRES` vous pourrez passer à la page search.html**
