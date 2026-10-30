# ✈️ ConnectFlight - Aplicação Web em React

> **Atividade Avaliativa – Criação de Página Inicial em React**  
> **Disciplina:** Programação para WEB II (4º Período)  
> **Docente:** Bruno Bandeira Fernandes  
> **Instituição:** Universidade Estadual do Tocantins (UNITINS)  


---

## 📌 Sobre o Projeto

Este projeto consiste na reprodução fiel do protótipo do Figma proposto na disciplina, expandido com as telas solicitadas para os links de navegação do rodapé (**Destinos**, **Ofertas** e **Contato**), aplicando conceitos modernos de:
- **Componentização no React** (componentes reutilizáveis, modulares e funcionais).
- **Roteamento SPA** com `react-router-dom` (navegação fluida sem recarregar a página).
- **Estilização avançada e responsividade** alinhada ao design system do Figma (Flexbox, CSS Grid, variáveis CSS, transições suaves).
- **Gerenciamento de Estado (`useState`, `useMemo`, `useEffect`)** para filtros de busca em tempo real, modais interativos, contadores promocionais e validação de formulário.

---

## 🎨 Paleta de Cores e Tipografia (Figma Design System)

| Identificador | Hexadecimal | Descrição |
| :--- | :--- | :--- |
| **Primary (Dark)** | `#3F3D56` | Cor base para títulos, textos de destaque e onda do rodapé |
| **Accent (Magenta/Pink)** | `#EE24FF` | Destaque visual da palavra `destino`, badges e botões de ação |
| **Muted Gray** | `#828282` | Textos secundários, parágrafos explicativos e legendas |
| **Light Gray / Background** | `#ECEFF2` | Linha divisória, fundos suaves e bordas sutis |

- **Tipografia:** `Poppins` (títulos e destaques numéricos) e `Inter` (corpo de texto e interface).

---

## 📁 Estrutura de Pastas e Componentização

```text
aula10/
├── public/
│   ├── favicon.svg             # Ícone customizado ConnectFlight
│   └── illustration.png        # Ilustração vetorial otimizada
├── src/
│   ├── assets/
│   │   └── illustration.png    # Ilustração central unDraw
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx       # Componente de tags/selos promocionais
│   │   │   ├── Button.jsx      # Botão reutilizável multi-variante (primary, accent, outline, ghost)
│   │   │   └── Modal.jsx       # Modal acessível para detalhes do pacote de viagem
│   │   ├── layout/
│   │   │   ├── Header.jsx      # Barra de navegação responsiva com menu mobile (hambúrguer)
│   │   │   ├── Footer.jsx      # Rodapé fiel ao Figma (divisor, links e onda SVG #3F3D56)
│   │   │   └── Layout.jsx      # Wrapper com Outlet do React Router
│   │   ├── home/
│   │   │   ├── HeroContent.jsx     # Título e parágrafos com exata tipografia do Figma
│   │   │   ├── HeroIllustration.jsx# Container da ilustração central
│   │   │   └── QuickHighlights.jsx # Cards dos benefícios (voos, hotéis, café, seguro)
│   │   ├── destinos/
│   │   │   ├── DestinationCard.jsx   # Card modular de destino turístico
│   │   │   └── DestinationFilter.jsx # Barra de pesquisa e pílulas de categorias
│   │   ├── ofertas/
│   │   │   ├── OfferBanner.jsx       # Banner com contagem regressiva em tempo real
│   │   │   └── OfferCard.jsx         # Card de pacote promocional com inclusões
│   │   └── contato/
│   │       ├── ContactForm.jsx       # Formulário com validação e feedback de sucesso
│   │       ├── ContactInfo.jsx       # Cards com canais diretos (WhatsApp, 0800, E-mail)
│   │       └── FaqAccordion.jsx      # Acordeão interativo com perguntas frequentes
│   ├── data/
│   │   ├── destinations.js     # Coleção de destinos e categorias
│   │   ├── offers.js           # Ofertas especiais e pacotes completos
│   │   └── faq.js              # Perguntas e respostas frequentes
│   ├── pages/
│   │   ├── Home.jsx            # Página inicial (reprodução fiel do protótipo)
│   │   ├── Destinos.jsx        # Catálogo com filtros de pesquisa e modal de reserva
│   │   ├── Ofertas.jsx         # Vitrine de pacotes promocionais com descontos
│   │   └── Contato.jsx         # Canais de atendimento, formulário e FAQ
│   ├── styles/
│   │   ├── variables.css       # Variáveis de cores, fontes, sombras e bordas
│   │   └── global.css          # Reset moderno, classes utilitárias e animações
│   ├── App.jsx                 # Configuração das rotas SPA e ScrollToTop
│   └── main.jsx                # Ponto de entrada React 19
├── atividade-avaliativa.pdf     # Documento de requisitos da atividade
├── package.json
└── vite.config.js
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado (versão 18 ou superior).

### Passo a passo
1. Abra o terminal na pasta do projeto:
   ```bash
   cd "aula10"
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```text
   http://localhost:5173/
   ```

5. Para gerar o build de produção:
   ```bash
   npm run build
   npm run preview
   ```

---


