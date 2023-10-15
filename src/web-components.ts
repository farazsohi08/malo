import { defineCustomElement } from 'vue';
import './assets/styles/main.css';
import { createGraphElement } from './graph';
import Applet1Controls from './problem1/problem1-controls.vue';
import Applet1Diagram from './problem1/problem1-diagram.vue';
import { beamIntensity } from './problem1/problem1-equations';
import Applet1Tex from './problem1/problem1-tex.vue';
import Applet2Controls from './problem2/problem2-controls.vue';
import Applet2Diagram from './problem2/problem2-diagram.vue';
import { maximumDeflection } from './problem2/problem2-equations';
import Applet2Tex from './problem2/problem2-tex.vue';

const Applet1TexElement = defineCustomElement(Applet1Tex);
const Applet1ControlsElement = defineCustomElement(Applet1Controls);
const Applet1DiagramElement = defineCustomElement(Applet1Diagram);

customElements.define('ce-applet1-tex', Applet1TexElement);
customElements.define('ce-applet1-controls', Applet1ControlsElement);
customElements.define('ce-applet1-diagram', Applet1DiagramElement);
createGraphElement({
  tagName: 'ce-applet1-graph',
  graphFunction: beamIntensity,
  xLabel: 'U\u2095',
  yLabel: 'U\u2090',
  zLabel: 'Beam Intensity',
  zScale: 3,
});

const Applet2TexElement = defineCustomElement(Applet2Tex);
const Applet2ControlsElement = defineCustomElement(Applet2Controls);
const Applet2DiagramElement = defineCustomElement(Applet2Diagram);

customElements.define('ce-applet2-tex', Applet2TexElement);
customElements.define('ce-applet2-controls', Applet2ControlsElement);
customElements.define('ce-applet2-diagram', Applet2DiagramElement);
createGraphElement({
  tagName: 'ce-applet2-graph',
  graphFunction: maximumDeflection,
  xLabel: 'V\u209A',
  yLabel: 'V\u2090',
  zLabel: 'Maximum Deflection',
  zScale: 0.000_03,
});
