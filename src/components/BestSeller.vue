<template>
  <div class="best-seller">
    <div class="book-container" v-for="(book, index) in bestSellers.slice(0, 3)" :key="index">
      <div class="book-image">
        <img :src="book.image" alt="Book Cover">
      </div>
      <div class="book-details">
        <div class="title">{{ book.title }}</div>
        <div class="author">{{ book.author }}</div>
        <div class="price">{{ book.price }}</div>
        <div class="button-container">
          <button class="add-to-cart-btn" @click="addToCart(book)">
            <i class="fas fa-cart-plus"></i>  
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BestSeller',
  props: {
    bestSellers: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['addItemToCart']),
    addToCart(book) {
      this.addItemToCart({ item: book, quantity: 1 });
      console.log('Adding to cart:', book.title);
    },
  }
};
</script>

<style scoped>
.best-seller {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.book-container {
  display: flex;
  align-items: center;
  width: calc(31% - 20px);
  margin-bottom: 10px;
  margin: 5px;
  background-color: #1e1e1e;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.book-container:hover {
  background-color: #444;
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.book-image {
  flex: 1;
}

.book-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.book-details {
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.author {
  font-size: 14px;
  margin-bottom: 8px;
}

.price {
  font-size: 14px;
  font-weight: bold;
  color: #9A031E;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.add-to-cart-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #9A031E;
  color: #fff;
  cursor: pointer;
  transition: .3s ease;
}

.add-to-cart-btn:hover {
  background-color: #670016; 
}

.add-to-cart-btn i {
  margin-right: 5px;
}
</style>
