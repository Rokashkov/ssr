import express from 'express'
import path from 'path'

const app = express()

const __dist = path.resolve(__dirname, '..', '..', 'dist')

app.use(express.static(path.resolve(__dist, 'project-name')))

app.get('*', (req, res) => {
	res.sendFile('index.html')
})

export default app