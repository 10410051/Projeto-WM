# Tutorial - Site Instituto de Excelência

## 🎯 O que é este projeto
Site institucional para uma faculdade, feito com **HTML5 semântico** e **CSS3 puro** - sem JavaScript ou frameworks.

## 📁 Arquivos do projeto
- **index.html** - Página inicial
- **contato.html** - Página de contato
- **cursos.html** - Lista de cursos
- **medicina.html, engenharia.html, administracao.html** - Páginas específicas dos cursos
- **professores.html** - Página dos professores
- **resultados.html** - Página de resultados
- **estilo_cursos.css** - Todo o CSS do site

## 🎨 Principais blocos de CSS

### 1. **Variáveis de cores**
\`\`\`css
:root {
  --primary-blue: #2563eb;
  --dark-blue: #1e3a8a;
  --light-blue: #dbeafe;
}
\`\`\`
**Para que serve:** Define as cores do site em um lugar só. Mudou aqui, muda em todo lugar.

### 2. **Layout principal com CSS Grid**
\`\`\`css
body {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas:
    "header header"
    "main sidebar";
}
\`\`\`
**Para que serve:** Cria o layout de 2 colunas - conteúdo principal + barra lateral.

### 3. **Cards dos cursos**
\`\`\`css
.programas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.programa-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
\`\`\`
**Para que serve:** Cria os cartões dos cursos em 3 colunas com sombra e cantos arredondados.

### 4. **Responsividade para celular**
\`\`\`css
@media (max-width: 768px) {
  body {
    grid-template-columns: 1fr;
  }
  .programas-grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`
**Para que serve:** No celular, tudo fica em 1 coluna só.

## 🏗️ Principais blocos de HTML

### 1. **Header com navegação**
\`\`\`html
<header class="main-header">
  <nav class="top-nav">
    <section class="logo">
      <span class="logo-icon">🎓</span>
      <strong>Instituto de Excelência</strong>
    </section>
    <ul class="nav-menu">
      <li><a href="index.html">Início</a></li>
      <li><a href="cursos.html">Cursos</a></li>
    </ul>
  </nav>
</header>
\`\`\`
**Para que serve:** Cria o cabeçalho com logo e menu de navegação.

### 2. **Cards de cursos**
\`\`\`html
<article class="programa-card">
  <header class="card-header">
    <figure class="card-icon blue">
      <span>⚙️</span>
    </figure>
    <h3>Engenharia</h3>
  </header>
  <ul class="card-features">
    <li>Projetos de engenharia</li>
  </ul>
  <footer class="card-footer">
    <a href="engenharia.html" class="btn-saiba-mais">Saiba Mais</a>
  </footer>
</article>
\`\`\`
**Para que serve:** Cada cartão de curso com ícone, título, lista de características e botão.

### 3. **Barra lateral (sidebar)**
\`\`\`html
<aside class="sidebar">
  <section class="sidebar-section">
    <h3>📍 Campus Principal</h3>
    <p>Mais de 30 anos no mercado</p>
  </section>
  <section class="sidebar-section">
    <h3>📞 Contato Rápido</h3>
    <p>📞 (11) 3456-7890</p>
    <p>✉️ contato@instituto.edu.br</p>
  </section>
</aside>
\`\`\`
**Para que serve:** Informações extras na lateral direita.

## 🛠️ Tecnologias usadas

### **HTML5 Semântico**
- `<header>` - Cabeçalho
- `<nav>` - Menu de navegação  
- `<main>` - Conteúdo principal
- `<section>` - Seções de conteúdo
- `<article>` - Cartões/artigos
- `<aside>` - Barra lateral
- `<figure>` - Ícones e imagens

### **CSS3 Moderno**
- **CSS Grid** - Layout em colunas
- **Flexbox** - Alinhamento de elementos
- **Media Queries** - Responsividade
- **CSS Variables** - Cores reutilizáveis
- **Box-shadow** - Sombras nos cards
- **Border-radius** - Cantos arredondados

## 📱 Como funciona a responsividade

**Desktop (tela grande):**
- Layout em 2 colunas (conteúdo + sidebar)
- Cards dos cursos em 3 colunas

**Tablet (tela média):**
- Layout em 1 coluna (sidebar vai para baixo)
- Cards dos cursos em 2 colunas

**Celular (tela pequena):**
- Tudo em 1 coluna
- Cards dos cursos em 1 coluna
- Menu de navegação empilhado

## 🎯 Principais características

✅ **Sem JavaScript** - Só HTML e CSS
✅ **Responsivo** - Funciona em qualquer tela
✅ **Semântico** - HTML bem estruturado
✅ **Rápido** - Sem dependências externas
✅ **Acessível** - Funciona com leitores de tela

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador
2. Navegue pelas páginas usando o menu
3. Para editar, modifique os arquivos HTML e CSS
4. Para mudar cores, edite as variáveis no início do CSS
