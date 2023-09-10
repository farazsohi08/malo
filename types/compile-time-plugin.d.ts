// import 'vite-plugin-compile-time/client';

interface ImportMeta {
  compileTime: <T>(id: string) => T;
}