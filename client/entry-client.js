import Vue from 'vue'
import Vuetify from 'vuetify'
import Index from './src/index.vue'

// const IndexImporter = import('./src/index.vue')

    Vue.use(Vuetify)
    const app = new Vue({ render: h => h(Index) })

    app.$mount('#app')