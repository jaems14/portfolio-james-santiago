<template>
  <div class="py-20 bg-pixel-white dark:bg-pixel-black">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-pixel text-center text-pixel-black dark:text-pixel-white mb-16 animate-pixel-float">
        My Projects
      </h1>

      <!-- Project Categories -->
      <div class="space-y-32">
        <!-- Government Projects -->
        <div>
          <h2 class="text-2xl font-pixel text-pixel-primary mb-16 flex items-center">
            <Icon name="ph:buildings-bold" class="w-8 h-8 mr-3" />
            Government Projects
          </h2>
          <div class="space-y-32">
            <div v-for="project in projects.filter(p => p.category === 'government')" 
                 :key="project.name"
                 class="group relative">
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-primary"></div>
              <div class="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-primary"></div>
              <div class="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-primary"></div>
              <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-primary"></div>
              
              <div class="bg-pixel-black dark:bg-pixel-white p-8 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div class="grid md:grid-cols-2 gap-12 items-start">
                  <!-- Project Image -->
                  <div class="relative overflow-hidden border-4 border-pixel-primary">
                    <img :src="project.image" 
                         :alt="project.name"
                         class="w-full aspect-[4/3] object-cover">
                    <!-- Project Title -->
                    <div class="absolute bottom-0 left-0 right-0 h-16 bg-pixel-black/90 dark:bg-pixel-white/90 backdrop-blur-sm flex items-center justify-center border-t-4 border-pixel-primary">
                      <span class="font-pixel text-lg text-pixel-white dark:text-pixel-black">{{ project.name }}</span>
                    </div>
                  </div>

                  <!-- Project Details -->
                  <div class="space-y-6">
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in project.technologies" 
                            :key="tech"
                            class="px-3 py-1 text-xs font-pixel bg-pixel-primary text-pixel-white">
                        {{ tech }}
                      </span>
                    </div>

                    <div class="prose dark:prose-invert max-w-none">
                      <p class="font-sans text-pixel-white dark:text-pixel-black leading-relaxed">
                        {{ project.description }}
                      </p>

                      <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mt-8">Key Achievements</h3>
                      <ul class="list-none space-y-2">
                        <li v-for="achievement in project.achievements" 
                            :key="achievement"
                            class="flex items-start space-x-2">
                          <span class="font-pixel text-pixel-secondary">→</span>
                          <span class="font-sans text-pixel-white dark:text-pixel-black">{{ achievement }}</span>
                        </li>
                      </ul>

                      <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mt-8">Technical Details</h3>
                      <ul class="list-none space-y-2">
                        <li v-for="detail in project.technicalDetails" 
                            :key="detail"
                            class="flex items-start space-x-2">
                          <span class="font-pixel text-pixel-secondary">•</span>
                          <span class="font-sans text-pixel-white dark:text-pixel-black">{{ detail }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="flex gap-4 pt-6">
                      <a v-if="project.demo" 
                         :href="project.demo"
                         target="_blank"
                         class="inline-flex items-center px-4 py-2 font-pixel text-sm bg-pixel-primary text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <Icon name="ph:link-bold" class="w-5 h-5 mr-2" />
                        Demo
                      </a>
                      <a v-if="project.github" 
                         :href="project.github"
                         target="_blank"
                         class="inline-flex items-center px-4 py-2 font-pixel text-sm border-4 border-pixel-primary text-pixel-primary hover:bg-pixel-primary hover:text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <Icon name="mdi:github" class="w-5 h-5 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Private Company Projects -->
        <div>
          <h2 class="text-2xl font-pixel text-pixel-primary mb-16 flex items-center">
            <Icon name="ph:briefcase-bold" class="w-8 h-8 mr-3" />
            Private Company Projects
          </h2>
          <div class="space-y-32">
            <div v-for="project in projects.filter(p => p.category === 'private')" 
                 :key="project.name"
                 class="group relative">
              <!-- Same project template as above -->
              <div class="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-primary"></div>
              <div class="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-primary"></div>
              <div class="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-primary"></div>
              <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-primary"></div>
              
              <div class="bg-pixel-black dark:bg-pixel-white p-8 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div class="grid md:grid-cols-2 gap-12 items-start">
                  <!-- Project Image -->
                  <div class="relative overflow-hidden border-4 border-pixel-primary">
                    <img :src="project.image" 
                         :alt="project.name"
                         class="w-full aspect-[4/3] object-cover">
                    <!-- Project Title -->
                    <div class="absolute bottom-0 left-0 right-0 h-16 bg-pixel-black/90 dark:bg-pixel-white/90 backdrop-blur-sm flex items-center justify-center border-t-4 border-pixel-primary">
                      <span class="font-pixel text-lg text-pixel-white dark:text-pixel-black">{{ project.name }}</span>
                    </div>
                  </div>

                  <!-- Project Details -->
                  <div class="space-y-6">
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in project.technologies" 
                            :key="tech"
                            class="px-3 py-1 text-xs font-pixel bg-pixel-primary text-pixel-white">
                        {{ tech }}
                      </span>
                    </div>

                    <div class="prose dark:prose-invert max-w-none">
                      <p class="font-sans text-pixel-white dark:text-pixel-black leading-relaxed">
                        {{ project.description }}
                      </p>

                      <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mt-8">Key Achievements</h3>
                      <ul class="list-none space-y-2">
                        <li v-for="achievement in project.achievements" 
                            :key="achievement"
                            class="flex items-start space-x-2">
                          <span class="font-pixel text-pixel-secondary">→</span>
                          <span class="font-sans text-pixel-white dark:text-pixel-black">{{ achievement }}</span>
                        </li>
                      </ul>

                      <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mt-8">Technical Details</h3>
                      <ul class="list-none space-y-2">
                        <li v-for="detail in project.technicalDetails" 
                            :key="detail"
                            class="flex items-start space-x-2">
                          <span class="font-pixel text-pixel-secondary">•</span>
                          <span class="font-sans text-pixel-white dark:text-pixel-black">{{ detail }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="flex gap-4 pt-6">
                      <a v-if="project.demo" 
                         :href="project.demo"
                         target="_blank"
                         class="inline-flex items-center px-4 py-2 font-pixel text-sm bg-pixel-primary text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <Icon name="ph:link-bold" class="w-5 h-5 mr-2" />
                        Demo
                      </a>
                      <a v-if="project.github" 
                         :href="project.github"
                         target="_blank"
                         class="inline-flex items-center px-4 py-2 font-pixel text-sm border-4 border-pixel-primary text-pixel-primary hover:bg-pixel-primary hover:text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <Icon name="mdi:github" class="w-5 h-5 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Projects -->
        <div>
          <h2 class="text-2xl font-pixel text-pixel-primary mb-16 flex items-center">
            <Icon name="ph:code-bold" class="w-8 h-8 mr-3" />
            Personal Projects
          </h2>
          <div class="space-y-32">
            <div v-for="project in projects.filter(p => p.category === 'personal')" 
                 :key="project.name"
                 class="group relative">
              <!-- Same project template as above -->
              <div class="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-primary"></div>
              <div class="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-primary"></div>
              <div class="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-primary"></div>
              <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-primary"></div>
              
              <div class="bg-pixel-black dark:bg-pixel-white p-8 shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div class="grid md:grid-cols-2 gap-12 items-start">
                  <!-- Project Image -->
                  <div class="relative overflow-hidden border-4 border-pixel-primary">
                    <img :src="project.image" 
                         :alt="project.name"
                         class="w-full aspect-[4/3] object-cover">
                    <!-- Project Title -->
                    <div class="absolute bottom-0 left-0 right-0 h-16 bg-pixel-black/90 dark:bg-pixel-white/90 backdrop-blur-sm flex items-center justify-center border-t-4 border-pixel-primary">
                      <span class="font-pixel text-lg text-pixel-white dark:text-pixel-black">{{ project.name }}</span>
                    </div>
                  </div>

                  <!-- Project Details -->
                  <div class="space-y-6">
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in project.technologies" 
                            :key="tech"
                            class="px-3 py-1 text-xs font-pixel bg-pixel-primary text-pixel-white">
                        {{ tech }}
                      </span>
                    </div>

                    <div class="prose dark:prose-invert max-w-none">
                      <p class="font-sans text-pixel-white dark:text-pixel-black leading-relaxed">
                        {{ project.description }}
                      </p>

                      <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mt-8">Key Achievements</h3>
                      <ul class="list-none space-y-2">
                        <li v-for="achievement in project.achievements" 
                            :key="achievement"
                            class="flex items-start space-x-2">
                          <span class="font-pixel text-pixel-secondary">→</span>
                          <span class="font-sans text-pixel-white dark:text-pixel-black">{{ achievement }}</span>
                        </li>
                      </ul>

                      <h3 class="text-xl font-pixel text-pixel-primary dark:text-pixel-primary mt-8">Technical Details</h3>
                      <ul class="list-none space-y-2">
                        <li v-for="detail in project.technicalDetails" 
                            :key="detail"
                            class="flex items-start space-x-2">
                          <span class="font-pixel text-pixel-secondary">•</span>
                          <span class="font-sans text-pixel-white dark:text-pixel-black">{{ detail }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="flex gap-4 pt-6">
                      <a v-if="project.demo" 
                         :href="project.demo"
                         target="_blank"
                         class="inline-flex items-center px-4 py-2 font-pixel text-sm bg-pixel-primary text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <Icon name="ph:link-bold" class="w-5 h-5 mr-2" />
                        Demo
                      </a>
                      <a v-if="project.github" 
                         :href="project.github"
                         target="_blank"
                         class="inline-flex items-center px-4 py-2 font-pixel text-sm border-4 border-pixel-primary text-pixel-primary hover:bg-pixel-primary hover:text-pixel-white shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <Icon name="mdi:github" class="w-5 h-5 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'Business Permit Management System',
    category: 'government',
    description: 'Led the development of a comprehensive government licensing system that streamlined the permit application and approval process. The system handles thousands of applications monthly and has significantly improved the efficiency of government services.',
    image: '/images/project1.png',
    technologies: ['PHP', 'Yii2', 'Bootstrap', 'MySQL', 'REST API'],
    achievements: [
      'Reduced permit processing time by 60% through workflow automation',
      'Implemented secure payment gateway integration handling millions in transactions',
      'Developed real-time application tracking system for transparency',
      'Built robust reporting system for government compliance',
    ],
    technicalDetails: [
      'Designed and implemented scalable database architecture',
      'Built secure REST API for 3rd Party Integration',
      'Made the system responsive to any device',
      'Computerized the manual process of issuing permits'
    ],
    demo: null,
    github: null
  },
  {
    name: 'Enterprise Resource Planning System',
    category: 'private',
    description: 'Developed a comprehensive ERP solution that integrates inventory management, financial reporting, and business intelligence. The system serves multiple departments and has become critical to daily operations.',
    image: '/images/project2.png',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'AWS', 'REST API', 'S3'],
    achievements: [
      'Improved system performance by 40% through optimization',
      'Reduced manual data entry time by 70% with automation',
      'Developed custom reporting engine for business analytics',
      'Made the payroll system more efficient and accurate'
    ],
    technicalDetails: [
      'Fixed bugs and made the system more efficient and accurate',
      'Created secure REST API for 3rd Party Integration',
      'Seamless email sending of payrolls to employees',
      'Created dynamic reports for the business'
    ],
    demo: null,
    github: null
  },
  {
    name: 'Yestory - Digital Memory Platform',
    category: 'personal',
    description: 'Created an innovative digital platform for preserving and sharing personal memories. The platform combines social features with secure storage solutions for photos, videos, and stories.',
    image: '/images/project3.png',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'AWS S3', 'REST API'],
    achievements: [
      'Built scalable media storage system handling terabytes of data',
      'Developed social sharing features with privacy controls',
    ],
    technicalDetails: [
      'Integrated AWS S3 for secure media storage',
      'Built responsive UI with Vue.js and Tailwind CSS',
      'Created RESTful API with Laravel'
    ],
    demo: "https://yestory.cloud",
    github: null
  }
]
</script>

<style scoped>
.prose {
  font-size: 0.95rem;
  line-height: 1.8;
}

/* Pixel art border animation */
@keyframes borderBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.border-blink {
  animation: borderBlink 2s infinite;
}
</style> 