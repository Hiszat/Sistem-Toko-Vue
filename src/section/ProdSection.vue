<script setup>
import ProductComponent from '@/components/ProductComponent.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const data = ref([]);

onMounted(() => {
  axios
    .get('https://sistemtoko.com/public/demo/product')
    .then(response => {
      // Map data API ke struktur yang diinginkan
      data.value = response.data.aaData.map(item => ({
        id: item.id,
        title: item.name,
        tag: item.category || 'Elegan, Minimalis, Modern', // tambahkan tag default jika tidak ada
        price: item.price,
        image: item.photo,// fallback jika gambar tidak ada

      }));
      console.log(response.data.aaData);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
});


console.log(data);
</script>

<template>
  <section id="product" class="w-full h-screen mt-10 ps-10">
    <h4 class="text-xs font-normal text-thirdary">Discover</h4>
    <h3 class="text-3xl font-playfair text-secondary">Featured</h3>
    <div class="flex items-center justify-between pe-10">
      <p class="text-xs font-normal text-thirdary">
        Explore our selection of modern furniture for your home.
      </p>
      <a href="" class="px-3 py-2 text-sm text-white bg-primary font-playfair">
        View All
      </a>
    </div>
    <div class="flex flex-row py-5 overflow-x-hidden mb-9 flex-nowrap">
      <div v-for="item in data" :key="item.id">
        <ProductComponent
        :id="item.id"
        :title="item.title"
        :tag="item.tag"
        :price="item.price"
        :image="item.image"
        />
      </div>
    </div>
    <div class="flex flex-row items-center justify-between flex-nowrap">
      <div class="flex flex-row">
        <button class="flex-shrink-0 w-3 h-3 mr-1 rounded-full bg-secondary text-secondary"></button>
        <button class="flex-shrink-0 w-3 h-3 mr-1 rounded-full bg-[#E5D097] text-[#E5D097]"></button>
        <button class="flex-shrink-0 w-3 h-3 mr-1 rounded-full bg-[#E5D097] text-[#E5D097]"></button>
        <button class="flex-shrink-0 w-3 h-3 mr-1 rounded-full bg-[#E5D097] text-[#E5D097]"></button>
        <button class="flex-shrink-0 w-3 h-3 mr-1 rounded-full bg-[#E5D097] text-[#E5D097]"></button>
      </div>
      <div class="flex gap-1 pe-10">
        <button class="p-3 border-2 rounded-full border-[#E5D097]">
          <img src="@/assets/logo/arrow.svg" alt="" class="w-6 h-6 aspect-square" />
        </button>
        <button class="p-3 border-2 rounded-full border-[#E5D097]">
          <img src="@/assets/logo/arrow.svg" alt="" class="w-6 h-6 rotate-180 aspect-square" />
        </button>
      </div>
    </div>
  </section>
</template>
