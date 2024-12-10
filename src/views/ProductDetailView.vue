<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, watch} from 'vue';
import axios from 'axios';
import ProductComponent from '@/components/ProductComponent.vue';
import formatPrice from '@/utils/formatIDR';

const route = useRoute();
const product = ref(null); // Untuk menyimpan data produk tunggal
const recentProducts = ref([]); // Untuk menyimpan data produk terbaru
const count = ref(1);
// Fungsi untuk memuat data produk
const isLoading = ref(true);

// Update the loading state when the product is fetched
const fetchProduct = async (id) => {
  if (!id) return;
  isLoading.value = true;
  try {
    const response = await axios.get(`https://sistemtoko.com/public/demo/single/${id}`);
    const item = response.data;
    product.value = {
      id: item.product_id,
      name: item.product_name,
      category: item.varian_keyword_value || 'Elegan, Minimalis, Modern',
      price: item.product_price,
      description: item.product_description || 'No description available.',
      image: item.product_img ? `https://sistemtoko.com/img/user/demo/product/${item.product_img}` : '/default-image.jpg',
      thumbnails: item.thumbnails || []
    };
  } catch (error) {
    console.error('Error fetching product:', error);
  } finally {
    isLoading.value = false;
  }
};


// Fungsi untuk memuat produk terbaru
const fetchRecentProducts = async () => {
  try {
    const response = await axios.get('https://sistemtoko.com/public/demo/product');
    recentProducts.value = response.data.aaData.map(item => ({
      id: item.id,
      name: item.name,
      price: item.plain_price,
      tag: item.category || 'Elegan, Minimalis, Modern',
      image: item.photo || '/default-image.jpg' // Gambar default jika tidak ada
    }));
    console.log(recentProducts.value);
  } catch (error) {
    console.error('Error fetching recent products:', error);
  }
};

// Panggil fungsi saat komponen dimount
onMounted(() => {
  fetchProduct(route.params.id); // Jika ID tersedia, load produk
  // fetchProduct(route.params.id);
  fetchRecentProducts();
});

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchProduct(newId);
    count.value = 1;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});

</script>

<template>
  <div>
    <!-- Breadcrumb -->

    <section class="px-12 py-5 bg-secondary">
      <div class="flex flex-row items-center flex-nowrap">
        <div class="flex flex-row items-center flex-nowrap">
          <a href="Home" class="font-light text-white pe-5">Home</a>
          <img src="@/assets/logo/Arrow2.svg" alt="" width="6" class="" />
        </div>
        <div class="flex flex-row items-center m-2 flex-nowrap">
          <RouterLink
    :to='"/products"'
    class="font-light text-white pe-5"
  >
  Product
  </RouterLink>
          <!-- <a href="Product" class="font-light text-white pe-5">Product</a> -->
          <img src="@/assets/logo/Arrow2.svg" alt="" width="6" />
        </div>
        <div
          class="flex flex-row items-center h-10 m-2 flex-nowrap border-s-[1.5px] border-s-white"
        >
        <RouterLink
        :to="`/product/detail/${product?.id}`"
        class="text-white ps-5">

        {{ product?.name }}

        </RouterLink>

        </div>
      </div>
    </section>
    <!-- Product Details -->

    <section v-if="isLoading" class="flex items-center justify-center p-10">
      <p>Loading product...</p>
    </section>
    <section v-else class="flex flex-row w-full px-12 py-10 flex-nowrap">
        <div class="flex flex-col w-1/2">
          <img
            :src="product.image"
            alt=""
            class="object-cover w-full h-[350px]"
          />
            <!-- {{/*<div class="flex flex-row p-1 mt-2 flex-nowrap">
            <img
              src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
              alt=""
              class="object-cover w-1/3 h-[100px] me-2"
            />
            <img
              src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
              alt=""
              class="object-cover w-1/3 h-[100px] me-2"
            />
            <img
              src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
              alt=""
              class="object-cover w-1/3 h-[100px]"
            />
          </div> */}} -->
        </div>
        <div class="w-1/2 ps-16">
          <h3 class="font-playfair text-[42px] text-secondary">{{ product.name }}</h3>
          <p class="mb-4 text-2xl font-semibold text-secondary">
            {{ formatPrice(product.price) }}
          </p>
          <div class="flex flex-row items-start flex-nowrap">
            <div
              class="flex flex-row mb-5 flex-nowrap border-e-[1.25px] border-e-secondary pe-3 py-2 me-3"
            >
              <img src="@/assets/logo/Star 1.svg" alt="" width="20" />
              <img src="@/assets/logo/Star 1.svg" alt="" width="20" />
              <img src="@/assets/logo/Star 1.svg" alt="" width="20" />
              <img src="@/assets/logo/Star 1.svg" alt="" width="20" />
              <img src="@/assets/logo/Star 1.svg" alt="" width="20" />
            </div>
            <p class="py-2 text-sm text-[#E5D097]">5 Customer Review</p>
          </div>
          <p class="text-justify w-[392px] text-thirdary mb-4">
            {{ product.description }}
          </p>
          <p class="mb-2 text-sm font-normal text-secondary">Size</p>
          <div class="flex flex-row mb-8 flex-nowrap">
            <button
              class="w-8 h-8 text-[13px] text-white rounded-md bg-secondary me-4"
            >
              L
            </button>
            <button
              class="w-8 h-8 text-[13px] rounded-md text-secondary bg-thirdary me-4"
            >
              XL
            </button>
            <button
              class="w-8 h-8 text-[13px] rounded-md text-secondary bg-thirdary me-4"
            >
              XS
            </button>
          </div>
          <div
            class="flex flex-row border-2 mb-8 flex-nowrap border-secondary w-[119px] py-2 px-3 items-center justify-between"
          >
            <button @click="count--"
              class="text-2xl text-secondary text-center w-[20px] h-[20px] pb-2"
            >
              -
            </button>
            <input
              type="text"
              name=""
              id=""
              :value="count"
              class="w-10 text-2xl font-normal text-center text-secondary"
            />
            <button @click="count++"
              class="text-2xl text-secondary text-center w-[20px] h-[30px] pb-2"
            >
              +
            </button>
          </div>
          <div class="flex items-center mb-8">
            <button
              class="flex flex-row items-center px-4 py-3 text-xl font-extrabold text-white font-playfair flex-nowrap bg-primary"
            >
              <img src="@/assets/logo/Cart2.svg" alt="" class="me-4" />
              Add to cart
            </button>
            <button class="ms-6">
              <img src="@/assets/logo/Love.svg" alt="" />
            </button>
          </div>
          <div
            class="grid grid-cols-5 border-t-secondary border-t-[1px] w-full py-4"
          >
            <img
              src="@/assets/logo/shipping-fast 1.svg"
              alt=""
              class="self-center col-span-1"
            />
            <div class="col-span-3 ms-5">
              <p class="font-medium text-secondary">
                Shipping costs start from
              </p>
              <p class="text-secondary">Calculate now</p>
            </div>
            <button class="justify-self-end">
              <img src="@/assets/logo/Arrow-Second.svg" alt="" />
            </button>
          </div>
          <div
            class="grid grid-cols-5 border-t-secondary border-t-[1px] w-full py-4"
          >
            <img src="@/assets/logo/Ellipse 107.svg" alt="" class="self-center" />
            <div class="col-span-3 ms-5">
              <p class="font-medium text-secondary">
                Shipping costs start from
              </p>
              <p class="text-secondary">
                Stock available for Online purchase 25 available
              </p>
            </div>
          </div>
        </div>
    </section>
    <!-- Recent Products -->
    <section class="mx-12 border-t-[1.25px] border-t-primary py-10" v-if="recentProducts.length">
      <h3 class="text-5xl text-center mb-14 font-playfair text-secondary">
        Recent Products
      </h3>
      <div class="grid grid-cols-1 gap-6 md:px-20 sm:grid-cols-2 md:grid-cols-3">
        <div v-for="item in recentProducts" :key="item.id">
            <ProductComponent
            :id="item.id"
            :title="item.name"
            :tag="item.tag"
            :price="item.price"
            :image="item.image"
            />
        </div>
      </div>
    </section>
  </div>
</template>
