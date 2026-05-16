import fs from 'node:fs/promises'

export const buscarUsuarios = async (email) => {
    try {
        const data = await fs.readFile('./usuarios.json', 'utf-8')
        if (!data) return null;
        
        const usuarios = JSON.parse(data)
        return usuarios.find(usuario => usuario.email === email) || null;
    } catch (error) {
        return null; // Caso não encontre o arquivo
    }
}


