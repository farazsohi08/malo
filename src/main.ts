import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { router } from './router.ts';

await import('./web-components.ts');
createApp(RouterView).use(router).mount('#app');
