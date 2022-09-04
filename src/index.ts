import http from 'http'
import https from 'https'
import fs from 'fs'
import path from 'path'
import redirect from './redirect'
import app from './app'

const __dirname = path.resolve()
const __certs = path.resolve(__dirname, '/..', '/..', '/..', '/etc', '/letsencrypt', '/live', '/rokashkov.ru')
const privateKey  = fs.readFileSync(path.resolve(__certs, '/privkey.pem'), 'utf8')
const certificate = fs.readFileSync(path.resolve(__certs, '/fullchain.pem'), 'utf8')
const credentials = {
	key: privateKey,
	cert: certificate
}

http.createServer(redirect).listen(80)
https.createServer(credentials, app).listen(443)