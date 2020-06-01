import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
    input: "example/src/main.js",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "example/public/build/bundle.js",
    },
    plugins: [
        svelte({
            dev: !production,
            css: (css) => {
                css.write("example/public/build/bundle.css");
            },
        }),
        resolve({
            browser: true,
            dedupe: ["svelte"],
        }),
        commonjs(),
        !production && serve(),
        !production && livereload("example/public"),
        production && terser(),
    ],
    watch: {
        clearScreen: false,
    },
};

function serve() {
    let started = false;
    return {
        writeBundle() {
            if (!started) {
                started = true;
                require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
                    stdio: ["ignore", "inherit", "inherit"],
                    shell: true,
                });
            }
        },
    };
}
