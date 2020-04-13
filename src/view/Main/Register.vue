<template>
  <div class="login-page">
    <div class="login-image">
      <p class="text">Book is a window <br>to the world</p>
      <p class="ket">Photo by Mark Pan4ratte on Unsplash</p>
    </div>
    <div class="form">
      <img src="../../assets/img/book.png" class="book">
        <p class="login">Register</p>
        <p class="back">Welcome back, Please register <br>to create account</p>
        <p class="by">By signing up,you agree to Book's</p>
        <p class="terms">Terms and condition <span class="dan">&</span>
        <p class="privacy">Privacy Policy</p>
      <div class="pass">
        <label for="email" class="label-email">Username</label><br>
        <input v-model="username" type="text" class="email"><br>
        <input v-model="name" type="text" class="password"><br>
        <label for="name" class="label-password">Full Name</label><br>
        <label for="name" class="name">Email</label>
        <input v-model="email" type="text" class="full-name">
        <input v-model="password" type="password" class="sandi">
        <label for="password" class="sandi1">Password</label>
        <button @click="register" class="btn-sign">Sign Up</button>
        <router-link to="/login" class="btn-login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      username: null,
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    register() {
      axios
        .post('http://localhost:1111/api/v1/user/register', {
          email: this.email,
          fullname: this.name,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$router.push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.login-page{
  display: flex;
  width: 100%;
}

.login-image{
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url('../../assets/img/background.jpeg');
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 55%;
}

.form{
  height: 100vh;
  width: 45%
}
@font-face{
  font-family: "airbnb";
  src: url('../../assets/fonts/AirbnbCerealBold.ttf');
}
@font-face{
  font-family: "airbnbmedium";
  src: url('../../assets/fonts/AirbnbCerealMedium.ttf');
}

.text{
  color: white;
  position: absolute;
  width: 808px;
  height: 318px;
  left: 56px;
  top: 88px;
  font-family: airbnb;
  font-size: 64px;
  line-height: 83px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
}

.ket{
  color: white;
  font-family: airbnb;
  position: absolute;
  left: 29px;
  top: 600px;
}

.book{
  position: absolute;
  width: 70px;
  height: 70px;
  left: 1270px;
  top: 12px;

}

.login{
  position: absolute;
  width: 354px;
  height: 138px;
  left: 800px;
  top: 90px;
  font-size: 64px;
  line-height: 83px;
  font-family: airbnb;
  color: #424242;
}

.back{
  color: #424242;
  position: absolute;
  width: 400px;
  left: 800px;
  height: 150px;
  top: 170px;
  font-family: airbnb;

}

.by{
  font-family: airbnb;
  color: #D0CCCC;
  stroke: solid;
  position: absolute;
  left: 800px;
  top: 580px;
  }

.terms{
  position: absolute;
  color: black;
  left: 800px;
  top: 600px;
  font-family: airbnb;
}

.dan{
  position: absolute;
  stroke: solid;
  color: #D0CCCC;

}

.privacy{
  position: absolute;
  color: black;
  left: 968px;
  top: 600px;
  font-family: airbnb;
}

.pass{
  position: absolute;
  width: 354px;
  height: 138px;
  left: 800px;
  top: 210px;
}

.email{
  width: 417px;
  height: 60px;
  padding-top: 19px;
  padding-left: 19px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}

.password{
  width: 417px;
  height: 60px;
  padding-top: 19px;
  padding-left: 19px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);

}

.label-email{
  position: absolute;
  font-family: airbnb;
  color: #D0CCCC;
  left: 19px;
  margin-top: 30px;

}

.label-password{
  position: absolute;
  font-family: airbnb;
  color: #D0CCCC;
  left: 19px;
  margin-top: -55px;
}

.full-name{
  position: absolute;
  width: 417px;
  height: 60px;
  padding-top: 19px;
  padding-left: 19px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  margin-top: -24px;
}

.name{
  position: absolute;
  z-index: 1;
  font-family: airbnb;
  color: #D0CCCC;
  left: 19px;
  margin-top: -20px;
}

.sandi{
  position: absolute;
  width: 417px;
  height: 60px;
  padding-top: 19px;
  padding-left: 19px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  margin-top: 36px;
}

.sandi1{
  position: absolute;
  z-index: 1;
  font-family: airbnb;
  color: #D0CCCC;
  left: 19px;
  margin-top: 40px;
}

.btn-sign{
  position: absolute;
  padding: 6px 25px;
  /* width: 110px;
  height: 36px; */
  border-radius: 5px;
  color: white;
  background-color: black;
  border: none;
  font-family: airbnbmedium;
  left: 0px;
  margin-top: 130px;

}

.btn-login{
  position: absolute;
  padding: 6px 32px;
  /* width: 110px;
  height: 36px; */
  border-radius: 5px;
  color: #D0CCCC;
  border: 1px solid #D0CCCC;
  background-color: transparent;
  font-family: airbnbmedium;
  left: 120px;
  margin-top: 130px;
}
</style>
