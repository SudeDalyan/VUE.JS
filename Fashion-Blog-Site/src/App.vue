<template>
  <div>
    <!--Navbar-->
    <mdb-navbar :color="'primary'" position="top" dark href="#" transparent scrolling>
      <mdb-container >
            <mdb-navbar-brand href="#home-page">
      <img src=".\assets\2021.svg" height="50" alt="logo">
    </mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav>
            <mdb-nav-item href="#home-page" waves-fixed active>Home</mdb-nav-item>
            <mdb-nav-item href="#features" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#product" waves-fixed>Products</mdb-nav-item>
            <mdb-nav-item href="#team" waves-fixed>Team</mdb-nav-item>
            <mdb-nav-item href="#contact" wawes-fixed>Contact</mdb-nav-item> 
          </mdb-navbar-nav>
          <!--Search form -->
          <mdb-navbar-nav right>
          <form>
            <mdb-input type="text" class="text-white f-flex" placeholder="Search" aria-label="Search" navInput waves waves-fixed/>
          </form>
          </mdb-navbar-nav>

          <!--/.Search form -->
          <!--/.homepage-->
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
    <mdb-view id="home-page">
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
              <h1 class="h1-responsive font-weight-bold mt-sm-5">Welcome to My World ! </h1>
              <hr class="hr-light"/>
              <h6 class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
              dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
              iste.</h6>
             <!-- <mdb-btn color="white" href="#product">Discover</mdb-btn>
              <mdb-btn outline="white">Contact</mdb-btn> -->
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5">
              <img src=".\assets\image.svg" class="img-fluid"/>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view><br><br><br>


    <!--/.features-->
  <mdb-container  id="features">
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Features</h2>
      <p class="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <mdb-row>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <mdb-icon icon="bullhorn" size="2x" class="blue-text"/>
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold">Creative</h4>
              <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <mdb-btn color="primary color" size="sm">Discover</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <mdb-icon icon="cogs" size="2x" class="pink-text"/>
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold">İnnovator</h4>
              <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <mdb-btn color="primary color" size="sm">Discover</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <mdb-icon icon="tachometer-alt" size="2x" class="purple-text"/>
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold">Nature Friendly</h4>
              <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <mdb-btn color="primary color" size="sm">Discover</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container><br><br><br>


<!--/.products-->
   <mdb-container id="product">
    <section id="team-section" class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5" >Products</h2>
      <p class="grey-text w-responsive mb-5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col md="4" class="mb-md-0 mb-5">
          <img tag="img" src="https://www.beyyoglu.com/Uploads/UrunResimleri/nude-parcali-mini-etek-acfd.jpg" class="rounded z-depth-1-half img-fluid" alt="Sample avatar" style="width:175px"/>
          <h4 class="font-weight-bold dark-grey-text my-4">NEW SKIRT</h4>
          <!-- <h6 class="text-uppercase grey-text mb-3">100% WOOL</h6> -->
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon icon="plus" color="white"/>
          </mdb-btn>
        </mdb-col>
        <mdb-col md="4" class="mb-md-0 mb-5">
          <img tag="img" src="https://sky-static.mavi.com/sys-master/maviTrImages/h51/h61/9356056330270" class="rounded z-depth-1-half img-fluid" alt="Sample avatar" style="width:185px"/>
          <h4 class="font-weight-bold dark-grey-text my-4">NEW JACKET</h4>
          <!-- <h6 class="text-uppercase grey-text mb-3">100% WOOL</h6> -->
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0 " color="primary color">
            <mdb-icon icon="plus" color="white"/>
          </mdb-btn>
        </mdb-col>
        <mdb-col md="4" class="mb-md-0 mb-5">
          <img tag="img" src="https://ktnimg.mncdn.com/mnresize/1500/1969/product-images/9YAK67201ODFA5/1500Wx1969H/9YAK67201ODFA5_G03_zoom3_V02.jpg" class="rounded z-depth-1-half img-fluid" alt="Sample avatar" style="width:200px"/>
          <h4 class="font-weight-bold dark-grey-text my-4">NEW JEAN</h4>
          <!-- <h6 class="text-uppercase grey-text mb-3">100% WOOL</h6> -->
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon icon="plus" color="white"/>
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container><br><br><br>
<!--/.teams-->

   <mdb-container id="team">
    <section id="team-section" class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5">Our Amazing Team</h2>
      <p class="grey-text w-responsive mb-5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col md="4" class="mb-md-0 mb-5">
          <img tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded z-depth-1-half img-fluid" alt="Sample avatar" style="width:200px"/>
          <h4 class="font-weight-bold dark-grey-text my-4">Maria Kate</h4>
          <h6 class="text-uppercase grey-text mb-3">Chief Designer</h6>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon fab icon="linkedin"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0 " color="primary color">
            <mdb-icon fab icon="dribbble"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon fab icon="pinterest"/>
          </mdb-btn>
        </mdb-col>

        <mdb-col md="4" class="mb-md-0 mb-5">
          <img tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" class="rounded z-depth-1-half img-fluid" alt="Sample avatar" style="width:200px"/>
          <h4 class="font-weight-bold dark-grey-text my-4">Sarah Melyah</h4>
          <h6 class="text-uppercase grey-text mb-3">Assistant Designer</h6>
            <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon fab icon="linkedin"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0 " color="primary color">
            <mdb-icon fab icon="dribbble"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon fab icon="pinterest"/>
          </mdb-btn>
        </mdb-col>

                <mdb-col md="4" class="mb-md-0 mb-5">
          <img tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" class="rounded z-depth-1-half img-fluid" alt="Sample avatar" style="width:200px"/>
          <h4 class="font-weight-bold dark-grey-text my-4">John Doe</h4>
          <h6 class="text-uppercase grey-text mb-3">Photographer</h6>
           <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon fab icon="linkedin"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0 " color="primary color">
            <mdb-icon fab icon="dribbble"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="mx-1 mb-0" color="primary color">
            <mdb-icon fab icon="pinterest"/>
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container><br><br><br>
  
<!--/.contact-->

<HelloWorld />
<Footer/>

  </div> 
</template>


<style lang="scss">
$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  .navbar {
    transition: 1s;
  }
  .navbar .md-form {
    margin: 0;
  }
  .top-nav-collapse {
    background-color: #764d9d   !important;
  }
  @media (max-width: 990px){
    .navbar {
      background-color:#764d9d  !important;
    }
  }
  .view {
    background-image: url('./assets/background (1).jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(110vh - 60px);
  }
  .gradient {
    background-color: rgba(0, 0, 0, 0.2)    
  }
  h6 {
      line-height: 1.7;
  }
  .navbar.navbar-dark .breadcrumb .nav-item .nav-link, .navbar.navbar-dark .navbar-nav .nav-item .nav-link{
    margin-left:50px;
  }
  .mr-auto, .mx-auto{
    margin-top: 15px;
  }
</style>

<script>
  import HelloWorld from "./components/HelloWorld.vue"
  import Footer from "./components/footer.vue"
  import { mdbContainer,  mdbRow, mdbCol, mdbNavbar,mdbIcon, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
      mdbIcon,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbView,
      mdbMask,
      mdbBtn,
      mdbNavbarBrand,
      HelloWorld,
      Footer
    }
  }
</script>
