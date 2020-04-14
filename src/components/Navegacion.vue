<template>
  <div class="">
    <template>
      <v-card color="#2a3f54">
      
        <v-navigation-drawer 
        :mini-variant="!$store.state.isbarra"
        >
            
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar class="avatar_aro">
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
                <v-list-item-title> Welcome Kristian!</v-list-item-title>
            </v-list-item>

          </v-list>

          <v-divider></v-divider>

                  <v-list-item class="px-7">
                <v-list-item-title > General</v-list-item-title>
            </v-list-item>

          <v-list
            nav
            dense
          >


    
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        style="color:#FFFFFF;"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="textos_nav" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

       <v-divider></v-divider>

                  <v-list-item class="px-7">
                <v-list-item-title> Live On</v-list-item-title>
            </v-list-item>

                      <v-list
            nav
            dense
          >


    
      <v-list-group
        v-for="item in itemss"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
        </v-navigation-drawer>
      </v-card>
    </template>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          variable:true,
           itemss: [
          {
            action: 'home',
            title: 'Additional Page',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'description',
            title: 'Extras',
            active: false,
          },
          {
            action: 'laptop',
            title: 'Multilevel Menu',
            items: [
              { title: 'List Item' },
            ],
          },
        ],
      
        items: [
          {
            action: 'home',
            title: 'Home',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'description',
            title: 'Forms',
            active: false,
            items: [
              { title: 'item 1' },
              { title: 'item 2' },
            ],
          },
          {
            action: 'laptop',
            title: 'UI elements',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'timeline',
            title: 'Tables',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'assessment',
            title: 'Data Presentation',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'collections',
            title: 'Layouts',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            active: false,
            items: [
              { title: 'List Item' },
            ],
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
 @import '../sass/globals';
.v-list--dense .v-list-item .v-list-item__icon, .v-list-item--dense .v-list-item__icon {
    color: #FFFFFF;
}
i.v-icon.v-icon{
    color: #FFFFFF;
    background: #FFFFFF;

}
.v-icon.notranslate.material-icons.theme--light{
    color: #FFFFFF;
    background: #FFFFFF;
}
.avatar_aro{
    border: 2px solid #FFFFFF;
cursor: pointer;
}


</style>