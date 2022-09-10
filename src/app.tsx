import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { App } from '../apps/react-scratch/src/App'

const app = express()

const __dist = path.resolve(__dirname, 'apps', 'dist')


app.get('/', (req, res) => {
	fs.readFile(path.resolve(__dist, 'project-name', 'index.html'), 'utf-8', (err, data) => {
		if (err) {
			console.log(err)
			return res.status(500).send('Server error')
		}
		res.send(data.replace('<div id="root"></div>', ReactDOM.renderToString(<App/>)))
	})
})

app.use(express.static(path.resolve(__dist, 'project-name')))

export default app