/// <reference path="./assets.d.ts" />

import 'ignore-styles'
import babelregister from '@babel/register'

babelregister({
	ignore: [/(node_module)/],
	presets: ['@babel/preset-env', '@babel/preset-react']
})

import './index'