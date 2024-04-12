import { createStore } from 'vuex';


const store = createStore({
  state: {
    cartItems: [],
    books: [],
    bestSellers: [],
    user: null
  },
  mutations: {
    addToCart(state, { item, quantity }) {
      console.log(item);
      if (!item || !item.price) {
          console.error('Invalid item or item price:', item);
          return;
        }

      const existingItem = state.cartItems.find(cartItem => cartItem.title === item.title);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const price = parseFloat(item.price.replace('₱', ''));
        state.cartItems.push({ ...item, quantity, price });
      }
      state.notification = 'Book Added to Cart';
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
    clearNotification(state) {
      state.notification = null;
    },
    setBooks(state, books) {
      state.books = books;
    },
    setBestSellers(state, bestSellers) {
      state.bestSellers = bestSellers;
    },
    updateCartItemQuantity(state, item) {
      const cartItem = state.cartItems.find(ci => ci.title === item.title);
      if (cartItem) {
        cartItem.quantity = item.quantity;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
    clearCart(state) {
      state.cartItems = []; // Clear the cart items array
    },
  },
  actions: {
    addItemToCart({ commit }, { item, quantity }) {
      commit('addToCart', { item, quantity });
      setTimeout(() => {
        commit('clearNotification');
      }, 3000); 
    },
    removeItemFromCart({ commit }, index) {
      commit('removeFromCart', index);
    },
    fetchBooks({ commit }) {
    const books = [
        { index: 1, title: 'Chasing Hurricane', author: 'by Serialsleeper', price: '₱450.00', image: '/image/book4.jpg' },
        { index: 2, title: 'Stay Awake Agatha', author: 'by Serialsleeper', price: '₱500.00', image: '/image/book5.jpg' },
        { index: 3, title: 'I love you since 1892', author: 'by Binibining Mia', price: '₱870.00', image: '/image/book6.jpg' },
        { index: 4, title: 'Baka Sakali (Book 1)', author: 'by Jonaxx', price: '₱379.00', image: '/image/book11.jpg' },
        { index: 5, title: 'Helderiet Woods (Prios Series #2)', author: 'by Ms Butterfly', price: '₱450.00', image: '/image/book10.jpg' },
        { index: 6, title: 'Tantei High (Erityian Tribe Series #1)', author: 'by Purpleyhan', price: '₱785.00', image: '/image/book9.jpg' },
        { index: 7, title: 'Unstring (Dagger Series #2)', author: 'by Lena', price: '₱399.00', image: '/image/book8.jpg' },
        { index: 8, title: "He's into Her Season 1", author: 'by Maxinejiji', price: '₱629.00', image: '/image/book1.jpg' },
        { index: 9, title: "He's into Her Season 2", author: 'by Maxinejiji', price: '₱629.00', image: '/image/book2.jpg' },
        { index: 10, title: "He's into Her Season 3", author: 'by Maxinejiji', price: '₱629.00', image: '/image/book3.jpg' },
        { index: 11, title: 'Hell University', author: 'by KnightInBlack', price: '₱600.00', image: '/image/book12.jpg' },
        { index: 12, title: 'Dayo', author: 'by Helliza', price: '₱499.00', image: '/image/book7.jpg' },

        { index: 13, title: 'Love Without Limits', author: 'by Maxinejiji', price: '₱799.00', image: '/image/book13.jpg' },
        { index: 14, title: 'End This War (Alegria Boys #3)', author: 'by Jonaxx', price: '₱400.00', image: '/image/book14.jpg' },
        { index: 15, title: "The Bad Boy's Love", author: 'by blue_maiden', price: '₱499.00', image: '/image/book15.jpg' },
        { index: 16, title: 'Montello High: School of Gangsters', author: 'by sielalstreim', price: '₱499.00', image: '/image/book16.jpg' },
        { index: 17, title: 'Seducing Drake Palma', author: 'by beeyotch', price: '₱499.00', image: '/image/book17.jpg' },
        { index: 18, title: 'Golden Scenery of Tommorow (University Series #5)', author: 'by 4reuminct', price: '₱499.00', image: '/image/book18.jpg' },
        { index: 19, title: 'One Night With My Boss', author: 'by CeCeLib', price: '₱499.00', image: '/image/book19.jpg' },
        { index: 20, title: 'His Indecent Proposal: Lander Montenegro', author: 'by JFstories', price: '₱499.00', image: '/image/book20.jpg' },
        { index: 21, title: 'His Bite (Book 1 of Bite Trilogy) Venom Series #1', author: 'by JFstories', price: '₱499.00', image: '/image/book21.jpg' },
        { index: 22, title: 'I Love You, Ara', author: 'by JFstories', price: '₱499.00', image: '/image/book22.jpg' },
        { index: 23, title: 'EX With Benefits', author: 'by youramnesiagirl', price: '₱499.00', image: '/image/book23.jpg' },
        { index: 24, title: 'Diary ng Panget', author: 'by HaveYouSeenThisGirl', price: '₱499.00', image: '/image/book24.jpg' },
        { index: 25, title: 'Avah Maldita (Aarte Pa?)', author: 'by simplychummy', price: '₱499.00', image: '/image/book25.jpg' },
    ];

    const bestSellers = [
        { index: 1, title: "He's into Her Season 1", author: 'by Maxinejiji', price: '₱629.00', image: '/image/book1.jpg' },
        { index: 2, title: "He's into Her Season 2", author: 'by Maxinejiji', price: '₱629.00', image: '/image/book2.jpg' },
        { index: 3, title: "He's into Her Season 3", author: 'by Maxinejiji', price: '₱629.00', image: '/image/book3.jpg' },
    ];

      commit('setBooks', books);
      commit('setBestSellers', bestSellers);
    },
    async login({ commit }, { username, password }) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate asynchronous operation (replace with actual login logic)
    
      if (username === 'admin' && password === '1234') {
        commit('setUser', { username });
      } else {
        throw new Error('Invalid username or password'); // Throw an error for invalid credentials
      }
    },
    
    async logout({ commit }) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      commit('setUser', null);
    }, 
    clearCart({ commit }) {
      commit('clearCart'); // Commit the clearCart mutation
    }, 
  },
  getters: {
    cartItems: state => state.cartItems,
    notification: state => state.notification,
    books: state => state.books,
    bestSellers: state => state.bestSellers,
    isAuthenticated: state => !!state.user
  }
});

export default store;
