<template>
  <div class="Rectangle-6 ">
    <a class="active">CATEGORY</a>
    <a class="active">LAST ADDED</a>
    <a class="passive">MOST LİKED</a>
    <a class="passive">MOST DOWNLOADED</a>

    <hr>

    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>
    <button class="button-1">ADVENTURE</button><br>

    <div class="image-group">
      <img
        src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHB1cnBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        class="image-1">
      <img
        src="https://images.unsplash.com/photo-1493839523149-2864fca44919?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
        class="image-1">
      <img
        src="https://images.unsplash.com/photo-1517504734587-2890819debab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&q=80"
        class="image-1">

      <img
        src="https://www.treehugger.com/thmb/WpOXX3iRveUDwmiz-7r2XG_o4QA=/701x701/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__12__PurpleSkyPalmTrees1000px-c4950ffafcf942e2961bcd0b7bd1853b.jpg"
        class="image-2">
      <img
        src="https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="image-2">
      <img
        src="https://images.unsplash.com/photo-1456743625079-86a97ff8bc86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        class="image-2">

      <v-text-field outlined label="SEARCH" class="search-button" append-icon="mdi-magnify" style="margin-bottom:30px"></v-text-field>

      <img
        src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHB1cnBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        class="image-1">
      <img
        src="https://images.unsplash.com/photo-1493839523149-2864fca44919?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
        class="image-1">
      <img
        src="https://images.unsplash.com/photo-1517504734587-2890819debab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&q=80"
        class="image-1">

      <img
        src="https://www.treehugger.com/thmb/WpOXX3iRveUDwmiz-7r2XG_o4QA=/701x701/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__12__PurpleSkyPalmTrees1000px-c4950ffafcf942e2961bcd0b7bd1853b.jpg"
        class="image-2">
      <img
        src="https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="image-2">
      <img
        src="https://images.unsplash.com/photo-1456743625079-86a97ff8bc86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        class="image-2">
    </div>
  </div>

</template>

<style>
  .Rectangle-6 {
    width: 1300px;
    height: 1550px;
    margin: 0px 33px 35px;
    padding: 54px 27px 56.5px 50.5px;
    box-shadow: 0 5px 10px 0 #5d187b;
    background-color: #ffffff;
  }

  .active {
    width: 146px;
    height: 28px;
    margin: 5px 120px 10px 2.5px;
    font-family: LucidaBright-Demi;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: normal;
    text-align: left;
    color: #5d187b;
  }

  .passive {
    width: 146px;
    height: 28px;
    margin: 5px 120px 10px 2.5px;
    opacity: 0.5;
    font-family: LucidaBright-Demi;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: normal;
    text-align: left;
    color: #5d187b;
  }

  hr {
    margin-bottom: 50px;
    width: 1200px;
    box-shadow: 0 3px 6px 0 #5d187b;
    border: solid 1px #5d187b;
  }

  .button-1 {
    width: 200px;
    height: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 #5d187b;
    background-color: #ffffff;
    font-family: LucidaBright-Demi;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: #1976d2;
  }

  .image-1 {
    width: 250px;
    height: 350px;
    box-shadow: 0 5px 10px 0 #5d187b;
    margin-left: 30px;
    margin-bottom: 30px;
  }

  .image-2 {
    width: 250px;
    height: 200px;
    box-shadow: 0 5px 10px 0 #5d187b;
    margin-left: 30px;
    margin-bottom: 30px;
  }

  .image-group {
    height: 1000px;
    width: 1000px;
    margin-left: 250px;
    margin-top: -1400px;
  }

  .search-button {
    margin-left: 30px;
    width: 810px;
  }
</style>

<script>
  export default {
    name: 'HelloWorld',


    data: () => ({
      ecosystem: [{
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [{
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [{
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>