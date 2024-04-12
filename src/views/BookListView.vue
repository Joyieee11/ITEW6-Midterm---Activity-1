<template>
  <div class="book-list">
    <h2 class="list-title">All Books</h2>
    <AllBooks :books="books" />

    <h2 class="list-title">Best Sellers</h2>
    <BestSeller :bestSellers="bestSellers" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AllBooks from '@/components/AllBooks.vue';
import BestSeller from '@/components/BestSeller.vue';

export default {
  name: 'BookListView',
  components: {
    AllBooks,
    BestSeller
  },
  computed: {
    ...mapState(['books', 'bestSellers'])
  },
  created() {
    this.fetchBooks(); 
  },
  methods: {
    ...mapActions(['fetchBooks'])
  }
};
</script>

<style scoped>
.book-list {
  padding: 20px;
  width: 82%;
  background-color: #1e1e1e;
  color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
}

.list-title {
  text-align: center;
  padding: 10px;
  background-color: #9A031E;
  border-radius: 5px;
  color: #fff;
  font-size: 24px;
}
</style>
