<template>
  <div class="min-h-screen bg-pixel-white dark:bg-pixel-black bg-pixel-grid transition-colors duration-300">
    <header class="fixed w-full bg-pixel-white/90 dark:bg-pixel-black/90 backdrop-blur-sm border-b-4 border-pixel-black dark:border-pixel-white z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-pixel text-pixel-primary dark:text-pixel-primary hover:scale-110 transition-transform">
            JS
          </NuxtLink>
          
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink v-for="item in navigationItems" 
                      :key="item.path" 
                      :to="item.path"
                      class="font-pixel text-sm text-pixel-black dark:text-pixel-white hover:text-pixel-primary dark:hover:text-pixel-primary transition-colors">
              {{ item.name }}
            </NuxtLink>
            
            <!-- Theme Toggle -->
            <button @click="toggleColorMode" 
                    class="p-2 text-pixel-black dark:text-pixel-white hover:text-pixel-primary dark:hover:text-pixel-primary animate-pixel-spin">
              <Icon :name="colorMode.value === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'" class="w-5 h-5" />
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="isMenuOpen = !isMenuOpen" 
                  class="md:hidden p-2 text-pixel-black dark:text-pixel-white">
            <Icon :name="isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" 
             class="md:hidden absolute top-full left-0 right-0 bg-pixel-white/95 dark:bg-pixel-black/95 backdrop-blur-sm border-b-4 border-pixel-black dark:border-pixel-white">
          <div class="container mx-auto px-4 py-4">
            <div class="flex flex-col space-y-4">
              <NuxtLink v-for="item in navigationItems" 
                        :key="item.path" 
                        :to="item.path"
                        class="font-pixel text-sm text-pixel-black dark:text-pixel-white hover:text-pixel-primary dark:hover:text-pixel-primary transition-colors"
                        @click="isMenuOpen = false">
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-16 min-h-screen">
      <NuxtPage />
    </main>

    <footer class="bg-pixel-black dark:bg-pixel-white py-8 border-t-4 border-pixel-primary">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="font-pixel text-sm text-pixel-white dark:text-pixel-black">
            © {{ new Date().getFullYear() }} James Emmanuel Santiago
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a v-for="social in socialLinks" 
               :key="social.name"
               :href="social.url" 
               target="_blank"
               class="text-pixel-white dark:text-pixel-black hover:text-pixel-primary dark:hover:text-pixel-primary transition-transform hover:scale-110 animate-pixel-bounce">
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isMenuOpen = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const navigationItems = [
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/#contact' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/jaems14' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/james-emmanuel-santiago/' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:santiagojamesemmanuel@gmail.com' },
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'VT323', monospace;
  image-rendering: pixelated;
}

/* Pixel art border style */
.pixel-border {
  position: relative;
  border: 4px solid;
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
}
</style>
