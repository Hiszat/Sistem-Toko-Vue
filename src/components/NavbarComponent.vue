<script setup>
  import { RouterLink} from 'vue-router'
</script>

<template>
  <nav
      class="z-50 flex items-center justify-between w-full px-10 py-3 bg-white shadow-md"
    >
      <!-- Left Section -->
      <div class="flex items-center justify-start w-1/2 gap-6">
        <div class="flex items-center justify-center">
          <img src="@/assets/logo/Logo.svg" alt="" class='w-full h-auto m-1'>
          <h1 class="font-normal text-[#642C0C] font-playfair text-2xl">
            Furniture
          </h1>
        </div>
        <RouterLink to="/" class="text-base font-extrabold font-playfair text-primary hover:text-primary">Home</RouterLink>
        <RouterLink to="/about" class="font-extrabold font-playfair text-[#E5D097] hover:text-primary text-base">About</RouterLink>
        <RouterLink to="/products" class="font-extrabold font-playfair text-[#E5D097] hover:text-primary text-base">Product</RouterLink>
        <RouterLink to="/contact" class="font-extrabold font-playfair text-[#E5D097] hover:text-primary text-base">Contact</RouterLink>
      </div>
      <!-- Right Section -->
      <div class="flex items-center justify-end w-1/2 gap-6">
        <a href=""><img src="@/assets/logo/Search.svg" alt="" /></a>
        <a href=""><img src="@/assets/logo/Heart.svg" alt="" /></a>
        <a href=""><img src="@/assets/logo/Cart.svg" alt="" /></a>
        <button
          class="flex items-center justify-center gap-2 px-4 py-2 bg-primary"
        >
          <img src="@/assets/logo/user 1.svg" alt="" />
          <span class="text-[#FFFFFF]">Sign In</span>
        </button>
      </div>
    </nav>
</template>
