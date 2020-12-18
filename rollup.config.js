import svelte from "rollup-plugin-svelte"; // compiles svelte files
import resolve from "@rollup/plugin-node-resolve"; // needed for the svelte plugin
import commonjs from "@rollup/plugin-commonjs"; // also needed for some stuff
import livereload from "rollup-plugin-livereload"; // run live dev server
import { terser } from "rollup-plugin-terser"; // minify code
import css from 'rollup-plugin-css-only'; // generate css stuff

// whether to run in dev mode
const dev = process.env.ROLLUP_WATCH;

// runs the server
function serve() {
  let server;

	function toExit() {
		if(server) server.kill(0);
	}

	return {
		writeBundle() {
      if(server) return;
      
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

let pages = [
  "home",
  "events"
];

let exports = [];

for(let page of pages) {
  exports.push(
    {
      input: `src/${page}.js`,
      output: {
        name: page,
        file: `public/assets/${page}.js`,
        format: "iife"
      },
      plugins: [
        svelte({ compilerOptions: { dev } }),
        css({ output: `${page}.css` }),
        resolve({ browser: true, dedupe: ["svelte"] }),
        commonjs(),
    
        dev && serve(),
        dev && livereload("public"),
        !dev && terser
      ]
    }
  );
}

export default exports;

// export default {
//   input: "src/main.js",
//   output: {
//     name: "bundle",
//     file: "public/bundle.js",
//     format: "iife"
//   },
//   plugins: [
//     svelte({ compilerOptions: { dev } }),
//     css({ output: "bundle.css" }),
//     resolve({ browser: true, dedupe: ["svelte"] }),
//     commonjs(),

//     dev && serve(),
//     dev && livereload("public"),
//     !dev && terser
//   ]
// };