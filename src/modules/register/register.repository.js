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

    const data = await fs.readFile('./usuarios.json', 'utf-8')
    const usuarios = JSON.parse(data)
    usuarios.push(newuser)

    await fs.writeFile('./usuarios.json', JSON.stringify(usuarios))
}