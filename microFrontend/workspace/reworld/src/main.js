import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

const Foo = { template: "<div>Foo</div>" };
const Bar = { template: "<div>Bar</div>" };

const routes = [
  { path: "/reworld/foo", component: Foo },
  { path: "/bar", component: Bar },
];

const router = createRouter({ history: createWebHistory("/reworld"), routes });

const vueLifecycles = singleSpaVue({
  createApp,
  router,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = (props) => vueLifecycles.mount(props);
export const unmount = vueLifecycles.unmount;
