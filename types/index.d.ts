import "@total-typescript/ts-reset";
import 'vite/client';

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
