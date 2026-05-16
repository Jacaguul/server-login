import * as service from './auth.services.js'
import fs from 'node:fs/promises'

export const exibirPaginaCadastro = async (request, response) => {
    //Gerar a pagina
    const archive = await fs.readFile('./index.html')
    response.setHeader('X-Content-Type-Options', 'nosniff')
    response.setHeader('Content-Type', 'text/html')
    response.writeHead(200)
    response.end(archive)
}

export const exibirPaginaLogin = async (request, response) => {
    const archive = await fs.readFile('./login.html')
    response.setHeader('X-Content-Type-Options', 'nosniff')
    response.setHeader('Content-Type', 'text/html')
    response.writeHead(200)
    response.end(archive)
}

export const processarCadastro = async (request, response) => {
    let data = ''
    request.on('data', (chunk) => data += chunk.toString())
    request.on('end', async () => {
        try {
            const cadastrarNovoUsuario = new URLSearchParams(data)
            await service.criarUsuario(cadastrarNovoUsuario)
            response.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' })
            response.end("Usuário cadastrado com sucesso! Faça login.")
        } catch(erro) {
            response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' })
            response.end("Erro: " + erro.message)
        }
    })
}