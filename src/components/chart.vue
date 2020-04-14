<template>
<div>
   <v-layout wrap :elevation="8" justify-center align-center text-xs-center class="contenedor_estadisticas" >
      <v-flex :elevation="9" justify-begin class="" xs12 md12 sm12 >
  
      </v-flex>
   </v-layout>

      <v-layout wrap pa-5 :elevation="8" justify-center align-center text-xs-center class="contenedor_charts" >
      <v-flex :elevation="9" justify-begin class="" xs12 md12 sm12 >
    <v-card
    class="auto "
    :elevation="3"
    max-width="100%"
    outlined
    height="150"
  >
  <v-card-text> uso Vue-chart para generar graficos y estadisticas</v-card-text>
  </v-card>
      </v-flex>
   </v-layout>


     <v-layout wrap pa-5 mt-1 :elevation="8" justify-center align-center text-xs-center class="contenedor_estadisticas" >
      <v-flex  v-for="(element, index) in 3" pa-4 :key="index" :elevation="9" justify-begin class="" xs4 md4 sm4 >
                <v-card
                class="auto pa-2"
                :elevation="3"
                max-width="100%"
                outlined
                height="250"
                 >
            </v-card>
      </v-flex>
   </v-layout>

 

</div>
</template>
    
<script>
  //Importing Line class from the vue-chartjs wrapper
  import Line from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>
<style lang="scss" scoped>
 @import '@/sass/globals';


.contenedor_estadisticas{
    width: 100%;
    height: 90px;
    background: #F8f8f8;
}

.contenedor_charts{
    width: 100%;
    height: 150px;
    background: #F8f8f8;
}
</style>