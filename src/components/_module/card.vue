<template>
<div class="full-card">
  <div v-for="book in books" :key="book.id" class="list-book">
      <!-- <div class="card"> -->
        <router-link class="card" :to="'/detail/' + book.id">
          <img :src="book.image" alt="">
        <h2>{{book.title}}</h2>
        <p>{{book.description}}</p>
        </router-link>
      <!-- </div> -->
    </div>
    <div class="page-controler">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
        <a class="page-link" style="cursor:pointer" @click="prevPages">Previous</a>
        </li>
        <li class="page-item" v-for="pagination in totalPage" :key="pagination">
          <a class="page-link" style="cursor:pointer"
          @click="pages(pagination)"  >{{pagination}}</a></li>
        <li class="page-item next">
        <a class="page-link" style="cursor:pointer" @click="nextPages">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'card',
  data() {
    return {
      books: [],
      currentPage: 1,
      totalPage: [],
      url: 'localhost:1111/api/v1/book?page=',
    };
  },
  methods: {
    pages(id) {
      this.currentPage = 0 + id;
      axios.get(`http://localhost:1111/api/v1/book?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.books = res.data.result[2];
        });
    },
    nextPages() {
      if (this.currentPage === this.totalPage) {
        this.currentPage = this.totalPage;
      } else {
        this.currentPage += 1;
      }
      axios.get(`http://localhost:1111/api/v1/book?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.books = res.data.result[2];
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    prevPages() {
      if (this.currentPage === 1) {
        this.currentPage = 1;
      } else {
        this.currentPage -= 1;
      }
      axios.get(`http://localhost:1111/api/v1/book?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.books = res.data.result[2];
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axios.get(`http://localhost:1111/api/v1/book?page=${this.currentPage}`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.books = res.data.result[2];
        // eslint-disable-next-line prefer-destructuring
        this.totalPage = res.data.result[0];
      });
  },
};
</script>

<style scoped>
.page-controler{
  margin-top: 50px;
  font-family: airbnbmedium;
}

.pagination:active{
  transform: translateY(1px);
}

.full-card{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-content: space-around;
  padding: 40px;
}

.card{
  display: flex;;
  position: relative;
  margin-top: 50px;
  width: 320px;
  height: 360px;
  border-radius: 15px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  background: #fff;
  text-decoration: none;
  color: black;
}

.card img {
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    height: 200px;
}

.card h2{
  text-align: center;
  font-family: airbnbmedium;
  /* overflow: hidden; */
}

.card p{
  text-align: center;
  overflow: hidden;
}

</style>
