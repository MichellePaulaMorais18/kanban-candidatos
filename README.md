# Dashboard Kanban - Candidatos de Estágio

## Descrição

Esta é uma aplicação web React que implementa um dashboard estilo Kanban para gerenciar candidatos de estágio e suas etapas no processo seletivo. A aplicação permite visualizar, adicionar, editar e mover candidatos através das diferentes fases do processo de contratação.

## Funcionalidades

### 📊 Dashboard Visual
- Interface Kanban com 6 colunas representando as etapas do processo seletivo:
  - **Inscrito**: Candidatos que se inscreveram para a vaga
  - **Triagem**: Candidatos em processo de triagem inicial
  - **Entrevista**: Candidatos agendados ou em processo de entrevista
  - **Oferta**: Candidatos que receberam uma oferta de estágio
  - **Contratado**: Candidatos que aceitaram a oferta e foram contratados
  - **Rejeitado**: Candidatos que não foram aprovados no processo

### 👥 Gerenciamento de Candidatos
- **Adicionar Candidato**: Botão "Novo Candidato" para adicionar novos candidatos
- **Editar Candidato**: Ícone de edição em cada card para modificar informações
- **Excluir Candidato**: Ícone de lixeira para remover candidatos
- **Mover Candidatos**: Botões "Voltar" e "Avançar" para mover candidatos entre etapas

### 📋 Informações do Candidato
Cada candidato possui:
- Nome completo
- Email de contato
- Telefone
- Etapa atual no processo
- Observações (campo livre para anotações)

### 📈 Estatísticas
- Contador total de candidatos no header
- Contador individual por etapa em cada coluna
- Resumo estatístico no rodapé da página

## Como Usar

### Adicionando um Novo Candidato
1. Clique no botão "Novo Candidato" no canto superior direito
2. Preencha os campos obrigatórios (Nome, Email, Telefone)
3. Selecione a etapa inicial (padrão: Inscrito)
4. Adicione observações se necessário
5. Clique em "Adicionar Candidato"

### Editando um Candidato
1. Localize o candidato no dashboard
2. Clique no ícone de edição (lápis) no card do candidato
3. Modifique as informações desejadas
4. Clique em "Salvar Alterações"

### Movendo Candidatos Entre Etapas
1. Use os botões "Voltar" e "Avançar" nos cards dos candidatos
2. Os botões ficam desabilitados quando não há etapa anterior/posterior disponível

### Excluindo um Candidato
1. Clique no ícone de lixeira no card do candidato
2. Confirme a exclusão na janela de confirmação

## Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework de estilos
- **shadcn/ui**: Biblioteca de componentes UI
- **Lucide React**: Ícones
- **JavaScript (JSX)**: Linguagem de programação

## Estrutura do Projeto

```
kanban-candidatos/
├── src/
│   ├── components/
│   │   ├── AddCandidateModal.jsx    # Modal para adicionar candidatos
│   │   ├── EditCandidateModal.jsx   # Modal para editar candidatos
│   │   ├── CandidateCard.jsx        # Card individual do candidato
│   │   ├── KanbanColumn.jsx         # Coluna do Kanban
│   │   ├── KanbanBoard.jsx          # Dashboard principal
│   │   └── ui/                      # Componentes UI do shadcn
│   ├── App.jsx                      # Componente principal
│   ├── App.css                      # Estilos globais
│   └── main.jsx                     # Ponto de entrada
├── public/                          # Arquivos estáticos
├── package.json                     # Dependências do projeto
└── README.md                        # Este arquivo
```

## Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### Instalação e Execução
1. Navegue até o diretório do projeto:
   ```bash
   cd kanban-candidatos
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```

4. Acesse a aplicação em: `http://localhost:5173`

### Build para Produção
```bash
npm run build
# ou
pnpm run build
```

## Características Técnicas

### Responsividade
- Layout adaptável para desktop e mobile
- Scroll horizontal automático para visualizar todas as colunas
- Cards otimizados para diferentes tamanhos de tela

### Validações
- Campos obrigatórios (Nome, Email, Telefone)
- Validação de formato de email
- Confirmação antes de excluir candidatos

### Performance
- Componentes otimizados com React hooks
- Estado local gerenciado eficientemente
- Renderização condicional para melhor performance

### Usabilidade
- Interface intuitiva e limpa
- Feedback visual para ações do usuário
- Cores diferenciadas para cada etapa do processo
- Ícones descritivos para facilitar navegação

## Dados de Exemplo

A aplicação vem com dados de exemplo pré-carregados para demonstração, incluindo 8 candidatos distribuídos pelas diferentes etapas do processo seletivo.

## Possíveis Melhorias Futuras

- Integração com backend/API
- Autenticação e autorização
- Filtros e busca de candidatos
- Relatórios e exportação de dados
- Notificações por email
- Histórico de mudanças de etapa
- Drag and drop entre colunas
- Anexos de documentos (CV, cartas de apresentação)

---

**Desenvolvido com React e Tailwind CSS**

