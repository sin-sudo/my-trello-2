import Vue from 'vue'
import App from './App.vue'
// ここでcssファイルの読み込みが必要になる
import './assets/css/styles.css' // ★追記

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
