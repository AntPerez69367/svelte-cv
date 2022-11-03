import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({ sourceMap: !production }),
  compilerOptions: {
    // enable run-time checks when not in production
    dev: !production,
  },
};
