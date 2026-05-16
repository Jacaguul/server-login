import fs from 'node:fs/promises'

export const salvarUsuario = async (novoUsuario) => {
        
    const newemail = novoUsuario.get('email')
    const newpassword = novoUsuario.get('password')
    const newage = novoUsuario.get('age')


    const newuser = {
        email: newemail,
        password: newpassword,
        age: newage

    }

    let usuarios = []
    try {
        const data = await fs.readFile('./usuarios.json', 'utf-8')
        if (data) usuarios = JSON.parse(data)
    } catch (erro) {
        // arquivo não existe ainda, será criado
    }
    
    usuarios.push(newuser)

    await fs.writeFile('./usuarios.json', JSON.stringify(usuarios, null, 2))
}