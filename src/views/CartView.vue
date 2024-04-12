<template>
  <div class="cart">
    <h2 class="list-title">My Shopping Cart</h2>
    <div class="cart-items">
      <CartItems :items="cartItems" @remove="removeItem" @update-quantity="updateQuantity" />
    </div>
    <div class="total">Total: {{ calculateTotal }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartItems from '@/components/CartItems.vue';

export default {
  name: 'CartView',
  components: {
    CartItems
  },
  computed: {
    ...mapGetters(['cartItems']),
    calculateTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
  },
  methods: {
    ...mapActions(['removeItemFromCart', 'updateCartItemQuantity']),
    removeItem(index) {
      this.removeItemFromCart(index);
    },
    updateQuantity(item) {
      this.updateCartItemQuantity(item);
    }
  }
};
</script>

<style scoped>
.cart {
  padding: 20px;
  background-color: #1e1e1e;
  color: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
}

.list-title {
  text-align: left;
  padding: 10px;
  background-color: #9A031E;
  border-radius: 5px;
  color: #fff;
  font-size: 24px;
}

.total {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: #9A031E;
  border-radius: 5px;
  color: #fff;
}
</style>
