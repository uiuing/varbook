<template>
  <header :class="isContentOnce ? 'reduceTop' : 'increaseTop'">
    <banner></banner>
  </header>
  <section>
    <search-bar @start-search="openSearch"></search-bar>
    <div class="text-tips">
      <text-tips></text-tips>
    </div>
    <search-result v-if="isContentOnce" :input_contents="input"></search-result>
  </section>
</template>

<script>
import banner from "@/components/Header/banner";
import searchBar from "@/components/Search/searchBar";
import textTips from "@/components/Search/textTips";
import SearchResult from "@/components/Search/searchResult";
import {ref} from "vue";

export default {
  components: {
    SearchResult,
    banner, searchBar, textTips
  },
  setup() {
    // If it's the first search, move the head up if it's the first time
    const isContentOnce = ref(false);

    // Get the input value and pass it to the search-result component
    const input = ref('');
    const openSearch = v => {
      // update input
      input.value = v;
      // The first search will be performed and the content of the search-result tag will be displayed
      isContentOnce.value = true;
    }
    return {openSearch, input, isContentOnce}
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
/*Reduce the newline of the header*/
.reduceTop {
  margin-top: 25px;
  transition: all 0.3s ease-in-out;
}

/*Add a new line to the header, as it looks when first opened*/
.increaseTop {
  margin-top: 130px;
  transform: translateY(0px);
}

/*When accessing the mobile terminal, the line wrapping of the header should be reduced, which is more beautiful*/
@media (max-width: 550px) {
  .increaseTop {
    margin-top: 70px;
  }
}

/*section tag content centered*/
section {
  text-align: center;
}

.text-tips {
  text-align: left;
  max-width: 600px;
  margin: auto;
  width: 70%;
}
</style>

<style>
/*global white*/
body {
  color: white;
}
</style>