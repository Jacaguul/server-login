import * as service from './auth.services'

export const exibirPaginaCadastro = async (request, response) => {
    //Gerar a pagina
    const archive = await fs.readFile('.' + request.url)
    ans.setHeader('X-Content-Type-Options', 'nosniff', 'Content-Type', 'text/html')
    ans.setHeader('content-Type', 'text/css')
    ans.writeHead(200)
    ans.end(archive)
}