<template>
  <div class="all-books">
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search Title or Author" class="search-input" @input="filterBooks" />
    </div>

    <div class="carousel-container">
      <div class="carousel-track" ref="carouselTrack">
        <div class="carousel-slide" v-for="(slideBooks, slideIndex) in groupedBooks" :key="slideIndex">
          <div class="book-container" v-for="book in slideBooks" :key="book.title">
            <div class="book-image">
              <img :src="book.image" alt="Book Cover">
            </div>
            <div class="book-details">
              <div class="row">
                <div class="title">{{ book.title }}</div>
                <div class="author">{{ book.author }}</div>
                <div class="price">{{ book.price }}</div>
              </div>
              <div class="button-container">
                <button class="add-to-cart-btn" @click="addToCart(book)">
                  <i class="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="carousel-nav-btn prev" v-show="currentSlide > 0">❮</button>
      <button @click="nextSlide" class="carousel-nav-btn next" v-show="currentSlide < numSlides - 1">❯</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AllBooks',
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      groupedBooks: [],
      currentSlide: 0,
      numSlides: 0,
      slideWidth: 0,
      itemsPerSlide: 4,
      searchQuery: ''
    };
  },
  mounted() {
    this.groupBooks();
    this.numSlides = this.groupedBooks.length;
    this.slideWidth = this.$refs.carouselTrack.clientWidth;
  },
  computed: {
    ...mapGetters(['notification']),
    // Use filteredBooks computed property to render based on search query
    filteredBooks() {
      const query = this.searchQuery.toLowerCase();
      return this.books.filter(book => {
        return (
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    ...mapActions(['addItemToCart']),
    addToCart(book) {
      this.addItemToCart({ item: book, quantity: 1 });
    },
    groupBooks() {
      let startIndex = 0;
      while (startIndex < this.filteredBooks.length) {
        this.groupedBooks.push(this.filteredBooks.slice(startIndex, startIndex + this.itemsPerSlide));
        startIndex += this.itemsPerSlide;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.numSlides - 1) {
        this.currentSlide++;
        this.slideToCurrentSlide();
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.slideToCurrentSlide();
      }
    },
    slideToCurrentSlide() {
      this.$refs.carouselTrack.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;
    },
    filterBooks() {
      this.groupedBooks = [];
      this.groupBooks();
      this.numSlides = this.groupedBooks.length;
    }
  }
};
</script>

<style scoped>
.all-books {
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #fff;
  border-radius: 10px;
  justify-content: space-between;
}

.search-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.search-input {
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  width: 200px;
}

.book-container {
  display: flex;
  align-items: center;
  width: calc(24% - 20px);
  margin-bottom: 5px;
  background-color: #1e1e1e;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.book-container:hover {
  background-color: #444;
  transform: translateY(-5px);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
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
  flex: 1;
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
  color: #ccc;
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
  margin-top: 10px;
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

.carousel-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: space-around;
}

.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  z-index: 1;
}

.carousel-nav-btn.prev {
  left: 10px;
}

.carousel-nav-btn.next {
  right: 10px;
}
</style>
