<template>
    <div class="auth-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="signup">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
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
      signup() {
        // Example: perform validation
        if (!this.username || !this.password) {
          console.error('Please enter username and password');
          return;
        }
  
        // Example: dispatch signup action to Vuex store
        this.$store.dispatch('signup', { username: this.username, password: this.password })
          .then(() => {
            // Redirect to home or login page after successful signup
            this.$router.push('/');
          })
          .catch((error) => {
            console.error('Signup failed:', error.message);
            // Handle signup failure (e.g., display error message)
          });
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
  