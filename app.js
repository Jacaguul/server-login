import http from 'node:http'
import * as router from './src/router.js'

export const server = http.createServer(router.roteador)

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})