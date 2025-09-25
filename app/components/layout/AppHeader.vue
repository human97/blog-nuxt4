<template>
  <header class="h-[120px] items-center px-10 flex justify-between items-center w-full">
      <NuxtLink to="/">
          <img 
              src="~/assets/images/logo.svg" 
              alt="QTIM Logo" 
              class="w-[84px] h-[25px]" 
          />
      </NuxtLink>
      <div class="text-xl flex justify-between items-center gap-20">
        <nav class="flex justify-between items-center gap-12">
          <NuxtLink to="/">
            Blog
          </NuxtLink>
          <NuxtLink to="/">
             About
          </NuxtLink>
        </nav>
        <div class="flex justify-between items-center gap-4">
          <button class="size-[52px] rounded-full border-2 flex justify-center items-center border-gray-soft">
            <img 
                src="~/assets/images/united_kingdom.svg" 
                alt="Language" 
                class="size-[24px]" 
            />
          </button>
          <button class="text-white w-[142px] h-[52px] rounded-3xl border-2 flex justify-center items-center bg-black-rich border-black-rich">
            Let’s work
          </button>
        </div>
      </div>
    </header>
</template>