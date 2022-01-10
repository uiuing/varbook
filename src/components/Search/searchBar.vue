<template>
  <el-input id="searchBox" v-model="input_contents" placeholder="You need to translate the variables"
            @keydown.enter="openSearch"
            autofocus>
    <template #prefix>
      <el-icon class="el-input__icon" @click="openSearch">
        <svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
             data-v-365b8594="">
          <path fill="currentColor"
                d="M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704z"></path>
        </svg>
      </el-icon>
    </template>
  </el-input>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "searchBar",
  data(){
    return{
      // Content retrieved by users
      input_contents:'',
    }
  },
  mounted() {
    // Monitor shortcut keys, focus the input box when control is pressed
    document.onkeydown = function (e) {
      if (e.keyCode == 17){
        document.getElementById("searchBox").focus()
      }
    }
  },
  methods: {
    openSearch(){
      // Determine whether it contains Chinese and English
      let isNull = this.input_contents.replace(/[^^\u4E00-\u9FA5a-zA-Z]/g, '');
      if (isNull) {
        // Start the query and pass the input to the parent component
        this.$emit("startSearch",this.input_contents);
      } else {
        ElMessage({
          showClose: true,
          message: '目前仅支持搜索中/英文',
          type: 'warning',
        })
      }
    }
  }
}
</script>

<style scoped>
/*Modify the default style of el-input*/
.el-input {
  width: 70%;
  max-width: 600px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>