import { mount } from "svelte";

import App from "./App.svelte";
import { createStore } from "./redux/store";

const store = createStore();

const context = new Map([["store", store]]);

const app = mount(App, { target: document.body, context });

export default app;
