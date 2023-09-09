<template>
  <div>
    <div
      ref="texContainer"
      v-html="mml"
      class="mathjax-container w-full bg-white text-gray-600"
    >

    </div>
    <div class="bg-white">
      <img
        src="/electron-gun-with-wehnelt-cylinder.svg"
        alt="Electron Gun With Wehnelt Cylinder"
      />
    </div>
    <p>
      The elektric beam is visible under special conditions:
d) If U_H (1a) is between 0-2.5 f(U_H)=0.
   For Values of U_H between 2.5 and 10 V f(x) is quadratic like
   f(U_H)=(1/(7.5^2))*(U_H-2.5)^2
   If U_A is 0-1kV g(U_A)=0. If U_A is between 1-3 it g(U_A)=-1+1/2*U_A. For U_A greater then 3 g(U_A)=1.
The Intensity of the beam is I(f,g)=f(U_H)*g(U_A)
    </p>
    <!-- <div class="jxgbox mx-auto aspect-square max-w-[50rem]" id="jxgbox"></div> -->
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref, computed } from 'vue';
// import katex from 'katex';

// const tex = `
// \(U_H \text{can be varied from 0-10V} \)
//       \(U_A\;\text{can be varied from 0-10} KV\)
//       \(U_W\;\text{can be varied from 0-10} KV\)
//       f(U_H)= \begin{cases} true & (U_H \leq 2.5) \\ false & (U_H \gt 2.5) \\
//       \end{cases}
// `;

// const rendered = computed(() => katex.renderToString(tex));

const mml = import.meta.compileTime('assets/tex/index.ts');
console.log(mml);

// onMounted(() => {
//   renderMathInElement(texContainer.value);
  // await import('mathjax-full/es5/tex-svg-full.js');
  //   .Config({
  //         tex2jax: {
  // //          inlineMath: [ ['$','$'], ["\\(","\\)"] ],
  // //          displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
  // //          processEscapes: true
  //           ignoreClass: '.*',
  //           ignoreHtmlClass: '.*',
  //           processHtmlClass: 'sfd'
  //         },

  //             processHtmlClass: 'sfd'
  //           }
  //       );
// });
</script>
