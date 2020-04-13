<template>
  <div>
    <div class="parent-modal">
        <div class="modal">
            <div class="title">
                <h1>Add book</h1>
                <button @click="$emit('remove')">&times;</button>
            </div>
            <div class="aside">
                <div class="left-side">
                    <h1>Title</h1>
                    <h1>Author</h1>
                    <h1>Status</h1>
                    <h1>Id Category</h1>
                    <h1>Image</h1>
                    <h1>Description</h1>
                </div>
                <div class="right-side">
                  <form enctype="multipart/form-data" @submit="addbook">
                    <input v-model="title" id="title" type="text" placeholder="">
                    <input v-model="author" id="author" type="text">
                    <input v-model="status" id="status" type="text">
                    <input v-model="id_category" id="id_category" type="text">
                    <input ref="file" id="image" type="file">
                    <input v-model="description" id="description" type="text">
                    <button type="submit">Save</button>
                  </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      description: '',
      status: '',
      author: '',
      id_category: '',
      resultData: [],
    };
  },
  methods: {
    addbook(e) {
      e.preventDefault();
      const form = new FormData();
      form.append('title', this.title);
      form.append('description', this.description);
      form.append('image', this.$refs.file.files[0]);
      form.append('status', this.status);
      form.append('author', this.author);
      form.append('id_category', this.id_category);
      axios.post(`${process.env.URL}/book`, form)

        .then((res) => {
          // resultData = '';
          this.resultData = res.data;
          // this.$router.push(``)
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

.parent-modal{
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transition: ease 0.50s;
}

.parent-active{
  visibility: visible;
  opacity: 1;
}

.title button{
  position: absolute;
  right: 7px;
  top: 20px;
  font-size: 50px;
  line-height: 0.5;
  outline: none;
  border: none;
  color: red;
  background-color: transparent;
}

.title h1{
  font-family: airbnb;
  font-size: 35px;
  line-height: 30px;
  padding: 20px;
}

h1{
  padding-left: 20px;
  font-family: airbnb;
  font-size: 20px;
  font-weight: 100;
  line-height: 80px;
}
.modal{
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  width: 750px;
  height: 100vh;
  position: relative;
  border-radius: 15px;
}
.title{
  width: 100%;
  height: 50px;
}
.aside{
  display: flex   ;
  /* background-color: coral; */
  height: 800px;
  width: 100%;
}
.left-side{
  /* background-color: cornsilk; */
  width: 35%;
  height: 100%;
}
.right-side{
  /* background-color: darkgoldenrod; */
  display: flex;
  flex-direction: column;
  line-height: 50px;
  padding: 20px;
  width: 65%;
  height: 100%;
}

.right-side input{
  padding-top: 10px;
  padding-bottom: 10px;
}

.right-side button{
  width: 110px;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: #FBCC38;
  color:  #FFFDFD;
  font-family: airbnb;
}
</style>
