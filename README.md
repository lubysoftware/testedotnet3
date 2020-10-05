# Desafio Back-end Luby Software

## Checklist de planejamento

### Backend
 [x] - Criar estrutura inicial da api
 [x] - Criar server para api (express)
 [x] Adicionar dependências (mysql2, sequelize, mysql, ...)
 [x] Adficionar conexão com o banco de dados
 [x] Criar model (Developer)
 [x] Criar model (Project)
 [x] Criar migration (Developer)
 [x] Criar migration (Project)
 [x] Criar CRUD de desenvolvedor (developers)
 [x] Criar CRUD de projeto (projects)
 [x] Criar relacionamento de projeto com desenvolvedores (developerProjects)
 [x] Corrigir problema com o campo workTimeInMiliseconds na tabela de integração entre projeto e desenvolvedor (o campo não está sendo setado com nenhum comando do sequelize.)
 [x] Criar CRUD de lançamento de horas (worked hours) 
 [x] Criar endpoint para ranking
... 

### Front-end

[x] Criar estrutura inicial do projeto em react
[x] Criar criar rota para desenvolvedores
[x] Criar criar rota para projetos
[x] Listar Desenvolvedores
[x] Criar criar rota para ranking
[x] Exibir ranking
[x] Criar criar rota para lançamento de horas trabalhadas
[ ] Implementar funcionalidade de lançamento de horas trabalhadas

--- Adicionais ---
[ ] Criar menu de navegação
[ ] Listar Projetos
[ ] Criar funcionalidade de adicionar dev
[ ] Criar funcionalidade de adicionar projeto

------

Primeiramente, obrigado pelo seu interesse em trabalhar na Luby. Somos uma fábrica de software com mais de 110 desenvolvedores e 15 anos de mercado. Temos atuação em mais de 5 países e estamos em busca de talentos para integrar o nosso time no desenvolvimento .NET de forma 100% remota.

#### Premissas:
- Criar uma API usando .NET CORE.
- O banco de dados pode ser  MySql ou SQL Server.

#### Teste:
Desenvolver um serviço que seja capaz de gerar um lançamento de horas.
- Um lançamento de horas é composta por pelo menos **id**, **data inicio**, **data fim**, **desenvolvedor**.

#### Sua tarefa é desenvolver os serviços abaixo:
- CRUD para desenvolvedor
- CRUD de projeto
- Criar um lançamento de hora
- Retornar ranking dos 5 desenvolvedores da semana com maior média de horas trabalhadas.
- Criar um cliente WEB para consumir essa API (Angular, React, Razor MVC)

#### Instruções:
1. Realizar `fork` deste projeto.
2. Desenvolver em cima do seu `fork`.
3. Atualizar esse README.md com sua identificação no fim do arquivo
4. Após finalizar, realizar o `pull request`.
5. Fique à vontade para perguntar qualquer dúvida aos recrutadores.

#### E por fim:
- Gostaríamos de ver o uso do controle de versão.
- Entendimento de OO, conceitos de SOLID, e outros relacionados
- Reuso do código
- Vamos avaliar a maneira que você escreveu seu código, a solução apresentada.
- Caso encontre algum impedimento no decorrer do desenvolvimento, entregue da maneira que preferir e faça uma explicação sobre o impedimento.
- Avaliaremos também sua postura, honestidade e a maneira que resolve problemas.

#### Identificação:
Nome: Renato Barbosa Cândido <br/>
E-mail: renatobarbosacandido@gmail.com 
