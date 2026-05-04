# Sistema de Suporte T.I

Um sistema completo de gerenciamento de suporte técnico para empresas, desenvolvido com tecnologias web modernas e design responsivo.

## 📋 Descrição

O Sistema de Suporte T.I é uma aplicação web completa para gerenciamento de chamados de suporte técnico, contratos, atendimentos e relatórios. Oferece uma interface intuitiva e responsiva para técnicos e gestores acompanharem o fluxo de trabalho de suporte.

## ✨ Funcionalidades

### 🏠 Dashboard
- **Visão geral** do sistema com métricas em tempo real
- **Cards informativos** mostrando status de chamados, contratos ativos, etc.
- **Gráfico interativo** com dados de chamados por status
- **Sistema de alertas** para notificações importantes

### 🎫 Gerenciamento de Chamados
- **Criação de novos chamados** com formulários intuitivos
- **Listagem e filtros** por status (Aberto, Em Andamento, Concluído)
- **Priorização** (Baixa, Média, Alta, Crítica)
- **Acompanhamento** de responsável e data

### 📄 Contratos
- **Gestão de contratos** ativos e vencidos
- **Alertas de vencimento** com contadores de dias restantes
- **Informações detalhadas** de vigência e saldo
- **Status visual** (Ativo, Próximo do Vencimento, Vencido)

### 👨‍💼 Atendimentos
- **Registro de serviços realizados**
- **Vinculação com chamados** existentes
- **Controle de horas trabalhadas**
- **Upload de arquivos** e documentação

### 📊 Relatórios
- **Geração de relatórios** por contrato e período
- **Filtros avançados** por mês de referência
- **Exportação em PDF** (simulado)

### 🔐 Sistema de Login
- **Autenticação segura** (estrutura preparada)
- **Interface moderna** e responsiva

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Interatividade e funcionalidades

### Bibliotecas e Frameworks
- **[Font Awesome 6.5.1](https://fontawesome.com/)** - Ícones vetoriais
- **[Chart.js](https://www.chartjs.org/)** - Gráficos interativos
- **[Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)** - Tipografia moderna

### Design e UX
- **Design Responsivo** - Funciona em desktop, tablet e mobile
- **Sidebar Interativo** - Navegação lateral expansível
- **Interface Moderna** - Design limpo e intuitivo

## 📁 Estrutura do Projeto

```
sistema_suporte_T.I/
├── README.md
├── templates/
│   ├── login.html                    # Página de login
│   ├── dashboard.html               # Dashboard principal
│   ├── chamados.html                # Lista de chamados
│   ├── contratos.html               # Gestão de contratos
│   ├── atendimento.html             # Registro de atendimentos
│   ├── novo_chamado.html            # Formulário novo chamado
│   ├── Relatorios.html              # Relatórios do sistema
│   ├── javascript/
│   │   ├── deshboard.js             # JS do dashboard
│   │   ├── chamados.js              # JS da lista de chamados
│   │   ├── atendimento.js           # JS do atendimento
│   │   ├── novo_chamado.js          # JS do novo chamado
│   │   ├── Relatorios.js            # JS dos relatórios
│   │   └── contratos.js             # JS dos contratos
│   └── style/
│       ├── deshboard.css            # CSS do dashboard
│       ├── chamados.css             # CSS da lista de chamados
│       ├── contratos.css            # CSS dos contratos
│       ├── atendimento.css          # CSS do atendimento
│       ├── novo_chamado.css         # CSS do novo chamado
│       ├── Relatorios.css           # CSS dos relatórios
│       └── login.css                # CSS do login
└── img/                             # Imagens e ícones
```

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sistema_suporte_T.I.git
   cd sistema_suporte_T.I
   ```

2. **Abra no navegador:**
   - Abra o arquivo `templates/dashboard.html` diretamente no navegador
   - Ou use um servidor local como Live Server do VS Code

3. **Navegação:**
   - Use o sidebar lateral para navegar entre as páginas
   - Clique no botão chevron (>) para expandir/colapsar o menu

## 📱 Responsividade

O sistema é totalmente responsivo e se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop (>1024px)**: Layout completo com sidebar expandido
- **Tablet (768px-1024px)**: Sidebar compacto, cards em 2 colunas
- **Mobile (≤768px)**: Sidebar oculto por padrão, cards em 1 coluna
- **Mobile Pequeno (≤480px)**: Otimizações extras para telas pequenas

## 🎨 Design System

### Cores Principais
- **Azul Principal**: `#155dfc` - Botões, destaques, sidebar ativo
- **Verde**: `#00a63e` - Status concluído, sucesso
- **Laranja**: `#f54a00` - Alertas, status urgente
- **Cinza**: `#6b6b6b` - Texto secundário, elementos neutros
- **Fundo**: `#eef2f5` - Background geral

### Tipografia
- **Fonte**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Tamanhos**: Responsivos conforme dispositivo

### Componentes
- **Cards**: Elementos informativos com ícones e métricas
- **Sidebar**: Navegação lateral expansível
- **Tabelas**: Listagens com filtros e ações
- **Formulários**: Entrada de dados com validação
- **Botões**: Ações primárias e secundárias

## 🔧 Funcionalidades JavaScript

### Sidebar Interativo
- Expansão/colapso automático
- Navegação entre páginas
- Destaque do item ativo
- Fechamento automático em mobile
- Suporte a teclado (ESC)

### Gráficos (Chart.js)
- Gráfico de barras responsivo
- Cores personalizadas
- Legendas e tooltips
- Redimensionamento automático

### Formulários
- Validação de campos obrigatórios
- Feedback visual (toast messages)
- Reset automático após envio

## 📊 Dados de Demonstração

O sistema inclui dados de exemplo para demonstração:

- **4 Contratos** com diferentes status de vigência
- **5 Chamados** em diversos status
- **Gráfico** com dados simulados
- **Alertas** de sistema

## 🤝 Créditos

### Sidebar
O design e funcionalidade do sidebar lateral foi baseado no tutorial da **Larissa Kich** (@larakich), adaptado e personalizado para este projeto.

### Ícones
- **Font Awesome** - Biblioteca de ícones gratuita
- **Ícones customizados** - Desenvolvidos especificamente para o projeto

## 📝 Licença

Este projeto é de uso educacional e pessoal. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## 👨‍💻 Desenvolvido por

Marcos coelho - Desenvolvedor Full Stack
Gulherme - Desenvolvedor Full Stack

---

**Última atualização**: Maio 2026
