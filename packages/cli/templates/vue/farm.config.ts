import { defineFarmConfig } from '@farmfe/core/dist/config';
import farmJsPluginVue from '@farmfe/js-plugin-vue';

export default defineFarmConfig({
  compilation: {
    input: {
      index: './index.html',
    },
    output: {
      path: './build',
    },
  },
  plugins: [farmJsPluginVue()],
});
