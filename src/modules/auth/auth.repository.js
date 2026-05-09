import fs from 'node:fs/promises'

export const buscarUsuarios = async () => {
    const data = await fs.readFile('./usuarios.json', 'utf-8')
    const usuarios = JSON.parse(data)
    const encontrado = false
    for(let i =0; i< usuarios.length; i++) {
        if(usuarios[i].email && usuarios[i].password && usuarios[i].age){
            encontrado = true
            return usuarios[i]
        } 
    }
    if(!encontrado){
        throw new Error('Usuário não encontrado')
    }
}

export const buscarUsuarios = async (email) => {
    const data = await fs.readFile('./usuarios.json', 'utf-8')
    const usuarios = JSON.parse(data)
    const encontrado = false
    for(let i =0; i< usuarios.length; i++) {
        if(usuarios[i].email){
            encontrado = true
            return JSON.parse(usuarios[i].email)
        } 
    }
    if(!encontrado){
        throw new Error('Usuário não encontrado')
    }
}


