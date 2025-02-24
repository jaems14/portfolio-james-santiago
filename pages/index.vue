<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-32 bg-pixel-black dark:bg-pixel-white relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-pixel-grid opacity-5"></div>
      <div class="absolute inset-0 bg-pixel-dots opacity-10"></div>
      
      <!-- Animated pixel corners -->
      <div class="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-pixel-primary animate-pixel-float"></div>
      <div class="absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 border-pixel-primary animate-pixel-float" style="animation-delay: 0.5s;"></div>
      <div class="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-pixel-primary animate-pixel-float" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-pixel-primary animate-pixel-float" style="animation-delay: 1.5s;"></div>

      <!-- Floating pixels -->
      <div class="absolute left-1/4 top-1/4 w-4 h-4 bg-pixel-primary animate-pixel-float opacity-50" style="animation-delay: 0.2s;"></div>
      <div class="absolute right-1/4 top-1/3 w-4 h-4 bg-pixel-secondary animate-pixel-float opacity-50" style="animation-delay: 0.7s;"></div>
      <div class="absolute left-1/3 bottom-1/4 w-4 h-4 bg-pixel-accent animate-pixel-float opacity-50" style="animation-delay: 1.2s;"></div>
      
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Profile Image -->
          <div class="relative w-32 h-32 mx-auto mb-8">
            <div class="absolute inset-0 border-4 border-pixel-primary rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
              <img src="/images/profile.jpg" 
                   alt="James Emmanuel Santiago"
                   class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300">
              <!-- Scanline effect -->
              <div class="absolute inset-0 bg-scanline pointer-events-none"></div>
            </div>
            <!-- Decorative corners -->
            <div class="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-pixel-secondary"></div>
            <div class="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-pixel-secondary"></div>
            <div class="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-pixel-secondary"></div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-pixel-secondary"></div>
          </div>

          <div class="relative">
            <!-- Text glitch effect container -->
            <div class="relative inline-block">
              <h1 class="text-3xl md:text-4xl font-pixel text-pixel-white dark:text-pixel-black mb-6 animate-pixel-float relative z-10">
                James Emmanuel Santiago
                <!-- Text shadow layers for glitch effect -->
                <span class="absolute inset-0 text-pixel-primary opacity-50 hover:translate-x-1" style="clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);"></span>
                <span class="absolute inset-0 text-pixel-secondary opacity-50 hover:-translate-x-1" style="clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);"></span>
              </h1>
            </div>

            <h2 class="text-xl md:text-2xl font-pixel text-pixel-primary dark:text-pixel-primary mb-8 animate-pixel-bounce">
              <span class="inline-block">PHP</span>
              <span class="inline-block mx-2">•</span>
              <span class="inline-block">Developer</span>
            </h2>


            <div class="flex justify-center gap-4">
              <a href="#contact" 
                 class="inline-block font-pixel text-sm bg-pixel-primary hover:bg-pixel-dark-primary text-pixel-white px-8 py-3 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <span class="inline-block animate-pixel-bounce">Press Start</span>
              </a>
              <a href="#projects" 
                 class="inline-block font-pixel text-sm border-4 border-pixel-primary text-pixel-primary hover:bg-pixel-primary hover:text-pixel-white px-8 py-3 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <span class="inline-block">View Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-pixel-white dark:bg-pixel-black relative">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-pixel text-center text-pixel-black dark:text-pixel-white mb-16">
          About Me
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Profile Image -->
          <div class="relative">
            <!-- Decorative corners -->
            <div class="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-primary"></div>
            <div class="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-primary"></div>
            <div class="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-primary"></div>
            <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-primary"></div>
            
            <div class="relative overflow-hidden border-4 border-pixel-primary bg-pixel-black dark:bg-pixel-white shadow-pixel">
              <img src="/images/profile.jpg" 
                   alt="James Emmanuel Santiago"
                   class="w-full aspect-square object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300">
              <!-- Scanline effect -->
              <div class="absolute inset-0 bg-scanline pointer-events-none"></div>
            </div>
          </div>

          <div class="space-y-6 bg-pixel-black dark:bg-pixel-white p-8 shadow-pixel">
            <p class="font-sans text-pixel-white dark:text-pixel-black leading-relaxed">
                A highly skilled and experienced Senior PHP Developer with over five years of professional experience in designing, developing, and maintaining robust web applications and systems. 
                Proficient in a wide range oftechnologies and frameworks, with a proven track record of delivering high-quality, efficient, and scalable solutions. 
                Adept at collaborating with cross-functional teams, optimizing code and databases, andproviding technical support and training to clients. 
                Strong problem-solving abilities, attention to detail, and a commitment to continuous learning and improvement.
            </p>
            <p class="font-sans text-pixel-white dark:text-pixel-black leading-relaxed">
                I specialize in creating efficient, maintainable code and implementing best practices in software development. 
                My focus is on delivering high-quality solutions that drive business growth and user satisfaction.
            </p>
            <div class="grid grid-cols-2 gap-6 pt-6">
              <div v-for="stat in stats" :key="stat.label" 
                   class="bg-pixel-white dark:bg-pixel-black p-6 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div class="text-2xl font-pixel text-pixel-primary dark:text-pixel-primary">
                  {{ stat.value }}
                </div>
                <div class="font-sans text-pixel-black dark:text-pixel-white mt-2">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-pixel-black dark:bg-pixel-white relative">
      <div class="absolute inset-0 bg-pixel-grid opacity-10"></div>
      <div class="container mx-auto px-4 relative">
        <h2 class="text-2xl md:text-3xl font-pixel text-center text-pixel-white dark:text-pixel-black mb-16">
          Technical Skills
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="category in skillCategories" :key="category.name" 
               class="bg-pixel-white dark:bg-pixel-black p-6 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mb-6">
              {{ category.name }}
            </h3>
            <div class="space-y-4">
              <div v-for="skill in category.skills" :key="skill.name" 
                   class="space-y-2">
                <div class="flex justify-between text-sm font-sans">
                  <span class="text-pixel-black dark:text-pixel-white">{{ skill.name }}</span>
                  <span class="text-pixel-primary">{{ skill.level }}%</span>
                </div>
                <div class="h-4 bg-pixel-black dark:bg-pixel-white border-2 border-pixel-primary overflow-hidden">
                  <div class="h-full bg-pixel-primary transition-all duration-1000"
                       :style="{ width: `${skill.level}%` }">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section id="projects" class="py-20 bg-pixel-white dark:bg-pixel-black">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-16">
          <h2 class="text-2xl md:text-3xl font-pixel text-pixel-black dark:text-pixel-white">
            Featured Projects
          </h2>
          <NuxtLink to="/projects" 
                    class="inline-flex items-center px-4 py-2 font-pixel text-sm border-4 border-pixel-primary text-pixel-primary hover:bg-pixel-primary hover:text-pixel-white transition-colors shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            View All
            <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
          </NuxtLink>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- One project from each category -->
          <div v-for="project in [
            projects.find(p => p.category === 'government'),
            projects.find(p => p.category === 'private'),
            projects.find(p => p.category === 'personal')
          ]" 
               :key="project.name" 
               class="bg-pixel-black dark:bg-pixel-white shadow-pixel group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <!-- Category Badge -->
            <div class="relative top-4 right-4 px-3 py-1 font-pixel text-xs w-20 bg-pixel-primary text-pixel-white rounded-full z-10">
              {{ project.category.charAt(0).toUpperCase() + project.category.slice(1) }}
            </div>
            
            <div class="relative overflow-hidden border-b-4 border-pixel-primary">
              <img :src="project.image" 
                   :alt="project.name" 
                   class="w-full h-48 object-cover">
              <div class="relative bottom-0 left-0 right-0 h-12 bg-pixel-black/80 dark:bg-pixel-white/80 backdrop-blur-sm flex items-center justify-center">
                <span class="font-pixel text-sm text-pixel-white dark:text-pixel-black">{{ project.name }}</span>
              </div>
            </div>
            <div class="p-6">
              <p class="font-sans text-pixel-white dark:text-pixel-black mb-4 line-clamp-2 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                      class="px-3 py-1 text-xs font-pixel bg-pixel-primary text-pixel-white rounded">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3"
                      class="px-3 py-1 text-xs font-pixel bg-pixel-secondary text-pixel-white rounded">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              <NuxtLink :to="'/projects'" 
                        class="inline-flex items-center font-pixel text-sm text-pixel-primary hover:text-pixel-secondary">
                View Details
                <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-pixel-black dark:bg-pixel-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-pixel text-center text-pixel-white dark:text-pixel-black mb-16">
          Get In Touch
        </h2>
        <div class="max-w-3xl mx-auto">
          <!-- Direct Contact -->
          <div class="text-center mb-12">
            <a href="mailto:santiagojamesemmanuel@gmail.com" 
               class="inline-flex items-center px-6 py-3 font-pixel text-sm bg-pixel-primary text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <Icon name="ph:envelope-bold" class="w-5 h-5 mr-2" />
              santiagojamesemmanuel@gmail.com
            </a>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6 bg-pixel-white dark:bg-pixel-black p-8 shadow-pixel">
            <div>
              <label for="name" class="block text-sm font-pixel text-pixel-black dark:text-pixel-white mb-2">
                Name
              </label>
              <input type="text" id="name" v-model="form.name" required
                     class="w-full px-4 py-2 font-sans bg-pixel-black dark:bg-pixel-white text-pixel-white dark:text-pixel-black border-4 border-pixel-primary focus:outline-none focus:border-pixel-secondary">
            </div>
            <div>
              <label for="email" class="block text-sm font-pixel text-pixel-black dark:text-pixel-white mb-2">
                Email
              </label>
              <input type="email" id="email" v-model="form.email" required
                     class="w-full px-4 py-2 font-sans bg-pixel-black dark:bg-pixel-white text-pixel-white dark:text-pixel-black border-4 border-pixel-primary focus:outline-none focus:border-pixel-secondary">
            </div>
            <div>
              <label for="message" class="block text-sm font-pixel text-pixel-black dark:text-pixel-white mb-2">
                Message
              </label>
              <textarea id="message" v-model="form.message" required rows="5"
                        class="w-full px-4 py-2 font-sans bg-pixel-black dark:bg-pixel-white text-pixel-white dark:text-pixel-black border-4 border-pixel-primary focus:outline-none focus:border-pixel-secondary"></textarea>
            </div>
            <button type="submit" 
                    @click="sendEmail"
                    class="w-full bg-pixel-primary hover:bg-pixel-dark-primary text-pixel-white px-6 py-3 font-pixel text-sm shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Technologies', value: '15+' }
]

const skillCategories = [
  {
    name: 'Backend Development',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 90 },
      { name: 'Yii2', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'API Development', level: 90 }
    ]
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'jQuery', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    name: 'Other Technologies',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'AWS', level: 75 },
      { name: 'Azure', level: 70 },
    ]
  }
]

const projects = [
  {
    name: 'Business Permit Management System',
    category: 'government',
    description: 'Led the development of a government licensing system that improved processing time by 60%. Implemented secure payment integration and automated workflow systems.',
    image: '/images/project1.png',
    technologies: ['PHP', 'Yii2', 'Bootstrap', 'MySQL'],
    demo: null,
    github: null
  },
  {
    name: 'Enterprise Resource Planning System',
    category: 'private',
    description: 'Developed key modules for inventory management and financial reporting. Improved system performance by 40% and reduced manual data entry time by 70%.',
    image: '/images/project2.png',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    demo: null,
    github: null
  },
  {
    name: 'Memoria',
    category: 'personal',
    description: 'Digital space for your memories',
    image: '/images/project3.png',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    demo: null,
    github: null
  }
]

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sendEmail = () => {
  const subject = `Portfolio Contact from ${form.name}`
  const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  const mailtoLink = `mailto:santiagojamesemmanuel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
}

const handleSubmit = () => {
  sendEmail()
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.bg-scanline {
  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
  animation: scanline 10s linear infinite;
}

@keyframes scanline {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
}
</style> 