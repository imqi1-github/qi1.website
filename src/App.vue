<script setup lang="ts">
import avatar from './assets/avatar.jpg'
import imqi1Icon from './assets/imqi1.svg'
import notebookIcon from './assets/notebook.svg'
import statusIcon from './assets/status.png'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useSiteStatus } from './composables/useSiteStatus'

/** 页脚实时状态：拉取 status.qi1.website 的聚合结果 */
const { tone: siteTone, label: siteLabel } = useSiteStatus()

const statusDotClass = computed(() => {
  switch (siteTone.value) {
    case 'up':
      return 'bg-emerald-500'
    case 'warn':
      return 'bg-amber-500'
    case 'down':
      return 'bg-red-500'
    default:
      return 'bg-slate-300'
  }
})

const heroData = {
  name: '棋',
  greeting: '你好，我是棋',
  tagline: 'AI全栈工程师',
  motto: '代码如诗，设计如画',
  description: '通过构建优雅的层次结构以实现最大的代码重用和可扩展性，我们正在让世界变得更美好。'
}

const techStack = [
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Flask', icon: 'simple-icons:flask' },
  { name: 'Django', icon: 'logos:django-icon' },
  { name: 'FastAPI', icon: 'simple-icons:fastapi' },
  { name: 'MySQL', icon: 'logos:mysql' }
]

const contacts = [
  { name: '邮箱', icon: 'lucide:mail', url: 'mailto:imqi1@qq.com' },
  { name: 'X', icon: 'lucide:twitter', url: 'https://x.com/imqi1_X' },
  { name: 'GitHub', icon: 'lucide:github', url: 'https://github.com/imqi1-github' },
  { name: '留言', icon: 'lucide:message-square', url: 'https://imqi1.com/message' },
  { name: '友情链接', icon: 'lucide:link', url: 'https://imqi1.com/link' },
  { name: '关于', icon: 'lucide:user', url: 'https://imqi1.com/about' }
]

const websites = [
  {
    name: 'ImQi1',
    url: 'https://imqi1.com',
    description: '技术分享、生活摄影和多样兴趣的个人网站',
    icon: imqi1Icon
  },
  {
    name: '云笔记',
    url: 'https://notebook.qi1.website',
    description: '笔记与知识管理',
    icon: notebookIcon
  },
  {
    name: '监控',
    url: 'https://status.qi1.website',
    description: '服务状态监控',
    icon: statusIcon
  }
]

const openSourceLinks = [
  {
    name: 'GitHub 仓库',
    description: '查看源码、提交 Issue、参与贡献',
    icon: 'lucide:github',
    url: 'https://github.com/imqi1-github/imqi1-cms'
  },
  {
    name: '文档站',
    description: '安装部署、使用指南、API 参考',
    icon: 'lucide:book-open',
    url: 'https://docs.qi1.website'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="pt-16 md:pt-24 pb-12 px-6 hero-section">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- 左侧头像 -->
          <div class="shrink-0">
            <div class="relative">
              <div class="absolute inset-0 bg-slate-200 rounded-full blur-sm opacity-50"></div>
              <img :src="avatar" alt="头像" class="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-md">
            </div>
          </div>

          <!-- 右侧内容 -->
          <div class="flex-1 text-center md:text-left">
            <p class="text-sm text-slate-400 mb-1 tracking-wide">HELLO WORLD</p>
            <h1 class="text-3xl md:text-4xl font-medium text-slate-900 mb-2 font-serif">
              {{ heroData.greeting }}
            </h1>
            <p class="text-base text-slate-500 mb-5">
              {{ heroData.tagline }}
            </p>

            <!-- 标签 -->
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
              <span v-for="tech in techStack" :key="tech.name" class="tech-tag px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs rounded-full flex items-center gap-1.5 shadow-sm">
                <Icon :icon="tech.icon" class="w-4 h-4" />
                <span>{{ tech.name }}</span>
              </span>
            </div>

            <!-- 座右铭 -->
            <blockquote class="border-l-2 border-slate-200 pl-4 inline-block">
              <p class="text-slate-600 font-light">"{{ heroData.motto }}"</p>
            </blockquote>
          </div>
        </div>

        <!-- 底部描述 -->
        <div class="mt-10 pt-8 border-t border-slate-200">
          <p class="text-sm text-slate-400 leading-relaxed text-center">
            {{ heroData.description }}
          </p>
        </div>

        <!-- 底部装饰 -->
        <div class="mt-8 flex items-center justify-center gap-2 text-slate-300">
          <div class="w-8 h-px bg-slate-200"></div>
          <div class="decor-dot w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div class="decor-dot w-1 h-1 rounded-full bg-slate-200"></div>
          <div class="decor-dot w-1 h-1 rounded-full bg-slate-200"></div>
          <div class="w-8 h-px bg-slate-200"></div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-8 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            v-for="contact in contacts"
            :key="contact.name"
            :href="contact.url"
            class="contact-btn flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-sm text-slate-600 hover:text-slate-900"
          >
            <Icon :icon="contact.icon" class="w-4 h-4" />
            <span>{{ contact.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Websites Section -->
    <section class="py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-medium text-slate-900 mb-8 font-serif text-center title">
          我的网站
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            v-for="site in websites"
            :key="site.name"
            :href="site.url"
            target="_blank"
            class="website-card group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <img :src="site.icon" :alt="site.name" class="w-12 h-12 rounded-lg object-contain p-1 bg-slate-50">
            <div class="flex-1 min-w-0">
              <h3 class="font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                {{ site.name }}
              </h3>
              <p class="text-sm text-slate-500 truncate">{{ site.description }}</p>
            </div>
            <Icon icon="lucide:external-link" class="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0" />
          </a>
        </div>
      </div>
    </section>

    <!-- Open Source Section -->
    <section class="py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-medium text-slate-900 mb-8 font-serif text-center title3">
          开源项目
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            v-for="link in openSourceLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="opensource-card group flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div class="shrink-0 w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
              <Icon :icon="link.icon" class="w-6 h-6 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                {{ link.name }}
              </h3>
              <p class="text-sm text-slate-500 truncate">{{ link.description }}</p>
            </div>
            <Icon icon="lucide:external-link" class="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0" />
          </a>
        </div>

        <p class="opensource-text mt-6 text-center text-xs text-slate-400">
          imqi1-cms · 一个简洁优雅的内容管理系统
        </p>
      </div>
    </section>

    <!-- Graduation Project Section -->
    <section class="py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-medium text-slate-900 mb-8 font-serif text-center title2">
          毕业设计展
        </h2>

        <a
          href="https://imqi1.com/content/shot/1005"
          target="_blank"
          class="project-card group block max-w-md mx-auto"
        >
          <div class="relative p-8 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center hover:border-amber-300 hover:shadow-md transition-all">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">
                院级优秀
              </span>
            </div>
            <Icon icon="lucide:graduation-cap" class="w-10 h-10 mx-auto mb-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
            <h3 class="text-lg font-medium text-slate-900 mb-2">
              燕山大学毕业设计
            </h3>
            <p class="text-sm text-slate-500 mb-4">
              荣获院级优秀毕业设计称号
            </p>
            <div class="inline-flex items-center gap-1 text-sm text-amber-600">
              <span>查看作品</span>
              <Icon icon="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 mt-8">
      <div class="max-w-4xl mx-auto">
        <!-- 装饰线 -->
        <div class="flex items-center gap-3 mb-8">
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div class="flex items-center gap-1 text-slate-300">
            <div class="w-1 h-1 rounded-full"></div>
            <div class="w-1.5 h-1.5 rounded-full"></div>
            <div class="w-1 h-1 rounded-full"></div>
          </div>
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        <!-- 内容区 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-400">
          <span>© 2026 棋</span>
          <span class="hidden sm:inline text-slate-300">|</span>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            class="hidden sm:block hover:text-slate-600 transition-colors"
          >
            冀ICP备2023007665号
          </a>
          <span class="hidden sm:inline text-slate-300">|</span>
          <!-- 实时服务状态：数据来自 status.qi1.website -->
          <a
            href="https://status.qi1.website"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
            :title="`服务状态：${siteLabel}`"
          >
            <span class="relative flex w-2 h-2">
              <!-- 故障时加一圈扩散动画，便于一眼注意到 -->
              <span
                v-if="siteTone === 'down'"
                class="absolute inline-flex w-full h-full rounded-full bg-red-400 opacity-75 animate-ping"
              />
              <span class="relative inline-flex w-2 h-2 rounded-full" :class="statusDotClass" />
            </span>
            <span>{{ siteLabel }}</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 淡入动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Hero 区动画 */
.hero-section > div {
  animation: fadeInUp 0.8s ease-out;
}

/* 技术标签动画 */
.tech-tag {
  animation: fadeInUp 0.6s ease-out backwards;
}
.tech-tag:nth-child(1) { animation-delay: 0.1s; }
.tech-tag:nth-child(2) { animation-delay: 0.15s; }
.tech-tag:nth-child(3) { animation-delay: 0.2s; }
.tech-tag:nth-child(4) { animation-delay: 0.25s; }
.tech-tag:nth-child(5) { animation-delay: 0.3s; }
.tech-tag:nth-child(6) { animation-delay: 0.35s; }
.tech-tag:nth-child(7) { animation-delay: 0.4s; }

/* 联系方式动画 */
.contact-btn {
  animation: fadeInUp 0.5s ease-out backwards;
}
.contact-btn:nth-child(1) { animation-delay: 0.5s; }
.contact-btn:nth-child(2) { animation-delay: 0.55s; }
.contact-btn:nth-child(3) { animation-delay: 0.6s; }
.contact-btn:nth-child(4) { animation-delay: 0.65s; }
.contact-btn:nth-child(5) { animation-delay: 0.7s; }
.contact-btn:nth-child(6) { animation-delay: 0.75s; }

/* 网站卡片动画 */
.website-card {
  animation: fadeInUp 0.6s ease-out backwards;
}
.website-card:nth-child(1) { animation-delay: 0.6s; }
.website-card:nth-child(2) { animation-delay: 0.65s; }
.website-card:nth-child(3) { animation-delay: 0.7s; }
.website-card:nth-child(4) { animation-delay: 0.75s; }
.website-card:nth-child(5) { animation-delay: 0.8s; }

/**标题动画 */
.title {
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: 0.6s;
}

.title2 {
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: 0.85s;
}

.title3 {
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: 0.9s;
}

/* 开源项目卡片动画 */
.opensource-card, .opensource-text {
  animation: fadeInUp 0.6s ease-out backwards;
}
.opensource-card:nth-child(1) { animation-delay: 0.95s; }
.opensource-card:nth-child(2) { animation-delay: 1.0s; }
.opensource-text { animation-delay: 1.05s }

/* 毕设卡片动画 */
.project-card {
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: 0.85s;
}

/* 头像悬浮动画 */
.avatar-container {
  animation: float 3s ease-in-out infinite;
}

/* 装饰点闪烁动画 */
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.decor-dot:nth-child(2) {
  animation: pulse 2s ease-in-out infinite;
}
.decor-dot:nth-child(3) {
  animation: pulse 2s ease-in-out infinite 0.3s;
}
.decor-dot:nth-child(4) {
  animation: pulse 2s ease-in-out infinite 0.6s;
}
</style>
