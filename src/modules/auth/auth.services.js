import * as repository from './auth.repository.js';

export const criarUsuario = async (cadastrarnovoUsuario) => {
    idade = Number(cadastrarnovoUsuario.get('age'))
    email = cadastrarnovoUsuario.get('email')
    senha = cadastrarnovoUsuario.get('password')

    if (idade < 16) {
        throw new Error('Usuário deve ter pelo menos 16 anos')
    }

    
}
