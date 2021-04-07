<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-text-field
        outlined
        label="SEARCH"
        class="search-button"
        append-icon="mdi-magnify"             
      ></v-text-field>  

      <img
        alt="Logo"
        class="logo"
        src="./assets/logo.png"
      />

      <button class="add-button"> <a style="color: #5d187b;">ADD</a>

      <v-icon
        right
        color="#5d187b"
      >
        mdi-plus
      </v-icon>
    </button>    
      <v-spacer></v-spacer>
    </v-app-bar>

    <img src="https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" class="head-image">

    <v-main>
      <HelloWorld/>
    </v-main>
     <p class="design">Design By SUDE DALYAN</p>
  </v-app>
</template>

<style>
.design{
  width: 244px;
  height: 23px;
  margin: 0px 561px 0px;
  font-family: LucidaBright;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #5d187b;
}
.logo{
  width: 150px;
  margin: 0 400px 0 200px;
  object-fit: contain;
}

.v-text-field--outlined > .v-input__control > .v-input__slot{
  margin-top: 30px;
  margin-left: 25px;
  box-shadow: 0 5px 10px 0 #5d187b;
}

.v-toolbar__content, .v-toolbar__extension{
  box-shadow: 0 5px 10px 0 #5d187b;
}
.v-toolbar__content{
height: 150px;
}

.v-btn:not(.v-btn--round).v-size--default{
  box-shadow: 0 5px 10px 0 #5d187b;
}
.add-button{
  width: 350px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #5d187b;
  border: solid 1px #5d187b;
  font-family: LucidaBright-Demi;
  font-size: 20px;
}

.head-image {
  width: 1400px;
  height: 700px;
}

</style>

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
