<script setup>
import ProdSection from '@/section/ProdSection.vue';


</script>

<template>
  <main>
      <!-- Hero Section -->
      <section id="header" class="w-full h-[100vh] relative">
        <div class="w-full -z-10">
          <img
            src="@/assets/image/spacejoy-ctyssSFmXmU-unsplash 1.png"
            alt=""
            class="object-cover w-full h-[100vh]"
          />
        </div>
        <div
          class="absolute top-0 left-0 h-full py-4 bg-gradient-to-r from-white via-[#f3f3f3aa] to-[#f3f3f311] w-full"
        >
          <div class="flex flex-col w-1/2 mx-10 my-20">
            <div class="flex flex-col items-start justify-start w-[492px]">
              <h1
                class="text-[52px] font-playfair text-secondary leading-[60px]"
              >
                Discover the
                <span class="text-primary">Perfect Furniture</span> for Your
                Home
              </h1>
              <p class="mt-3 text-primary">
                Transform your living space with our stylish and modern
                furniture collections.
              </p>
            </div>
            <button
              class="w-48 px-10 py-2 mt-10 font-extrabold text-center text-white bg-primary font-playfair"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <!-- Product Section -->
      <ProdSection/>
      <!-- IDK Section -->
      <section id="desc" class="relative w-full h-[90vh]">
        <img
          src="@/assets/image/spacejoy-k2pumSRYYss-unsplash 1.png"
          alt=""
          class="object-cover w-full h-full -z-10"
        />
        <div
          class="absolute w-1/2 h-full bg-[#642C0CBF] top-0 left-0 ps-10 pe-5 pt-14"
        >
          <p class="mb-5 text-base font-light text-thirdary">Discover</p>
          <h3 class="mb-5 text-4xl font-medium text-white font-playfair w-96">
            Experience Modern Furniture Like Never Before
          </h3>
          <p class="text-thirdary">
            At our online store, we offer a wide range of modern furniture that
            combines quality craftsmanship, innovative design, and sustainable
            materials. Whether you're looking for a statement piece or a
            complete home makeover, our collection has something for every style
            and budget.
          </p>
          <div class="flex flex-row mt-5 flex-nowrap">
            <div class="w-1/2">
              <h5 class="text-lg font-semibold text-white font-playfair">
                Quality
              </h5>
              <p class="text-sm font-normal text-thirdary">
                Experience the finest craftsmanship and attention to detail in
                every piece.
              </p>
            </div>
            <div class="w-1/2">
              <h5 class="text-lg font-semibold text-white font-playfair">
                Design
              </h5>
              <p class="text-sm font-normal text-thirdary">
                Discover modern furniture designs that are both functional and
                aesthetically pleasing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="stats" class="relative">
        <img src="@/assets/image/Line-BG.svg" alt="" class="h-screen -z-10" />
        <div
          class="absolute top-0 left-0 flex flex-row items-center justify-end h-screen px-10 flex-nowrap"
        >
          <div class="w-1/2">
            <div class="w-[565px] h-[460px]">
              <img
                src="@/assets/image/spacejoy-x3mSC1WnWhc-unsplash 1.png"
                alt=""
                class="object-cover w-full h-full rounded-xl aspect-square"
              />
            </div>
          </div>
          <div class="w-1/2 pe-6">
            <p class="mb-5 text-base text-thirdary">Quality</p>
            <h3 class="mb-5 text-5xl font-medium font-playfair text-secondary">
              Experience the Best in Modern Furniture
            </h3>
            <p class="mb-5 text-base text-thirdary">
              Discover our impressive growth, exceptional customer satisfaction,
              and wide range of high-quality products.
            </p>
            <div class="flex flex-row mb-6 flex-nowrap">
              <div class="w-1/2">
                <h4
                  class="mb-3 text-6xl font-semibold font-playfair text-secondary"
                >
                  50%
                </h4>
                <p class="text-sm text-thirdary">
                  Increase in Customer Satisfaction
                </p>
              </div>
              <div class="w-1/2">
                <h4
                  class="mb-3 text-6xl font-semibold font-playfair text-secondary"
                >
                  50%
                </h4>
                <p class="text-sm text-thirdary">Growth in Product Selection</p>
              </div>
            </div>
            <div class="flex flex-row flex-nowrap">
              <button
                class="px-4 py-3 text-base font-extrabold border-2 border-secondary font-opsans text-secondary"
              >
                Learn More
              </button>
              <button
                class="flex flex-row items-center gap-2 px-4 py-3 text-base font-extrabold border-secondary font-opsans text-secondary flex-nowrap"
              >
                Sign Up
                <img src="@/assets/logo/Vector.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" class="relative w-full h-[65vh]">
        <img
          src="@/assets/image/spacejoy-ctyssSFmXmU-unsplash 1.png"
          alt=""
          class="object-cover w-full h-full -z-10"
        />
        <div
          class="w-1/2 h-full bg-[#642C0CBF] absolute top-0 left-0 px-10 pt-16"
        >
          <h3 class="mb-5 text-5xl font-medium text-white font-opsans">
            Discover Our Latest Furniture Collections
          </h3>
          <p class="mb-12 text-base font-light text-thirdary">
            Explore our new arrivals and seasonal collections to find the
            perfect furniture for your home.
          </p>
          <div class="flex flex-row gap-4 flex-nowrap">
            <button
              class="px-4 py-3 text-sm font-semibold text-white bg-primary font-playfair"
            >
              Shop Now
            </button>
            <button
              class="px-4 py-3 text-sm font-semibold text-white border-2 border-primary font-playfair"
            >
              Browse
            </button>
          </div>
        </div>
      </section>
      <section id="customer" class="w-full h-screen px-10 pt-10">
        <h2 class="mb-3 text-6xl font-opsans text-secondary">
          Happy Customers
        </h2>
        <p class="text-lg mb-14 text-thirdary">
          Hear what our customers have to say about us
        </p>
        <div class="flex flex-row items-center justify-center px-5 flex-nowrap">
          <!-- Flex Cust Card -->
          <div class="flex flex-col w-1/3 p-5">
            <div class="flex flex-row mb-5 flex-nowrap">
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
            </div>
            <h5 class="mb-5 text-lg font-bold text-secondary">
              Our experience with this company has been outstanding.
            </h5>
            <img
              src="@/assets/image/Rectangle.png"
              alt=""
              class="object-cover w-16 h-16 mb-2 rounded-full aspect-square"
            />
            <p class="text-lg font-medium text-secondary">John Doe</p>
            <p class="text-base font-light text-thirdary">CEO, XYZ Company</p>
          </div>
          <div class="flex flex-col w-1/3 p-5">
            <div class="flex flex-row mb-5 flex-nowrap">
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
            </div>
            <h5 class="mb-5 text-lg font-bold text-secondary">
              Their products are top-notch and their customer service is
              exceptional.
            </h5>
            <img
              src="@/assets/image/Rectangle.png"
              alt=""
              class="object-cover w-16 h-16 mb-2 rounded-full aspect-square"
            />
            <p class="text-lg font-medium text-secondary">John Doe</p>
            <p class="text-base font-light text-thirdary">CEO, XYZ Company</p>
          </div>
          <div class="flex flex-col w-1/3 p-5">
            <div class="flex flex-row mb-5 flex-nowrap">
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
              <img src="@/assets/logo/Star 1.svg" alt="" />
            </div>
            <h5 class="mb-5 text-lg font-bold text-secondary">
              I highly recommend this company for all your furniture needs.
            </h5>
            <img
              src="@/assets/image/Rectangle.png"
              alt=""
              class="object-cover w-16 h-16 mb-2 rounded-full aspect-square"
            />
            <p class="text-lg font-medium text-secondary">John Doe</p>
            <p class="text-base font-light text-thirdary">CEO, XYZ Company</p>
          </div>
        </div>
      </section>
      <section
        id="faq"
        class="bg-[#f8f8f8] flex justify-center items-center flex-col py-24"
      >
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
        <div class="flex flex-col items-center justify-center">
          <h6
            class="mb-3 text-4xl font-medium text-center text-secondary font-playfair"
          >
            Still have questions ?
          </h6>
          <p class="mb-6 text-thirdary">
            Contact our support team for assistance.
          </p>
          <a
            href="#"
            class="px-6 py-3 text-xs font-extrabold text-white font-playfair bg-primary"
            >Contact</a
          >
        </div>
      </section>
      <section class="w-full px-9 py-28">
        <div class="flex flex-row justify-between px-1 mb-10 flex-nowrap">
          <div class="w-3/4">
            <p class="mb-3 text-lg font-normal text-secondary">Solutions</p>
            <h3 class="mb-3 text-5xl font-medium font-playfair text-secondary">
              Get in Touch
            </h3>
            <p class="text-lg font-normal text-secondary">
              Have a question or need assistance? Feel free to reach out to us!
            </p>
          </div>
          <div class="w-1/4">
            <p class="text-xl font-semibold text-secondary">Email</p>
            <p class="text-lg font-normal text-secondary">
              contact@furniture.com
            </p>
            <p class="text-xl font-semibold text-secondary">Phone</p>
            <p class="text-lg font-normal text-secondary">+62 00225 555</p>
            <p class="text-xl font-semibold text-secondary">Office</p>
            <p class="text-lg font-normal text-secondary">
              Jl. Gatot Subroto, Bandung
            </p>
          </div>
        </div>
        <div class="relative w-full h-80">
          <iframe
            src="https://maps.google.com/maps?q=bandung&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            class="absolute inset-0 w-full h-full border-none"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
</template>
