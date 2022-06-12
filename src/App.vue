<template lang="html">
  <div id="app">
    <h2 v-if="footer">{{footer}}</h2>
    <h2>{{error}}</h2>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>

</template>
<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    import axios from 'axios'
    export default {
      data(){
        return{
           footer:'',
           error:''
         }
      },
        components: {
            FooterGuide
        },
      mounted(){
        devServer:{

        }
        // http.get(url).then((result) =>{
        //       const response = result.data
        //       this.sus = response
        //     }).catch((err) => {
        //       this.error = '请求失败'
        //     })
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    /* #app */
    /* width 100%
      height 100%
      background #f5f5f5 */
</style>
