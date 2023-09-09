import '@total-typescript/ts-reset';
import 'vite-plugin-compile-time/client';
import 'vite/client';
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare global {
  interface ImportMeta {
    compileTime: <T>(id: string) => T;
  }
}
