import { defineCustomElement } from 'vue'
import Applet1Tex from './problem1/problem1-tex.vue';
import Applet1Graph from './problem1/problem1-graph.vue';
import Applet1Controls from './problem1/problem1-controls.vue';
import Applet1Diagram from './problem1/problem1-diagram.vue';
import './assets/styles/main.css';


const Applet1TexElement = defineCustomElement(Applet1Tex);
const Applet1GraphElement = defineCustomElement(Applet1Graph);
const Applet1ControlsElement = defineCustomElement(Applet1Controls);
const Applet1DiagramElement = defineCustomElement(Applet1Diagram);

customElements.define('ce-applet1-tex', Applet1TexElement);
customElements.define('ce-applet1-graph', Applet1GraphElement);
customElements.define('ce-applet1-controls', Applet1ControlsElement);
customElements.define('ce-applet1-diagram', Applet1DiagramElement);