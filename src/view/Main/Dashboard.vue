<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="back-wrap" v-on:click="bringBack">
          <img src="../../assets/img/menu.png" width="30px" height="40px">
        </div>
        <div class="navbar-header">
          <div class="menu-option">
            <select class="select">
              <option value="">All Categories</option>
              <option value="">Action</option>
              <option value="">Romance</option>
              <option value="">Horror</option>
              <option value="">Drama</option>
            </select>
            <select class="select">
              <option value="">All times</option>
              <option value="">Latest</option>
              <option value="">Top rated</option>
              <option value="">2020</option>
              <option value="">2019</option>
            </select>
          </div>
        </div>
        <div class="btn-search">
          <input type="text" placeholder="search book..."
          class="action-search fa fa-search">
        </div>
        <div class="logo">
          <div class="content-logo">
            <img src="../../assets/img/book.png" width="50px" height="50px">
          </div>
          <h1>Library</h1>
        </div>
      </div>
    </nav>
    <div class="slide">
      <div class="burger">
        <div class="strip" v-on:click="sweap">
          <img src="../../assets/img/kiri-fix.png" width="40px" height="40px">
        </div>
      </div>
      <div class="profile">
        <div class="profile-img">
          <img :src="user.photo" class="this-img">
        </div>
        <div class="profile-name">
          <h2>{{user.fullname}}</h2>
        </div>
      </div>
      <div class="menu">
        <div class="option">
          <h3>Explore</h3>
          <h3>History</h3>
          <h3 @click="showModal()">Add Book*</h3>
          <h3 v-on:click="logout" class="main-h3">Log Out</h3>
        </div>
      </div>
    </div>
    <div class="rubypedia-parallax">
      <div class="switch">
      </div>
      <div class="container">
        <div class="row">
        </div>
      </div>
      <div class="text">
        <div class="carosel">
          <div class="carosel-image">
          </div>
        </div>
      </div>
    </div>
    <card/>
    <Addbook @remove="removeModal()"/>
</div>

</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';
import card from '../../components/_module/card.vue';
import Addbook from '../../components/_module/Addbook.vue';

export default {
  name: 'Dashboard',

  components: {
    card,
    Addbook,
  },
  data() {
    return {
      user_id: '',
      user: [],
    };
  },
  created() {
    const userToken = localStorage.token;
    const resultToken = jwt.verify(userToken, 'library');
    this.user_id = resultToken.id;
    console.log(resultToken);
  },
  mounted() {
    this.getUser();
  },
  methods: {
    logout() {
      localStorage.removeItem('id_user');
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    showModal() {
      document.querySelector('.parent-modal').classList.add('parent-active');
    },
    removeModal() {
      document.querySelector('.parent-modal').classList.remove('parent-active');
    },
    sweap() {
      const slide = document.querySelector('.slide');
      slide.style.marginLeft = '-350px';
    },
    bringBack() {
      const slide = document.querySelector('.slide');
      slide.style.marginLeft = '0px';
    },
    getUser() {
      axios
        .get(`http://localhost:1111/api/v1/user/${this.user_id}`)
        .then((res) => {
          // this.books = res.data.result;
          // console.log(res.data.result[0]);
          const data = res.data.result[0];
          this.user = data;
          console.log(this.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>

@font-face{
  font-family:"airbnb";
  src: url('../../assets/fonts/AirbnbCerealBold.ttf');
  }

@font-face{
  font-family: "airbnbmedium";
  src: url('../../assets//fonts/AirbnbCerealMedium.ttf');
}

.option h3{
  cursor: pointer;
}

.carosel{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url('../../assets/img/4683.jpg');
  background-size: cover;
}

.thumbnail{
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  width: 350px;
  height: 247px;
  margin: 80px 20px;
  border-radius: 20px;
}

.navbar{
  background-color: white;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border: none;
  height: 70px;
  position: fixed !important ;
  width: 100%;
}

.text{
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  align-items: flex-end;
}

.row {
  padding: 10px;
}

.slide{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 1s;
  margin-left: -350px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.slide:active{
  transform: translateY(2px);
}

.burger{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  background-color: white;
  cursor: pointer;
}

.profile{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  margin: 0px auto;
}

.profile-img{
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
}

.this-img{
  width: 150px;
  height: 150px;
  border-radius: 150px;
}

.profile-name{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}

h2{
  font-family: airbnb;
  font-weight: 600;

}

.strip{
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu{
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: flex-end;
}

.option{
  width: 85%;
  height: 300px;
}

.name{
  width: 100%;
  height: 50px;
  margin-top: auto;
}

.content-image{
  width: 100px;
  height: 100%;
}

.addtional{
  display: flex;
  justify-content: space-between;
}

.btn-search{
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
}

.logo{
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
}

.content-logo{
  width: 100%;
  height: 80%;
  display: flex;justify-content: center;
}

h1{
  font-family: airbnb;
}

.action-search{
  border: none;
  border-radius: 20px;
  border: 1px solid #d0cccc;
  width: 300px;
  height: 30px;
  padding: 20px;
}

.container{
  display: flex;
  margin: auto auto;
}

.select{
  border: none;
  background-color: white;
  font-family: airbnbmedium;
}

.img-profile{
  width: 100px;
  height: 100px;
  background-color: yellowgreen;
}

h3{
  padding: 8px;
  font-family: airbnbmedium;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  color: black;
}

.main-h3{
  color: black;
  padding: 8px;
  font-family: airbnbmedium;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

.back-wrap{
  position: absolute;
  left: 20px;
  cursor: pointer;
  transition: ease 0.2s;
}

.back-wrap:active{
  transform: translateY(2px);
}
</style>
