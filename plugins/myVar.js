import Vue from 'vue';
import * as activeConfig from "./app-configs/active-config.json";

Vue.prototype.$config = activeConfig.default;


