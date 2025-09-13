<script setup lang="ts">
import LocationButton from '@/components/ui/LocationButton.vue'

const contactBlocks = [
  {
    title: 'For all questions',
    lines: [
      { text: '+7 (920) 278—00—68' },
      { text: 'qtim@agency.com' }
    ],
    showButton: false
  },
  {
    title: 'Office in Russia',
    lines: [{ text: '139 Ruben Station Lake<br />Drew, NM 52678' }],
    showButton: true
  },
  {
    title: 'Office in Dubai',
    lines: [{ text: '139 Ruben Station Lake<br />Drew, NM 52678' }],
    showButton: true
  }
]

const socialLinks = {
  left: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Telegram', href: '#' }
  ],
  right: [
    { name: 'Behance', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ]
}
</script>

<template>
  <div>
    <footer class="relative h-[900px] bg-lavender flex flex-col justify-between pb-10 px-28 overflow-hidden">
      <div class="flex flex-col justify-between h-full">
        <div class="flex justify-between">
          <!-- Левая часть с заголовком -->
          <div class="mt-[140px]">
            <p class="text-sm mb-6">Is there a project?</p>
            <h2 class="text-[112px] font-normal leading-[100%]">
              <span class="decoration-1 underline underline-offset-[18px]">Let’s work</span> <br />
              <span class="decoration-1 underline underline-offset-[18px]">to</span>
              <span>g</span>
              <span class="decoration-1 underline underline-offset-[18px]">ether</span>
            </h2>
          </div>

          <!-- Правая часть с контактами -->
          <div class="w-[35%] flex flex-col items-start gap-12 mt-[215px]">
            <div v-for="(block, index) in contactBlocks" :key="index">
              <p class="mb-2">{{ block.title }}</p>
              <p v-for="(line, lineIndex) in block.lines" :key="lineIndex" v-html="line.text" />
              <LocationButton v-if="block.showButton" class="mt-3"/>
            </div>
          </div>
        </div>
      </div>

      <div class="relative flex justify-between items-end">
        <!-- Соцсети слева -->
        <div class="flex gap-6">
          <a
            v-for="link in socialLinks.left"
            :key="link.name"
            :href="link.href"
            class="underline underline-offset-4"
          >
            {{ link.name }}
          </a>
        </div>
      
        <button class="absolute left-1/2 -translate-x-1/2 rounded-full -bottom-[450px] size-96 bg-black text-white text-[32px] flex items-center justify-center -translate-y-1/2 pb-32">
          <span>Go</span>
        </button>

        <!-- Соцсети справа -->
        <div class="flex gap-6">
          <a
            v-for="link in socialLinks.right"
            :key="link.name"
            :href="link.href"
            class="underline underline-offset-4"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>