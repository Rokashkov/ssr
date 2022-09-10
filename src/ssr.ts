/// <reference path="assets.d.ts" />

require('ignore-styles')

require('@babel/register')({
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript'
	]
})

require('./index.ts')