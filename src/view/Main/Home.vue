<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Read kuY</a>
      <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to="/login" class="login">Login</router-link>
          <router-link to="/register" class="register">Register</router-link>
          <!-- <button href="login.html"><button class="login">Login</button></a>
          <a href="register.html"><button class="register">Register</button></a> -->
        </div>
      </div>
    </div>
    <img src="../../assets/img/book.png" class="img">
    <img src="../../assets/img/Library.png" class="library">
    <img src="../../assets/img/5.jpg" class="icon">
  </nav>
  <!-- end navbar -->
  <!-- jumbotron -->
  <div class="jumbo">
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1><span>Book</span> is a window<br>to the <span>world</span></h1>
    </div>
  </div>
  </div>
  <!-- end jumbotron -->

  <div class="container1">
    <div class="panel">
      <div class="panel1">
        <img src="../../assets/img/ra.jpg" class="author1">
        <h4>Raditya dika</h4>
      </div>
      <div class="panel2">
        <img src="../../assets/img/andrea.jpeg" class="author2">
        <h4>Andrea Hirata</h4>
      </div>
      <div class="panel3">
        <img src="../../assets/img/pidi.jpeg" class="author3">
        <h4>Pidi baiq</h4>
      </div>
      <div class="panel4">
        <img src="../../assets/img/mark2.jpg" class="author4">
        <h4>Mark manson</h4>
      </div>
    </div>
    <div class="atas">
      <div class="atas1">
        <img src="../../assets/img/book1.jpg" class="atas1-1">
      </div>
      <div class="atas2">
        <p class="ket"><br>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quod, eum deleniti, voluptate ipsum tempore aliquid odit itaque cumque ad nihil
          minus aliquam. Recusandae iusto sequi blanditiis necessitatibus explicabo earum neque.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta officiis repudiandae
          vel odit labore, cum, natus reiciendis impedit quas obcaecati quaerat veniam dolorum
          praesentium quos eaque nesciunt, quod earum quibusdam?
          Lorem ipsum dolor sit amet consectetur,adipisicing elit. Tempora eos ipsamdolorum
          optio quia cumque praesentiumpariatur placeat. Expedita undesuscipit commodi
          deserunt a voluptatumiure culpa voluptate ea nam.
        </p>
        <p class="ket2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A deserunt aperiam, cumque obcaecati expedita quod commodi nihil fuga ipsam,
          excepturi nesciunt dolorum debitis, in accusantium vero? Rerum qui consectetur
          culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eos neque?
          Illum vero soluta incidunt, recusandae quasi alias explicabo, fugiat molestiae
          reprehenderit, mollitia maxime optio eveniet itaque est. Magnam, repellat!
        </p>
      </div>
    </div>
    <div class="tengah">
      <div class="tengah1">
        <p class="ket-tengah1"><br><br><br><br>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum itaque accusantium ipsum quibusdam id quidem eius
          quas deleniti voluptates dolorem, nemo, ipsa aut aliquam non dolor. Veritatis
          dicta error animi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum tempora quod veniam, harum neque alias consectetur repellendus numquam
          temporibus ut eligendi explicabo nostrum aliquam itaque earum ratione soluta
          officia vitae.<br><br> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Similique excepturi laboriosam quod reprehenderit vitae adipisci numquam maxime
          nostrum atque distinctio, itaque provident illum iure, fugit explicabo, aspernatur
          est rem aperiam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          placeat laudantium, cumque id quibusdam, illum deserunt atque sequi voluptatem
          minima maiores mollitia debitis amet, nemo esse officiis sed tempora eligendi.
        </p>
      </div>

      <div class="tengah2">
        <!-- carousel -->
        <div id="carouselExampleControls" class="carousel slide trans" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../assets/img/Cover-Buku.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../assets/img/3081642.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls"
          role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls"
          role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <!-- end carousel -->
      <div class="bawah">
        <img src="../../assets/img/whatsapp.png" class="gbr1">
        <img src="../../assets/img/instagram.png" class="gbr2">
        <img src="../../assets/img/github-logo.png" class="gbr3">
        <p class="all">Copyright © 2020 Design by Yusuf. All rights reserved.</p>
        <p class="me">Contact me</p>
      </div>
  </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import Navbar from '../../components/_module/Navbar.vue';
// import Header from '../../components/_module/Header.vue';
// import Sidebar from '../../components/_module/Sidebar.vue';
// import AddBook from '../../components/_module/AddBook.vue';
// import ContainerBook from '../../components/_module/ContainerBook.vue';

export default {
  name: 'App',
  components: {
    // Navbar,
    // Header,
    // Sidebar,
    // AddBook,
    // ContainerBook,
  },
};
</script>

<style scoped>
@font-face{
  font-family: airbnbmedium;
  src: url('../../assets/fonts/AirbnbCerealMedium.ttf');
}

@font-face{
  font-family: airbnb;
  src: url('../../assets/fonts/AirbnbCerealBold.ttf');
}

.navbar-brand, .nav-link{
  /* color: white !important; */
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
.navbar-brand{
  font-size: 30px;
  font-family: airbnb;
  color: #FBCC38 !important;

}

.nav-link{
  font-size: 17px;
  font-family: airbnbmedium;
  color: black !important;
}

.jumbotron{
  background-image: url('../../assets/img/utama.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-top: -3px !important;
}

.jumbo:hover{
  background-color: rgba(148, 148, 148, 0.4);
}
h1{
  margin-top: 150px;
  text-align: right;
  font-weight: 500;
}

span{
  font-weight: 700;
}

.login{
  position: absolute;
  font-size: 17px;
  font-weight: 500;
  margin-top: -25px !important;
  margin-left: 910px !important;
  padding: 10px 23px;
  border-radius: 5px;
  color: white;
  background-color: #FBCC38;
  border: none;
  font-family: airbnbmedium;
  left: 40px;
  margin-top: 0px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.login:hover{
  background-color: salmon;
  transform: scale(0.9);
  transition: 0.5s;
}


.register:hover{
  background-color: salmon;
  transform: scale(0.9);
  transition: 0.5s !important;
}

.register{
  position: absolute;
  margin-top: -25px !important;
  margin-left: 1050px !important;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  background-color: #FBCC38;
  border: none;
  font-family: airbnbmedium;
  left: 0px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.img{
  width: 50px;
  height: 50px;
  position: absolute;
  margin-left: 1170px;
}

.library{
  position: absolute;
  right: 10px;
  margin-left: auto;
  margin-top: 5px;
}

.icon{
  width: 70px;
  height: 70px;
  position: absolute;
  margin-top: -5px;
  margin-left: 30px;
  border-radius: 15px;
}

.container1{
  width: 100vw;
  height: 100vh;
  max-width: 100%;

}

.panel{
  margin-top: -32px;
  width: auto;
  height: 500px;
  /* background-color: cadetblue; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.panel1{
  width: 250px;
  height: 250px;
}

.panel2{
  width: 250px;
  height: 250px;
}

.panel3{
  width: 250px;
  height: 250px;
}

.panel4{
  width: 250px;
  height: 250px;
}

h4{
  text-align: center;
  margin-left: -10px;
  margin-top: 5px;
  font-family: airbnbmedium;
}

.author1{
  width: 150px;
  height: 150px;
  margin-left: 43px !important;
  border-radius: 150px;
  transition: 0.8s;
}

.author2{
  width: 150px;
  height: 150px;
  margin-left: 47px;
  border-radius: 150px;
  transition: 0.8s;
}

.author3{
  width: 150px;
  height: 150px;
  margin-left: 40px;
  border-radius: 150px;
  transition: 0.8s;
}

.author4{
  width: 150px;
  height: 150px;
  margin-left: 40px;
  border-radius: 150px;
  transition: 0.8s;
}
.atas{
  width: 100%;
  height: 500px;
  display: flex;
}

.atas1{
  width: 50%;
  height: 500px;
}

.atas1-1{
  margin-left: 75px;
  height: 500px;
  width: 500px;
  transition: 0.5s;

}

.atas2{
  width: 50%;
  height: 500px;
  /* background-color: brown; */
}

.ket{
  font-family: airbnbmedium;
  text-align: left;
}

.ket2{
  font-family: airbnbmedium;
  text-align: justify;
}
.tengah{
  width: auto;
  height: 500px;
  display: flex !important;
  justify-content: space-around;
}

.tengah1{
  width: 50%;
  height: 500px;
  /* background-color:rebeccapurple; */
}

.ket-tengah1{
  text-align: center;
  font-family: airbnbmedium;
}
.tengah2{
  width: 50%;
  height: 500px;
  /* background-color: lightskyblue; */
}

.bawah{
  display: flex;
  justify-content: flex-end;
  width: auto;
  /* margin-top: 40px !important; */
  height: 50px;
  background-color: #FBCC38;
}

.gbr1{
  position: absolute;
  margin-top: 17px;
  /* margin-left: 1240px; */
  width: 20px;
  height: 20px;
}

.gbr2{
  position: absolute;
  margin-top: 17px;
  /* margin-left: 1270px; */
  width: 20px;
  height: 20px;
}

.gbr3{
  position: absolute;
  margin-top: 17px;
  /* margin-left: 1300px; */
  width: 20px;
  height: 20px;
}


.atas1-1:hover{
  transform: scale(1.1);
  transition: 0.4s;
}

.author1:hover{
  border-radius: 10px;
  transition: 0.2s;
}

.author2:hover{
  border-radius: 10px;
  transition: 0.2s;
}

.author3:hover{
  border-radius: 10px;
  transition: .2s;
}

.author4:hover{
  border-radius: 10px;
  transition: 0.2s;
}

.all{
  font-family: airbnb;
  font-size: 10px;
  margin-top: 20px;
}

.me{
  font-family: airbnb;
  font-size: 15px;
  margin-left: 880px;
  margin-top: 17px;
}
</style>
