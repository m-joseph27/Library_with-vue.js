<template>
  <div>
    <router-link to="/login" class="login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'btn-login',
};
</script>

<style>
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
</style>
