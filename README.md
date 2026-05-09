# Tasks Projeto Integrador

> **🔐 Projeto Final: AuthNode Modular**
> 
> 
> Bem-vindo ao seu desafio final de Back-end!
> Sua missão é construir um fluxo de autenticação (Cadastro e Login) utilizando Node.js nativo. O grande diferencial: você **deve** usar o padrão *Controller-Service-Repository*.
> 
> ## 📁 Estrutura de Pastas Recomendada
> 
> ```jsx
> ├── usuarios.json (Seu banco de dados em array [])
> ├── index.html (Formulário de cadastro)
> ├── login.html (Formulário de login)
> ├── app.js (O Ponto de Entrada limpo)
> └── src/
>     ├── router.js (O Guarda de Trânsito)
>     └── modules/
>         └── auth/
>             ├── auth.repository.js (O Estoquista)
>             ├── auth.service.js (O Cérebro/Validador)
>             └── auth.controller.js (O Garçom da Web)
> 	       └── register/
> ```
> 
> ## 📋 Regras de Negócio (Obrigatórias no Service)
> 
> Ao receber os dados de cadastro:
> 
> 1. A idade deve ser `>= 16`.
> 2. A senha deve ter `> 6` caracteres.
>     1. O e-m ail não pode existir no `usuarios.json`.
>     *Se falhar, retorne erro 400. Se passar, salve e redirecione (302) para `/login`.*
> 
> ## 🚀 Dica de Ouro
> 
> Construa de baixo para cima! Primeiro o *Repository* (que não depende de ninguém), depois o *Service* (que usa o Repo), depois o *Controller* (que usa o Service) e por fim o *Router* e o `app.js`.
> 

---

### 3. A Prática (Estudo Dirigido)

### Task 1: A Base de Dados (O Repository) - *Aula 1*

O repositório é o único arquivo autorizado a importar o `fs/promises`.
💻 **Ação do Aluno:**

- Criar a pasta `src/modules/auth` e o arquivo `auth.repository.js`.
- Criar e exportar a função `buscarUsuarios()` que lê e faz o parse do `usuarios.json`.
- Criar e exportar a função `salvarUsuario(novoUsuario)` que adiciona o objeto na lista e reescreve o arquivo.

### Task 2: O Cérebro da Operação (O Service) - *Aula 2*

Aqui mora a lógica pesada. O Service recebe dados brutos, valida, e decide se chama o Repository ou se joga um erro.
💻 **Ação do Aluno:**

- Criar o `auth.service.js` e importar o repository.
- Criar a função `cadastrarNovoUsuario(dadosDigitados)`. Converter a idade para número.
- Fazer os 3 `if`s de validação (idade, senha, email único). Se der erro, disparar uma exceção (`throw new Error(...)`).
- Se passar, montar o objeto e enviar para o repository salvar.

### Task 3: A Ponte com a Internet (O Controller) - *Aula 2*

O Controller lida com a requisição, coleta os pacotes (Streams) e trata a resposta final para o navegador.
💻 **Ação do Aluno:**

- Criar o `auth.controller.js` e importar o service.
- Criar funções para renderizar o HTML usando `fs` (ex: `exibirPaginaCadastro`).
- Criar a função `processarCadastro(request, response)` que captura as *Streams* do POST, chama o Service dentro de um bloco `try/catch` e devolve HTTP 302 (Sucesso) ou 400 (Erro).

### Task 4: O Roteamento e Ponto de Entrada - *Aula 2*

O coração limpo da aplicação.
💻 **Ação do Aluno:**

- No `router.js`, importar o controller e criar o grande `if/else` direcionando `/home` GET e POST para as funções corretas do controller.
- No `app.js`, simplesmente importar o router e repassar para o `createServer`.