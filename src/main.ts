import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { router } from './router.ts';

async function main() {
  await import('./web-components.ts');
  createApp(RouterView).use(router).mount('#app');
}

main().catch((err) => console.error(err));