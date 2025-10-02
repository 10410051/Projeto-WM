# Tutorial
Tutorial de Desenvolvimento do Site do Instituto de Excelência

Processo de Ideação

O processo de ideação para o desenvolvimento deste site começou com a identificação das necessidades principais de uma instituição de ensino superior, como o Instituto de Excelência. Inicialmente, realizamos uma brainstorm para mapear os públicos-alvo: alunos potenciais, alunos atuais, professores e visitantes interessados em informações sobre cursos, resultados e contato.

Etapas principais da ideação:

Pesquisa de requisitos: Analisamos sites semelhantes de universidades e estuduos (ex.: USP, UNICAMP) para identificar elementos essenciais como navegação intuitiva, destaque para cursos, seções de contato e portal do aluno.
Definição de objetivos: O site deve promover os cursos (Engenharia, Medicina, Administração), destacar resultados acadêmicos, fornecer informações sobre professores e facilitar o contato. Priorizamos um design responsivo, acessível e com elementos visuais como emojis para tornar o conteúdo mais atraente.
Wireframing inicial: Criamos esboços manuais e digitais (usando ferramentas como Figma ou papel) para estruturar as páginas: uma página inicial (index.html), páginas específicas para cursos (ex.: engenharia.html, medicina.html), e seções comuns como menu de navegação e rodapé.
Feedback iterativo: Compartilhamos ideias com stakeholders fictícios (alunos e professores) para refinar o conceito, enfatizando a integração de JavaScript para interatividade, como validação de formulários e animações, e CSS para estilização moderna.
Esse processo garantiu que o site fosse user-friendly, informativo e alinhado com os valores de excelência educacional.

Imagens do Protótipo Inicial Desenvolvido

Aqui estão imagens do protótipo inicial criado durante a fase de wireframing e desenvolvimento preliminar.

<img width="2115" height="1184" alt="image" src="https://github.com/user-attachments/assets/3ed497ce-2cf6-4776-bd87-b0bef128713d" />

Protótipo da Página de Cursos (cursos.html):

<img width="2068" height="1204" alt="image" src="https://github.com/user-attachments/assets/c7b8c305-1259-46de-836c-8f0e6ed342ee" />

Caráter Extensionista

O caráter extensionista deste projeto refere-se à sua orientação para ações de extensão universitária, que visam integrar a academia à sociedade, promovendo o conhecimento além das salas de aula. Neste site:

Impacto social: O site facilita o acesso a informações sobre cursos e resultados, incentivando a inclusão educacional. Por exemplo, seções como "Processo Seletivo" em medicina.html mencionam bolsas e ENEM, tornando a educação superior mais acessível a públicos de baixa renda.
Benefícios à comunidade: Conteúdos sobre projetos reais (ex.: em engenharia.html e administracao.html) destacam parcerias com indústrias e empresas, fomentando a transferência de conhecimento para o mercado de trabalho e contribuindo para o desenvolvimento local (ex.: sustentabilidade na construção, energias renováveis).
Extensão prática: O portal do aluno e formulários de contato promovem interação contínua, permitindo que a instituição ofereça serviços como mentoria e eventos de networking, alinhados com práticas extensionistas como incubadoras de startups e olimpíadas científicas mencionadas em resultados.html.
Sustentabilidade: O design minimalista e uso de emojis promove uma comunicação inclusiva, atendendo a diversidade cultural e geracional, reforçando o papel extensionista da educação como ferramenta de transformação social.
Em resumo, o site não é apenas informativo, mas uma ponte entre a instituição e a sociedade, alinhado aos princípios de extensão universitária definidos pelo MEC.

Explicações de Todo Código Desenvolvido (Formato de Tutorial)

Este tutorial explica o código desenvolvido para o site, dividido por arquivos. O site usa HTML para estrutura, CSS para estilo e JavaScript para interatividade. Assumimos um setup básico: clone o repositório, abra em um editor como VS Code, e rode em um servidor local (ex.: Live Server extension). Inclua o CSS em cada HTML com <link rel="stylesheet" href="style.css"> e o JS com <script src="script.js"></script>.

Exemplo: index.html (Página Inicial)

<!-- Header comum -->
<header>
    <div class="logo">🎓 Instituto de Excelência Educação Superior</div>
    <nav>
        <ul>
            <li>Início</li>
            <li>Cursos</li>
            <li>Projetos</li>
            <li>Professores</li>
            <li>Contato</li>
        </ul>
    </nav>
    <button>Inscreva-se</button>
</header>

<!-- Conteúdo principal -->
<main>
    <h1>Excelência em Educação Superior</h1>
    <p>Formando líderes e inovadores para o futuro</p>
    <!-- Cards para programas -->
    <section class="programas">
        <div class="programa-card">
            <h2>Engenharia</h2>
            <p>Projetos de engenharia e pós-graduação</p>
            <button>Saiba Mais</button>
        </div>
        <!-- Outros cards similares -->
    </section>
</main>

<!-- Rodapé comum -->
<footer>
    <div class="instituicao">🏢 Nossa Instituição</div>
    <div class="contato">📞 Contato Rápido</div>
    <div class="portal">👤 Portal do Aluno</div>
</footer>

Tutorial:

Crie o header para navegação consistente. Use <nav> para acessibilidade.

No main, use seções com classes como .programa-card para estilização CSS (ex.: flexbox para layout em cards).

Rodapé inclui elementos repetidos; para DRY (Don't Repeat Yourself), considere templates ou includes em um framework futuro.

Páginas Específicas (ex.: engenharia.html, medicina.html, etc.)Similar ao index, mas com conteúdo focado. Por exemplo, em engenharia.html:

<section class="areas">
    <div class="area-card">
        <h3>Engenharia Civil</h3>
        <ul>
            <li>Construção e infraestrutura</li>
            <!-- Itens da lista -->
        </ul>
    </div>
    <!-- Outros cards -->
</section>

Tutorial: Use listas <ul> para itens bulletados. Adicione emojis para visual atrativo. Para responsividade, use media queries em CSS (ver abaixo).

Outras Páginas:

cursos.html: Lista graduação e técnico em seções separadas. Tutorial: Use headings <h2> para hierarquia SEO.

professores.html: Cards de professores com botões "Contatar". Tutorial: Integre links mailto: para emails.

contato.html: Formulário de mensagem. Tutorial: Adicione <form> com inputs; valide com JS (ver abaixo).

resultados.html e administracao.html: Foco em conquistas e áreas. Tutorial: Use ícones para destacar seções.

2. Estrutura do index.html com Classes Relevantes
O index.html contém a seguinte estrutura, com classes que correspondem aos estilos do style.css:

<body>
    <header class="main-header">
        <div class="top-nav">
            <div class="logo">
                <span class="logo-icon">🎓</span>
                <div>
                    <strong>Instituto de Excelência</strong>
                    <small>Educação Superior</small>
                </div>
            </div>
            <nav class="nav-menu">
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="cursos.html">Cursos</a></li>
                    <li><a href="projetos.html">Projetos</a></li>
                    <li><a href="professores.html">Professores</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </nav>
            <button class="btn-inscricao">Inscreva-se</button>
        </div>
    </header>

    <main>
        <section class="hero-section">
            <h1>Excelência em Educação Superior</h1>
            <p>Formando líderes e inovadores para o futuro</p>
            <p>Programas acadêmicos de alta qualidade com metodologia inovadora</p>
            <div class="hero-actions">
                <button class="btn">🎓 Conheça Nossos Cursos</button>
                <button class="btn">📊 Ver Resultados</button>
            </div>
        </section>

        <section class="programas">
            <h2>🎯 Programas Acadêmicos</h2>
            <div class="programas-grid">
                <div class="programa-card">
                    <span>⚙️</span>
                    <h2>Engenharia</h2>
                    <p>Projetos de engenharia e pós-graduação</p>
                    <p>Laboratórios de última geração</p>
                    <p>Parcerias com a indústria</p>
                    <button class="btn-saiba-mais">Saiba Mais</button>
                </div>
                <!-- Outros cards para Medicina e Administração -->
            </div>
        </section>
    </main>

    <footer>
        <div class="instituicao">
            <h2>🏢 Nossa Instituição</h2>
            <p>📍 CAMPUS PRINCIPAL</p>
            <p>Mais de 30 anos no mercado</p>
            <p>Mais de 5000 alunos formados</p>
            <p>Nota máxima no MEC</p>
            <p>Estrutura moderna e completa</p>
        </div>
        <div class="contato">
            <h2>📞 Contato Rápido</h2>
            <p>📞 (11) 3456-7890</p>
            <p>📧 contato@instituto.edu.br</p>
            <p>📍 Av. Paulista - SP</p>
        </div>
        <div class="portal">
            <h2>👤 Portal do Aluno</h2>
            <button class="btn-portal">Acessar Portal</button>
        </div>
    </footer>
</body>

3. Estilos CSS Aplicados ao index.html

Abaixo, explico os trechos do style.css que estilizam o index.html, com instruções de como aplicá-los e testá-los.

3.1. Estilos Globais
:root {
  --primary-blue: #2563eb;
  --dark-blue: #1e3a8a;
  --light-blue: #dbeafe;
  --red: #dc2626;
  --light-red: #fecaca;
  --green: #16a34a;
  --light-green: #bbf7d0;
  --orange: #f59e0b;
  --gray-50: #f9fafb;
  --gray-200: #e5e7eb;
  --gray-800: #1f2937;
  --white: #ffffff;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: var(--gray-50);
  color: var(--gray-800);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  scroll-behavior: smooth;
}

Tutorial:
Variáveis: Definidas em :root, as variáveis como --primary-blue e --orange são usadas no header e botões. Para alterar a paleta de cores, modifique os valores em :root.
Reset: margin: 0; padding: 0; garante consistência entre navegadores. box-sizing: border-box simplifica cálculos de layout.
Body: Define a fonte padrão e fundo claro (--gray-50). min-height: 100vh assegura que o rodapé fique no fim da página. Teste: Abra o index.html e confirme o fundo claro e a fonte legível.

3.2. Animações
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

Conclusão com os Aprendizados Adquiridos

A estilização da página inicial com o style.css reforçou a importância de um design bem planejado para atender às necessidades do usuário. Aprendemos a usar variáveis CSS para consistência, animações para melhorar a UX, e media queries para responsividade. O caráter extensionista foi destacado pela clareza visual, que promove inclusão e engajamento com a comunidade. Principais aprendizados incluem:
Modularidade: Variáveis CSS facilitam manutenção e alterações de tema.
Acessibilidade: Uso de cores contrastantes (ex.: --white sobre --primary-blue) melhora a legibilidade.
Responsividade: Media queries garantem uma experiência fluida em todos os dispositivos. No futuro, podemos adicionar ARIA labels para acessibilidade e otimizar o CSS com ferramentas como PostCSS. Este projeto consolidou habilidades em estilização front-end e destacou o papel do design na educação extensionista.
