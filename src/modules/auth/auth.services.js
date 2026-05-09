import * as repository from './auth.repository.js';
import * as registerRepository from '../register/register.repository.js'

export const criarUsuario = async (cadastrarnovoUsuario) => {
    const usuario = {
        idade : Number(cadastrarnovoUsuario.get('age')),
        email : cadastrarnovoUsuario.get('email'),
        senha : cadastrarnovoUsuario.get('password'),
    }

    if (idade < 16) {
        throw new Error('Usuário deve ter pelo menos 16 anos!')
    }
    if (repository.buscarUsuarios(email) == email){
        throw new Error('Email já cadastrado!')
    }
    if (senha.length < 6 ){
        throw new Error('Senha precisa de no mínimo 6 caracteres!')

    }
    else {
       return registerRepository.salvarUsuario(usuario)
    }
        

    }

    

