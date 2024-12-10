<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id: {
    type: [String, Number],
    required: true,
  },
})

</script>
<template>
  <RouterLink
    :to="`/product/detail/${id}`"
    class="w-[290px] h-[290px] shadow-md rounded-md mr-2 flex-shrink-0 block"
  >
    <div class="w-full">
      <img
        :src="image"
        alt=""
        class="object-cover w-full h-48 aspect-square rounded-t-md"
      />
    </div>
    <div class="w-full p-3">
      <h5 class="text-xl font-semibold text-secondary">
        {{ title }}
      </h5>
      <p class="text-xs font-normal text-thirdary">
        {{ tag }}
      </p>
      <p class="text-lg font-semibold text-secondary">
        Rp. {{ price }}-
      </p>
    </div>
  </RouterLink>
</template>
