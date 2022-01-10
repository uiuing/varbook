import {createApp} from 'vue'
import VARBook from './VARBook.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "@/plugins/axios";

let varBook = createApp(VARBook);

varBook.use(ElementPlus)
varBook.use(router)

varBook.mount('#varBook')

varBook.config.globalProperties.$api = axios