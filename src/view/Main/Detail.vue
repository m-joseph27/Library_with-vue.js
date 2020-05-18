<template>
  <div>
    <div class="parent">
        <div class="header">
          <!-- <div class="button-back"> -->
            <router-link class="button-back" :to="'/dashboard'">
            <img src="../../assets/img/Arrow.png" alt="">
            </router-link>
          <div class="modal-book">
            <h5 class="edit">EDIT</h5>
            <h5 class="delete">DELETE</h5>
          </div>
        </div>
    </div>
    <div class="banner"></div>
    <div class="content">
      <div class="cover-book"></div>
      <div class="content-detail">
        <div class="badge-content">
          <p>{{bookDetail.name}}</p>
        </div>
        <div class="content-description">
          <div class="description">
            <h1>{{bookDetail.title}}</h1>
            <p>{{bookDetail.update_at}}</p>
            <p>{{bookDetail.description}}</p>
          </div>
          <div class="status">
            <h2 v-if="bookDetail.status === 1">Available</h2>
            <h2 class="status-book" v-if="bookDetail.status === 0">Unavailable</h2>
          </div>
        </div>
      </div>
      <div class="btn-borrow">
        <div class="borrow-action">
          <button>Borrow</button>
        </div>
      </div>
    </div>
    <addbook/>
  </div>
</template>

<script>
import axios from 'axios';
import addbook from '../../components/_module/Addbook.vue';

export default {
  components: {
    addbook,
  },
  data() {
    return {
      bookDetail: '',
    };
  },
  methods: {
    loadDetail() {
      axios
        .get(`${process.env.VUE_APP_URL}book/${this.$route.params.id}`).then((getDetail) => {
          this.bookDetail = getDetail.data.result;
          document.querySelector('div.banner').style.backgroundImage = `url(${this.bookDetail.image})`;
          document.querySelector('div.cover-book').style.backgroundImage = `url(${this.bookDetail.image})`;
        });
    },
  },
  created() {
    this.loadDetail();
    console.log(this.bookDetail.title);
  },
};
</script>

<style scoped>
@font-face {
  font-family: "airbnb";
  src: url('../../assets/fonts/AirbnbCerealBold.ttf');
}
@font-face{
  font-family: "airbnbmedium";
  src: url("../../assets/fonts/AirbnbCerealMedium.ttf");
}

html body{
  margin: 0;
  padding: 0;
}

.status-book{
  color: rgb(243, 112, 103);
}
.parent{
  display: flex;
  justify-content: end;
  align-items: flex-end;
  /* height: 1500px; */
  width: 100vw;
  background-color: aqua;
  max-width: 100%;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 80px;
  /* background-color: black; */
}
.button-back{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: white;
  transition: 0.2s;
  cursor: pointer;
  margin-left: 20px;
}
.button-back:active{
  transform: translateY(5px);
}
.modal-book{
  display: flex;
  justify-content:space-around;
  padding: 20px;
  width: 250px;
  height: 100%;
  cursor: pointer;
}
.modal-book h5{
  color: white;
  font-family: airbnb;
  text-shadow: rgba(0, 0, 0, 0.7);
  transition: 0.2s;
}

.edit:active{
  transform: translateY(2px);
}
.delete:active{
  transform: translateY(2px);
}
.banner{
  display: flex;
  width: 100%;
  height: 500px;
  background-color: coral;
  background-image: url('../../assets/img/covernya.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: -80px;
}
.content{
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  height: 700px;
  /* background-color: cadetblue; */
}
.cover-book{
  display: flex;
  position: absolute;
  /* margin: auto; */
  right: 50px;
  background-color: chartreuse;
  width: 200px;
  height: 300px;
  margin-top: -190px;
  background-image: url('../../assets/img/dilan.jpeg');
  background-size: cover;
  border-radius: 10px;
}
.content-detail{
  /* background-color: darkred; */
  width: 900px;
  height: 100%;
}
.btn-borrow{
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: white;
  width: 35%;
  height: 100%;
}
.badge-content{
  display: flex;
  justify-content: center;
  padding-top: 10px;
  background-color: gold;
  font-family: airbnbmedium;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  margin-left: 80px;
  color: white;
}
.content-description{
display: flex;
/* background-color: indigo; */
width: 100%;
height: 80px;
}
.description{
/* background-color: khaki; */
padding-left: 80px;
width: 70%;
height: 100px;
font-family: airbnb;
}
.description p{
  font-family: airbnbmedium;
}
.status{
display: flex;
justify-content: center;
align-items: center;
color: #99D815;
/* background-color: lawngreen; */
width: 30%;
font-family: airbnb;
line-height: 39px;
}
.borrow-action{
/* background-color: lightpink; */
display: flex;
justify-content: center;
align-items: center;
bottom: 0;
align-items: center;
margin-top: 90%;
width: 300px;
height: 100px;
}
.borrow-action button{
border: none;
background-color: #FBCC38;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 240px;
height: 74px;
font-family: airbnb;
font-size: 30px;
line-height: 39px;
color: white;
}
.button-back img{
align-items: center;
}
</style>
