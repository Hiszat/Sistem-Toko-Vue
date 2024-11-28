<template>
  <section class="px-12 py-5 bg-secondary">
        <div class="flex flex-row items-center flex-nowrap">
          <div class="flex flex-row items-center flex-nowrap">
            <a href="Home" class="font-light text-white pe-5">Home</a>
            <img src="@/assets/logo/Arrow2.svg" alt="" width="6" class="" />
          </div>
          <div class="flex flex-row items-center m-2 flex-nowrap">
            <a href="Product" class="font-light text-white pe-5">Product</a>
            <img src="@/assets/logo/Arrow2.svg" alt="" width="6" />
          </div>
          <div
            class="flex flex-row items-center h-10 m-2 flex-nowrap border-s-[1.5px] border-s-white"
          >
            <a href="Sofa" class="text-white ps-5">{{ $route.params.id }}</a>
          </div>
        </div>
      </section>
      <section class="flex flex-row w-full px-12 py-10 flex-nowrap">
        <div class="flex flex-col w-1/2">
          <img
            src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
            alt=""
            class="object-cover w-full h-[350px]"
          />
          <div class="flex flex-row p-1 mt-2 flex-nowrap">
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
          </div>
        </div>
        <div class="w-1/2 ps-16">
          <h3 class="font-playfair text-[42px] text-secondary">Sofa</h3>
          <p class="mb-4 text-2xl font-semibold text-secondary">
            Rp. 1.250.000,00
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
            This compact sofa fits in small areas and is perfect for family
            parties and continuous TV viewing. It has a neat design and is easy
            to lift when you want to refurbish, clean or move.
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
            <button
              class="text-2xl text-secondary text-center w-[20px] h-[20px] pb-2"
            >
              -
            </button>
            <input
              type="text"
              name=""
              id=""
              value="1"
              class="w-10 text-2xl font-normal text-center text-secondary"
            />
            <button
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
      <section
        class="mx-12 border-t-[1.25px] border-t-primary flex flex-col items-center justify-center"
      >
        <h3
          class="mt-16 text-5xl text-center mb-14 font-playfair text-secondary"
        >
          Recent Product
        </h3>
        <div
          class="grid w-full grid-cols-1 gap-6 md:px-20 sm:grid-cols-2 md:grid-cols-3"
        >
          <!-- Item -->
          <div class="rounded-md shadow-md">
            <img
              src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
              alt=""
              class="object-cover w-full h-48 aspect-square rounded-t-md"
            />
            <div class="p-4">
              <h5 class="text-xl font-semibold text-secondary">
                Modern Minimalist Sofa
              </h5>
              <p class="text-xs font-normal text-thirdary">
                Elegan, Minimalis, Modern
              </p>
              <p class="text-lg font-semibold text-secondary">
                Rp. 12.000.000,00-
              </p>
            </div>
          </div>
          <!-- Duplicate the items for more products -->
          <div class="rounded-md shadow-md">
            <img
              src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
              alt=""
              class="object-cover w-full h-48 aspect-square rounded-t-md"
            />
            <div class="p-4">
              <h5 class="text-xl font-semibold text-secondary">
                Modern Minimalist Sofa
              </h5>
              <p class="text-xs font-normal text-thirdary">
                Elegan, Minimalis, Modern
              </p>
              <p class="text-lg font-semibold text-secondary">
                Rp. 12.000.000,00-
              </p>
            </div>
          </div>
          <div class="rounded-md shadow-md">
            <img
              src="@/assets/image/spacejoy-c0JoR_-2x3E-unsplash 1.png"
              alt=""
              class="object-cover w-full h-48 aspect-square rounded-t-md"
            />
            <div class="p-4">
              <h5 class="text-xl font-semibold text-secondary">
                Modern Minimalist Sofa
              </h5>
              <p class="text-xs font-normal text-thirdary">
                Elegan, Minimalis, Modern
              </p>
              <p class="text-lg font-semibold text-secondary">
                Rp. 12.000.000,00-
              </p>
            </div>
          </div>
          <!-- Tambahkan lebih banyak produk sesuai kebutuhan -->
        </div>

        <button
          class="px-4 py-3 mt-16 text-xl font-extrabold text-white bg-primary font-playfair"
        >
          Show More
        </button>
      </section>
      <section id="faq" class="flex flex-col items-center justify-center py-24">
        <div class="mb-20">
          <h4
            class="mb-5 text-5xl font-medium text-center text-secondary font-playfair"
          >
            Frequently Asked Question
          </h4>
          <p class="font-normal text-center text-thirdary">
            Find answers to common questions about furniture care, delivery, and
            return policies
          </p>
        </div>
        <div class="flex flex-col w-full mb-20 px-72">
          <div
            class="flex flex-col py-4 border-t-[1px] border-b-[1px] border-t-thirdary border-b-thirdary"
          >
            <!--  Content Items -->
            <div class="flex flex-row items-center justify-between mb-3">
              <h6 class="text-lg font-bold text-secondary">
                How do i care for my furniture
              </h6>
              <img
                src="@/assets/logo/Vector.svg"
                alt=""
                class="px-5 rotate-90 cursor-pointer"
              />
            </div>
            <p class="text-base font-normal text-thirdary">
              Proper care for your furniture includes regular cleaning and
              avoiding direct sunlight.
            </p>
          </div>
          <div class="flex flex-col py-4 border-b-[1px] border-b-thirdary">
            <!--  Content Items -->
            <div class="flex flex-row items-center justify-between mb-3">
              <h6 class="text-lg font-bold text-secondary">
                What is your delivery process?
              </h6>
              <img
                src="@/assets/logo/Vector.svg"
                alt=""
                class="px-5 rotate-90 cursor-pointer"
              />
            </div>
            <p class="text-base font-normal text-thirdary">
              We offer fast and reliable delivery services to ensure your
              furniture arrives safely.
            </p>
          </div>
          <div class="flex flex-col py-4 border-b-[1px] border-b-thirdary">
            <!--  Content Items -->
            <div class="flex flex-row items-center justify-between mb-3">
              <h6 class="text-lg font-bold text-secondary">
                What is your returns policy?
              </h6>
              <img
                src="@/assets/logo/Vector.svg"
                alt=""
                class="px-5 rotate-90 cursor-pointer"
              />
            </div>
            <p class="text-base font-normal text-thirdary">
              If you're not satisfied with your purchase, we accept returns
              within 30 days.
            </p>
          </div>
          <div class="flex flex-col py-4 border-b-[1px] border-b-thirdary">
            <!--  Content Items -->
            <div class="flex flex-row items-center justify-between mb-3">
              <h6 class="text-lg font-bold text-secondary">
                Can I customize my furniture?
              </h6>
              <img
                src="@/assets/logo/Vector.svg"
                alt=""
                class="px-5 rotate-90 cursor-pointer"
              />
            </div>
            <p class="text-base font-normal text-thirdary">
              Yes, we offer customization options for select furniture pieces.
            </p>
          </div>
          <div class="flex flex-col py-4 border-b-[1px] border-b-thirdary">
            <!--  Content Items -->
            <div class="flex flex-row items-center justify-between mb-3">
              <h6 class="text-lg font-bold text-secondary">
                Do you offer warranty?
              </h6>
              <img
                src="@/assets/logo/Vector.svg"
                alt=""
                class="px-5 rotate-90 cursor-pointer"
              />
            </div>
            <p class="text-base font-normal text-thirdary">
              Yes, we provide a warranty for our furniture to ensure customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>
</template>
