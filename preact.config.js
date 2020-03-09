require('dotenv').config();

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	// Basepath of lime-app in the router: http://thisnode.info/app/
	config.output.publicPath = process.env.WEB_PATH || '';
}
