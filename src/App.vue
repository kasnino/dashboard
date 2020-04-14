<template>
<main id="thema" class="themalight">
<div id="app">
    <v-app>
        <v-container class="container" fluid ma-0 pa-0>
             <v-layout   >
                
                      <navegacion-app></navegacion-app>
                
                <v-flex  xs12 sm12 md12  class=""> 
                      <header-app></header-app>
                      <chart-app></chart-app>
                </v-flex>     
             </v-layout>
            <router-view/>
            <!-- <landing-app></landing-app> -->
        </v-container>
    </v-app>
  </div>
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
 
    background: #F8f8f8;
  width: 100%;
  height: 100%;
}
p {
  font-size: 2em;
  text-align: center;
}
</style>
