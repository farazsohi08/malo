<template>
  <header class="h-40 bg-teal-700 px-4 py-2 text-white">
    <nav
      class="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
    >
      <ul class="-mb-px flex flex-wrap">
        <li v-for="{ name, link } in problemsLinks" :key="name">
          <RouterLink
            :to="{ name }"
            active-class="border-teal-600 dark:border-teal-500 dark:text-teal-500 text-teal-600"
            class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {{ link }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <h1 class="py-4 text-6xl">{{ route.meta.title }}</h1>
  </header>
  <div class="grid place-items-center p-4">
    <main class="max-w-4xl">
      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <RouterView></RouterView>
      </transition>
    </main>
  </div>
  <footer class="h-20 bg-teal-700"></footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const problemsLinks = computed(
  () =>
    router
      .getRoutes()
      .find((route) => route.name == 'problems')
      ?.children.map(({ meta: { link } = {}, name }) => ({ name, link })),
);
</script>
