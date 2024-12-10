<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import  ProductComponent from '@/components/ProductComponent.vue';

const data = ref([]);
const total = ref(0);
onMounted(() => {
  axios
    .get('https://sistemtoko.com/public/demo/product')
    .then(response => {
      // Map data API ke struktur yang diinginkan
      total.value = response.data.total;
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
  <!-- Hero Section -->
  <section id="header" class="w-full h-[70vh] relative">
        <div class="w-full -z-10">
          <img
            src="@/assets/image/spacejoy-ctyssSFmXmU-unsplash 1.png"
            alt=""
            class="object-cover w-full h-[70vh]"
          />
        </div>
        <div
          class="absolute top-0 left-0 h-full py-4 bg-gradient-to-r from-[#642C0CBF] via-[#f3f3f3aa] to-[#f3f3f311] w-full"
        >
          <div class="flex flex-col w-1/2 mx-10 my-28">
            <div class="flex flex-col items-start justify-start w-[492px]">
              <h1
                class="text-[52px] font-bold font-playfair text-white leading-[60px]"
              >
                Product
              </h1>
              <div
                class="flex flex-row items-center justify-center gap-8 flex-nowrap"
              >
                <div
                  class="flex flex-row items-center justify-center gap-8 text-white flex-nowrap"
                >
                  <p class="text-base">Home</p>
                  <img src="@/assets/logo/Arrow2.svg" alt="" />
                </div>
                <div
                  class="flex flex-row items-center justify-center gap-8 text-white flex-nowrap"
                >
                  <p class="text-base">Product</p>
                  <img src="@/assets/logo/Arrow2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="shadow-md w-full h-[14vh] flex flex-row justify-between px-10"
      >
        <div class="flex flex-row items-center justify-center gap-4">
          <div class="flex flex-row items-center justify-center gap-2">
            <img src="@/assets/logo/settings.svg" alt="" width="20" />
            <p class="text-xl text-secondary">Filter</p>
          </div>
          <div class="px-5 border-s-2 border-s-secondary h-[40px]">
            <p class="py-2 text-secondary">Showing 1-{{ data.length }} of {{ total }} results</p>
          </div>
        </div>
        <div class="flex flex-row items-center pe-20">
          <p class="text-base text-secondary me-4">Show</p>
          <p class="text-base text-thirdary me-6">{{ total }}</p>
          <p class="text-base text-secondary me-4">Sort by</p>
          <p class="text-base text-thirdary me-6">Default</p>
        </div>
      </section>
      <!-- Product Section -->
      <section id="product" class="w-full px-10 py-14">
        <!-- Product Grid -->
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
        <div v-for="item in data" :key="item.id">
          <ProductComponent
            :id="item.id"
            :title="item.title"
            :tag="item.tag"
            :price="item.price"
            :image="item.image"
          />
        </div>
          <!-- Tambahkan lebih banyak produk sesuai kebutuhan -->
        </div>

        <!-- Pagination Section -->
        <div class="flex justify-center mt-20">
          <ul class="inline-flex space-x-6">
            <li>
              <button class="px-4 py-2 text-white bg-secondary">1</button>
            </li>
            <li>
              <button
                class="px-4 py-2 text-white bg-[#E5D097] hover:bg-secondary"
              >
                2
              </button>
            </li>
            <li>
              <button
                class="px-4 py-2 text-white bg-[#E5D097] hover:bg-secondary"
              >
                3
              </button>
            </li>
            <li>
              <button
                class="px-4 py-2 text-white bg-[#E5D097] hover:bg-secondary"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </section>
</template>
