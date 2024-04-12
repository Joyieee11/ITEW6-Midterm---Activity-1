<template>
    <div class="auth-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', { username: this.username, password: this.password });
        this.$router.push('/list');
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-form {
    padding: 20px;
    background-color: #1e1e1e;
    color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    width: 300px;
    margin: auto;
  }
  
  input[type="text"],
  input[type="password"],
  button {
    display: block;
    margin-bottom: 15px;
    padding: 8px;
    border: none;
    border-radius: 5px;
  }
  
  button {
    background-color: #9A031E;
    color: #fff;
    cursor: pointer;
  }
  </style>
  
