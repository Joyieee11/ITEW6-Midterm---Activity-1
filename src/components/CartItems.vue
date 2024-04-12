<template>
  <div class="cart-items">
    <div v-for="(item, index) in items" :key="index" class="cart-item">
      <div class="item-details">
        <div class="item-image">
          <img :src="item.image" alt="Book Cover" class="book-image" />
        </div>
        <div class="item-text">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-price">₱{{ item.price }}.00</div>
        </div>
      </div>
      <div class="actions">
        <div class="quantity">
          <input type="number" v-model="item.quantity" @input="updateQuantity(item)" />
        </div>
        <button class="remove-item-btn" @click="removeItem(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItems',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeItem(index) {
      this.$emit('remove', index);
    },
    updateQuantity(item) {
      this.$emit('update-quantity', item);
    }
  }
};
</script>

<style scoped>
.cart-items {
  margin-top: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.cart-item:hover {
  background-color: #444;
  transform: translateY(-5px);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
}

.item-details {
  display: flex;
  align-items: center;
}

.item-image {
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
}

.book-image {
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.item-text {
  flex-direction: column;
}

.item-title {
  font-weight: bold;
  font-size: 16px;
  color: #fff;
}

.item-price {
  font-size: 14px;
  color: #ccc;
}

.actions {
  display: flex;
  align-items: center;
}

.quantity {
  margin-right: 10px;
}

input[type="number"] {
  width: 60px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.remove-item-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #ff6347;
  color: #fff;
  cursor: pointer;
}
</style>
