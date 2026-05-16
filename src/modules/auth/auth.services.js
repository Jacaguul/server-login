import * as repository from './auth.repository.js';
import * as registerRepository from '../register/register.repository.js'

export const criarUsuario = async (cadastrarnovoUsuario) => {
    const idade = Number(cadastrarnovoUsuario.get('age'))
    const email = cadastrarnovoUsuario.get('email')
    const senha = cadastrarnovoUsuario.get('password')

    if (idade < 16) {
        throw new Error('Usuário deve ter pelo menos 16 anos!')
    }
    
    const usuarioExistente = await repository.buscarUsuarios(email)
    if (usuarioExistente) {
        throw new Error('Email já cadastrado!')
    }
    
    if (senha.length < 6 ){
        throw new Error('Senha precisa de no mínimo 6 caracteres!')
    }

    return registerRepository.salvarUsuario(cadastrarnovoUsuario)
}

    

