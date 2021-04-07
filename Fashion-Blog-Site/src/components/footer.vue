<template>
  <!-- Footer -->
  <mdb-footer color="mdb-color" class="font-small pt-4 mt-4" id="footer" transparent scrolling>
    <mdb-container class="text-center text-md-left">
      <mdb-row class="my-4">
        <mdb-col md="4" lg="4">
          <img src="..\assets\2021.svg" height="70" alt="logo">
          <br><br><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
              voluptate esse quasi, veritatis totam voluptas nostrum. </p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="ml-auto">
          <h5 class="text-uppercase mb-4 font-weight-bold">About</h5>
          <ul class="list-unstyled">
            <p><a href="#home-page">Home</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#products">Products</a></p>
            <p><a href="#team">Team</a></p>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="5" lg="3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Address</h5>
          <p><mdb-icon icon="home" class="mr-3" /> New York, NY 10012, US</p>
          <p><mdb-icon icon="envelope" class="mr-3" /> info@example.com</p>
          <p><mdb-icon icon="phone" class="mr-3" /> + 01 234 567 88</p>
          <p><mdb-icon icon="print" class="mr-3" /> + 01 234 567 89</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="text-center">
          <h5 class="text-uppercase mb-4 font-weight-bold">About</h5>
          <div class="mt-2 ">
            <a type="button" class="btn-fb btn-lg"><mdb-icon fab icon="facebook" /></a><br>
            <a type="button" class="btn-tw btn-lg"><mdb-icon fab icon="twitter" /></a><br>
            <a type="button" class="btn-gplus btn-lg"><mdb-icon fab icon="google-plus" /></a><br>
            <a type="button" class="btn-dribbble btn-lg"><mdb-icon fab icon="dribbble" /></a>
          </div>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
          &copy; 2020 Copyright: <a href="#">SD Yazılım </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<style>
#footer{
    background-image: url('https://i.pinimg.com/564x/6e/c3/78/6ec37815819103119685ee8dde9c7f41.jpg');
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
  }
</script>