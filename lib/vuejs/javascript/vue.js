// 0. Si vous utilisez un système de module (par ex. via vue-cli), il faut importer Vue et Vue Router et ensuite appeler `Vue.use(VueRouter)`.

// 1. Définissez les composants de route.
// Ces derniers peuvent être importés depuis d'autre fichier
const Home = { template: '<div id="acceuil"></div>' }
const Bar = { template: '<div>hello world 2</div>' }

// 2. Définissez des routes.
// Chaque route doit correspondre à un composant. Le « composant » peut
// soit être un véritable composant créé via `Vue.extend()`, ou juste un
// objet d'options.
// Nous parlerons plus tard des routes imbriquées.
const routes = [
  { path: '/home', component: Home },
  { path: '/bar', component: Bar }
]

// 3. Créez l'instance du routeur et passez l'option `routes`.
// Vous pouvez également passer des options supplémentaires,
// mais nous allons faire simple pour l'instant.
const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})

// 5. Créez et montez l'instance de Vue.
// Soyez sûr d'injecter le routeur avec l'option `router` pour
// permettre à l'application tout entière d'être à l'écoute du routeur.
const app = new Vue({
  router
}).$mount('#app')

// L'application est maintenant en marche !