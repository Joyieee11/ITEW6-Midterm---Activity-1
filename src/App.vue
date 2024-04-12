<template>
  <div id="app">
    <nav v-if="isAuthenticated">
      <router-link to="/list" class="nav-link">
        <i class="fa-solid fa-book-open"></i> Book List
      </router-link>
      <router-link to="/cart" class="nav-link">
        <i class="fa-solid fa-cart-shopping"></i> My Cart
      </router-link>
    </nav>
    <router-view v-if="isAuthenticated" />
    <router-view v-else />
    <div v-if="notification" class="notification">
      {{ notification }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['notification']),
    ...mapGetters(['isAuthenticated'])
  }
};
</script>

<style>
#app {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #121212;
  color: #fff;
}

nav {
  flex: 0 0 250px;
  padding-top: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #444;
  width: 100%;
}

nav a {
  font-weight: bold;
  height: 40px;
  width: 100%;
  color: #ccc;
  text-decoration: none;
  display: flex;
  border-radius: 2px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link {
  padding: 10px !important;
}

nav a i {
  margin-right: 10px;
  margin-left: 10px;
  color: #9A031E;
}

nav a:hover {
  background-color: #333;
  color: #9A031E;
}

nav a.router-link-exact-active {
  background-color: #9A031E;
}

nav a.router-link-exact-active i {
  color: #ccc;
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgba(0, 128, 0, 0.8);
  color: #fff;
  border-radius: 5px;
}
</style>
