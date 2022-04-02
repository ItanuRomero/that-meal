# receitas-web-app
 Aplicação realizada no módulo desenvolvimento de sistemas web

Tecnologias:

API
- Node
- Express

Web CLient
- Vue


## Entidades
- Usuário:
Nome |
Data de Nascimento |
Telefone |
E-mail |
Senha |
IsAdmin

- Receita:
Nome |
Imagem |
Modo de preparo |
IdUsuario

- Receita_Tags:
IdTag |
IdReceita

- Avaliações:
Nota |
IdUsuario |
IdReceita

- Comentários:
Comentário |
IdUsuario |
IdReceita

- Favoritos:
IdUsuario |
IdReceita

- Tags:
Nome
