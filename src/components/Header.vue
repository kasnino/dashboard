<template>
   <v-layout wrap justify-center align-center text-xs-center class="position_top main_page" >
       
      <v-flex justify-begin class="main_page" xs12 md12 sm12 >
    <v-toolbar
    class="color_header"
      height="72"
      :elevation="2"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                        <v-toolbar-title> 
                                <router-link to="/">
                                    <!-- <img height="50px" class="img_record logo" src="../../../assets/icono/logo.svg">
                                    <img> -->
                                    <!-- <h1 :elevation="5" class="titulo_logo">SK</h1> -->
                                   <dir class="menu_bar" @click="mostrarmenu" > <v-icon>mdimenu</v-icon> </dir>

                                
                                </router-link>
                           
                            <!-- <v-flex color="teal"> Relatos Morados </v-flex> -->
                            </v-toolbar-title>
                             
                        <v-flex class="" md3 xs3 mr-10>
                          
                        <v-layout column  mr-10>
                   <v-flex d-flex>
                                <v-flex mb-5 d-flex class="alinear_carro">
                                  <template v-slot:append>
                                  <v-btn style="text-transform: none;" :elevation="0" class="mt-8 btn_header" outlined @click="signoutButtonPressed" color="red darken-4 white--text" block>Logout</v-btn>
                                 <!-- <v-btn style="text-transform: none;" :elevation="0" class="mt-8 btn_header" outlined  >
                                   <br><div class=" text-right justify-center texto_boton ">Registrate</div>
                                 </v-btn>  -->
                                 </template>    
                               </v-flex> 

                           <v-navigation-drawer id="navapp" v-model="drawer" absolute left temporary dark color="#461A4A" >
                    <v-list nav dense>
                        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <v-list-item v-for="i in 6" :key="'itemmenu'+i">
                            <router-link class="slinkb" :to="item.routeb[i]">
                            <!-- <v-list-item-icon><v-icon>{{item.icon[i-1]}}</v-icon></v-list-item-icon> -->
                            <v-list-item-title>{{item.nameb[i-1]}}</v-list-item-title>
                            </router-link>
                        </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    </v-navigation-drawer>
           <div class="avatar_aro">
                <v-img class="imagen_l" style="border-radius=50%;" src="https://randomuser.me/api/portraits/women/85.jpg">
                </v-img>
                
        </div>
<div class="message">
    <v-badge
        :content="7"
        :value="messages"
        color="green"
        overlap
        class="message"
      >
        <v-icon large>mdi-email</v-icon>
      </v-badge>

</div>

        <v-flex mt-9 d-flex class="alinear_dark">
                <div class="flex items-center ml-4 toggleWrapper">
                            <input type="checkbox" class="absolute" id="darkmode-toggle" />
                            <label  @click="cambiocolor" for="darkmode-toggle" class="toggle">
                                <span class="toggle__handler">
                                <span class="crater crater--1"></span>
                                <span class="crater crater--2"></span>
                                <span class="crater crater--3"></span>
                                </span>
                                <span class="star star--1"></span>
                                <span class="star star--2"></span>
                                <span class="star star--3"></span>
                                <span class="star star--4"></span>
                                <span class="star star--5"></span>
                                <span class="star star--6"></span>
                    </label>
                    </div>
      </v-flex>   
                    </v-flex>
        </v-layout>
      </v-flex>
    </v-toolbar>
    <!-- <ModalSeleccion-app v-model="modalactivar" :mostrarCerrar="true" ></ModalSeleccion-app> -->
      </v-flex>
   </v-layout>
</template>
    
<script>
    // import resourcesLoader from "../js/mixins/resources-loader";
    export default { 
        // mixins: [resourcesLoader],
        props:{
             source: String,
            simple:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                  modalactivar: false,
                     changescolor:false,
                  scol:0,
                  collapseOnScroll: true,
                  titulo: '',
                  modalA:false,
                   drawer: false,
                        itemsss: [
                          'Programming',
                          'Design',
                          'Vue',
                          'Vuetify',
                    ],
                    select: ['Vuetify', 'Programming'],
                 item:{
                name:['Preguntas frecuentes','MIPYMES','Alimentos y bebidas','Decoración','Prendas y accesorios','Viajes Topaz'],
                icon:['dashboard','mdi-face', 'recent_actors','email','question_answer'],
                route:['/','/mipymes' ,'/apli','/','/'],
                nameb:['Home','About us','E-Learning','Apps','Virtual Classroom','Contact'],
                routeb:['/','/about','/elearning' ,'/apli','/','/'],

        },
                modalB:false,
                currentItem: 'tab-Web',
                  selectcolor:['#92BF1F','#2A7DE1','#FFCD00','#832069','#F08B15'],
                items: [
                  'Web', 'Shopping', 'Videos', 'Images',
                ],
                more: [
                  'News', 'Maps', 'Books', 'Flights', 'Apps',
                ],
                text: 'Lorem iasdfsdgagsdfgsdgdfg',
               
                // logo: '',
           
            }
        },
        methods: {
            mostrarmenu(){
                if(!this.$store.state.isbarra)
                { return this.$store.state.isbarra = true}
                else{
                   return this.$store.state.isbarra = false
                }
               

            },
           signoutButtonPressed() {
            this.$store.dispatch('clearState');
            this.$router.push({ name: "Login" });
        },
            cambiocolor(){
      console.log("clik en el label")
            
            const thema = document.getElementById("thema");
            if(!this.changescolor){
                thema.classList.remove("themalight")
                thema.classList.add("themadark")
                 this.changescolor = true
            }else{
                thema.classList.add("themalight")
                thema.classList.remove("themadark")
                      this.changescolor = false
            }
    },
            iniciosesion(){
              if(!this.modalactivar){
                  return this.modalactivar = true
              }else{
                return this.modalactivar = false
              }
             
            },
            getData(data) {
                return data
            },
                addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1)
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
        },
        created() {
            var self = this
        },
        computed: {
            
        },
             watch: {
            group () {
                return this.drawer = false
            },
        }

    }
</script>
<style lang="scss" scoped>
 @import '@/sass/globals';

.message{

width: 40px;
height: 40px;
cursor: pointer;
position: absolute;
right: 80px;
top: 10px;
}
.imagen_l{
    border-radius: 50%;
    width: 48px;
    height: 48px;
}
.texto_align{
    position: absolute;
    right: 100px;
    top: 10px;
    width: 135px;
}
   
    .avatar_aro{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    right: 80px;
    top: 10px;
cursor: pointer;
}
.color_avatar{
    width: 250px;
    height: 100%;
    background: #f8f8f8;
    position: absolute;
    right: 30px;
    top: -0px;
}

.theme--light.v-toolbar.v-sheet {
  background: var(--fondo_header);
}

.main_page{
  background: #f8f8f8;
  width: 100%;
  
}


.color_header{
  background: #749ed7;
  width: 100%;
  height: 100%;
}
.position_top{

width: 100%;
top: 0;

}
.alinear{
  margin-left: -30px;
}

.alinear_inicio{
  position: absolute;
  right: 95px;
  top: -10px;
}
.alinear_carro{
  position: absolute;
  right: 250px;
  top: -10px;
}

.alinear_dark{
  position: absolute;
  right: 25px;
  top: -10px;
}
.notification{
 position: absolute;
 top: 5px;
}
.hola {
  width: 100px;
  height: 90px;
  background: #FFFFFF;
  padding: 0;

}

.menu_bar{
    position: absolute;
    left: -45px;
    top: 18px;
}
.margin{
  width: 80%;
}
.boton{
    width: 180px;
    height: 20px;
    
}
.carro{
  width: 45px;
height: 41px;
}
.v-application a {
    color:#8F2146;
     font-family: Poppins-Regular;
    font-size: 22px;
}
.item-tap{
     background: #FFEBF2;
     color:#8F2146;
       font-family: Poppins-Regular;
}
p{
    cursor: pointer;
}
.icono {
    cursor: pointer;
}

#tabs1{
    color: #891E42;
    font-family: Poppins-Regular;

}

.text_tra{
  text-transform: none;
}

a:link
{
text-decoration:none;
}
.descriccion{
    text-align: center;
    width: 100%;
    height: 100%;

    p{
          font-family: Poppins-Regular;
        font-size: 50px;
        color: #FFFFFF;
        opacity: 1;
        cursor: pointer;
    }

    span {
           font-family: Poppins-Regular;
          font-size: 23px;
          color: #FFFFFF;
          text-align: center;
            opacity: 1;
            margin-left: 3%;
            position: absolute;
            margin-top: 5px;
            cursor: pointer;
            
    }
    

    
}
div.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active{
    border-radius: 33px;
    /* height: 35px; */
    width: 71px;
    margin-top: -59px;
    margin-left: -2px;
    height: 300px;
}
.menu__accesibility{
    background: #084476;
}
.logo{
    cursor: pointer;
    z-index: 1000;
    width: 60%;
}



.lista_menu{
    background: #EBF5FF;
    border-radius: 34px;
    height: 300px;
}
.header-pos{
   
    width: 100%;
    z-index: 3;
    color: #FFF;
    height: 100px;
    position: fixed;
    display: block;
   
}
// header {
//     background-color: #8F2146;
//     //  background: url("../assets/Fondos/Header_op.svg")no-repeat;
//      background-size: cover;
//     padding: 0px;
//     position: absolute;
//     z-index: 1;
//     min-height: 90px;
//     p {
//         margin: 0;
//         padding: 0;
//     }
// }
.cont-titulo-curso{
    p{
        font-size: 10px;
        font-family: Muli;
        color: #084476;
    }
}
.cont-libro{
   cursor: pointer;
    min-height: 53px;
    width: 250px;
    display: flex;
    justify-content: end;
    margin-left: 0;
    background-size: cover;
    text-align: center;
    padding-top: 2px;
    margin-right: 51px;
    p{
        text-align: center;
        margin: 0 auto;
        font-size: 13px;
        font-family: Muli;
    }
}
.cont-pantalla{
     font-family: Muli;
    color: #666666;
    font-size: 10px;
    margin-top: -15px;
    padding-right: 30px;
    @media screen and (max-width: 900px) {
        padding-right: 50px;
    }
}


    /**
 * Toggle Dark Mode
 */


.toggleWrapperr {
  // left: -99em;
  position: absolute;
  right: 35px;
 
  
}

.toggleWrapper .toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 45px;
  height: 23px;
  background-color: #83d8ff;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggleWrapper .toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 0px;
  left: 3px;
  width: 19px;
  height: 19px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-22.5deg);
}

.toggleWrapper .toggle__handler .crater {
  position: absolute;
  background-color: #e8cda5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
}

.toggleWrapper .toggle__handler .crater--1 {
  top: 9px;
  left: 5px;
  width: 2px;
  height: 2px;
}

.toggleWrapper .toggle__handler .crater--2 {
  top: 14px;
  left: 11px;
  width: 3px;
  height: 3px;
}

.toggleWrapper .toggle__handler .crater--3 {
  top: 5px;
  left: 12.5px;
  width: 4px;
  height: 4px;
}

.toggleWrapper .star {
  position: absolute;
  background-color: #fff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.toggleWrapper .star--1 {
  top: 5px;
  left: 17.5px;
  z-index: 0;
  width: 15px;
  height: 1.5px;
}

.toggleWrapper .star--2 {
  top: 9px;
  left: 14px;
  z-index: 1;
  width: 15px;
  height: 1.5px;
}

.toggleWrapper .star--3 {
  top: 13.5px;
  left: 20px;
  z-index: 0;
  width: 15px;
  height: 1.5px;
}

.toggleWrapper .star--4,
.toggleWrapper .star--5,
.toggleWrapper .star--6 {
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggleWrapper .star--4 {
  top: 8px;
  left: 5.5px;
  z-index: 0;
  width: 1px;
  height: 1px;
  transform: translate3d(1.5px, 0, 0);
}

.toggleWrapper .star--5 {
  top: 16px;
  left: 8.5px;
  z-index: 0;
  width: 1.5px;
  height: 1.5px;
  transform: translate3d(1.5px, 0, 0);
}

.toggleWrapper .star--6 {
  top: 18px;
  left: 14px;
  z-index: 0;
  width: 1px;
  height: 1px;
  transform: translate3d(1.5px, 0, 0);
}

.toggleWrapper input:checked + .toggle {
  background-color: #749dd6;
}

.toggleWrapper input:checked + .toggle::before {
  color: #749ed7;
}

.toggleWrapper input:checked + .toggle::after {
  color: #fff;
}

.toggleWrapper input:checked + .toggle .toggle__handler {
  background-color: #ffe5b5;
  transform: translate3d(20px, -1px, 0) rotate(0);
}

.toggleWrapper input:checked + .toggle .toggle__handler .crater {
  opacity: 1;
}

.toggleWrapper input:checked + .toggle .star--1 {
  width: 1px;
  height: 1px;
}

.toggleWrapper input:checked + .toggle .star--2 {
  width: 2px;
  height: 2px;
  transform: translate3d(-2.5px, 0, 0);
}

.toggleWrapper input:checked + .toggle .star--3 {
  width: 1px;
  height: 1px;
  transform: translate3d(-3.5px, 0, 0);
}

.toggleWrapper input:checked + .toggle .star--4,
.toggleWrapper input:checked + .toggle .star--5,
.toggleWrapper input:checked + .toggle .star--6 {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.toggleWrapper input:checked + .toggle .star--4 {
  transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggleWrapper input:checked + .toggle .star--5 {
  transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggleWrapper input:checked + .toggle .star--6 {
  transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

input.absolute{
  display: none;
}
/*
 * Utilities
 */

</style>