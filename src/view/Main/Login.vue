<template>
  <div class="login-page">
    <div class="login-image">
      <p class="text">Book is a window <br>to the world</p>
      <p class="ket">Photo by Mark Pan4ratte on Unsplash</p>
    </div>
    <div class="form">
      <img src="../../assets/img/book.png" class="book">
      <p class="login">Login</p>
      <p class="back">Welcome back, Please login <br>to your account</p>
      <p class="by">By signing up,you agree to Book's</p>
      <p class="terms">Terms and condition <span class="dan">&</span>
      <p class="privacy">Privacy Policy </p>
      <div class="pass">
        <label for="email" class="label-email">Email Address</label><br>
        <input v-model="email" type="text" class="email"><br>
        <input v-model="password" type="password" class="password"><br>
        <label for="password" class="label-password">Password</label>
        <input type="checkbox" class="check-box">
        <label for="checkbox" class="check">Remember me</label>
        <a href="#" class="forgot">Forgot Password</a>
        <button @click="login" class="btn-login">Login</button>
        <router-link to="/register" class="btn-sign">Sign Up</router-link>
        <div v-if="error !== false" class="login-message">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import vuelidate from 'vuelidate';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: false,
    };
  },
  methods: {
    login() {
      axios
        .post('http://localhost:1111/api/v1/user/login', {
          email: this.email, password: this.password,
        })
        .then((req) => {
          this.loginSucces(req);
        });
    },
    loginSucces(request) {
      if (request.status === 202) {
        this.loginFailed();
        return;
      }
      if (request.status === 203) {
        this.emailFail();
        return;
      }
      if (request.data.result.status === 0) {
        this.unactivated(request);
        return;
      }
      localStorage.token = request.data.token;
      this.error = 'login succes';
      this.$router.replace('/dashboard');
    },
    loginFailed() {
      this.error = 'Incorrect password!';
      delete localStorage.token;
    },
    emailFail() {
      this.error = 'Incorrect Email!';
      delete localStorage.token;
    },
    unactivated() {
      this.error = 'Your email Unactivated';
      delete localStorage.token;
    },
  },
};
</script>

<style scoped>
.login-page{
  display: flex;
  width: 100%;
}

.login-message{
  margin-top: 80px;
  padding-left: 137px;
  padding-top: 3px;
  width: 420px;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(236, 10, 10);
  font-family: airbnbmedium;
  color: white;
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
  top: 120px;
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
  top: 200px;
  font-family: airbnb;

}

.by{
  color: #D0CCCC;
  stroke: solid;
  position: absolute;
  left: 800px;
  top: 580px;
  font-family: airbnb;
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
  top: 250px;
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

.check-box{
  position: relative;
  width: 20px;
  height: 20px;
  border: none none !important;
  margin-top: 15px;
}

.check{
  position: absolute;
  font-family: airbnbmedium;
  font-size: 17px;
  font-style: normal;
  color: #D0CCCC;
  left: 30px;
  margin-top: 15px;
}

.forgot{
  float: right;
  position: relative;
  font-family: airbnbmedium;
  left: 60px;
  margin-top: 16px;
  color: black;
}

.forgot:hover{
  color: black;
}

.btn-login{
  position: absolute;
  padding: 8px 25px;
  /* width: 110px;
  height: 36px; */
  border-radius: 5px;
  color: white;
  background-color: black;
  border: none;
  font-family: airbnbmedium;
  left: 0px;
  margin-top: 60px;

}

.btn-sign{
  position: absolute;
  padding: 8px 20px;
  /* width: 110px;
  height: 36px; */
  border-radius: 5px;
  color: #D0CCCC;
  border: 1px solid #D0CCCC;
  background-color: transparent;
  font-family: airbnbmedium;
  left: 100px;
  margin-top: 60px;
}
</style>
