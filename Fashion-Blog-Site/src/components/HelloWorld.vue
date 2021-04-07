<template>
  <mdb-container id="contact">
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
      <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col lg="5" class="lg-0 mb-4">
          <mdb-card>
            <mdb-card-body>
           
                <h3 class="mt-2"><mdb-icon icon="envelope"/> Write to us:</h3>
              
              <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
              <div class="md-form">
                <mdb-input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
              </div>
              <div class="md-form">
                <mdb-input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
              </div>
              <div class="md-form">
                <mdb-input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
              </div>
              <div class="text-center">
                <mdb-btn color="primary color">Submit</mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="7">
          <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style="border: 0"></iframe>
          </div>
          <br/>
          <mdb-row class="text-center">
            <mdb-col md="4">
              <mdb-btn tag="a" color="primary color" class="accent-1">
                <mdb-icon icon="map-marker"/>
              </mdb-btn>
              <p>New York, 94126</p>
              <p class="mb-md-0">United States</p>
            </mdb-col>
            <mdb-col md="4">
              <mdb-btn tag="a" color="primary color" class="accent-1">
                <mdb-icon icon="phone"/>
              </mdb-btn>
              <p>+ 01 234 567 89</p>
              <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </mdb-col>
            <mdb-col md="4">
              <mdb-btn tag="a"  color="primary color">
                <mdb-icon icon="envelope"/>
              </mdb-btn>
              <p>info@gmail.com</p>
              <p class="mb-md-0">sale@gmail.com</p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbCard, mdbCardBody } from 'mdbvue';
  export default {
    name: 'ContactPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbIcon,
      mdbInput,
      mdbCard,
      mdbCardBody
    }
  }
</script>

