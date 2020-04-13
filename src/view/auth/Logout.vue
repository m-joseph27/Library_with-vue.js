<script>
export default {
  name: 'Logout',
  created() {
    delete localStorage.password;
    delete localStorage.userId;
    this.$router.push('/login');
  },
};
</script>
