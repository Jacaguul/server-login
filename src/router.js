import * as controller from "./modules/auth/auth.controller.js"

export const roteador = async (request, response) => {
    const { url, method } = request;

    if ((url === '/' || url === '/home' || url === '/index.html') && method === 'GET') {
        return await controller.exibirPaginaCadastro(request, response)
    }
    else if (url === '/login.html' && method === 'GET') {
        return await controller.exibirPaginaLogin(request, response)
    }
    else if (url === '/home' && method === 'POST'){
        return await controller.processarCadastro(request, response)
    }
    
    response.writeHead(404)
    response.end("Pagina nao encontrada")
}