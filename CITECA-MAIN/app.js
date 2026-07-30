// CITECA static — vanilla JS
(function () {
  const translations = {
    en: {
      langName: "EN", switchTo: "Mudar para Português",
      nav: { home: "Home", about: "About Us", research: "Research Lines", projects: "Projects", internationalization: "Internationalization", events: "Events", contact: "Contact" },
      hero: { badge: "ISTEC Porto Research Center", title: "Research Center for Advanced Technologies", description: "Driving innovation through excellent scientific research, cooperation and knowledge transfer across information technologies, computer science and digital transformation.", ctaResearch: "Explore our Research", ctaContact: "Get in Touch" },
      heroExtra: { scroll: "Scroll to explore" },
      sections: {
        stats: { eyebrow: "By the numbers", title: "A center of measurable impact" },
        projects: { eyebrow: "Selected work", title: "Projects shaping tomorrow", subtitle: "Applied research delivered with industry, government and academic partners.", cta: "View project" },
        publications: { eyebrow: "Publications", title: "Peer-reviewed contributions", subtitle: "A curated selection of recent papers from CITECA researchers.", search: "Search publications…", all: "All", read: "Read paper" },
        researchers: { eyebrow: "People", title: "Meet the researchers", subtitle: "A transdisciplinary team of scientists, engineers and educators." },
        resources: { eyebrow: "Resources", title: "Open datasets & toolkits", subtitle: "Download reports, datasets and open-source releases from our labs.", download: "Download" },
      },
      homeResearch: { eyebrow: "Research lines", title: "Research areas aligned with our mission", subtitle: "Our researchers contribute to the advancement of scientific and technological knowledge in the fields that shape research, innovation and international collaboration." },
      stats: { researchers: "Researchers", projects: "Active projects", publications: "Publications", events: "Events hosted" },
      research: {
        eyebrow: "Research", title: "Our Research Lines",
        description: "CITECA conducts research in strategic areas of information technologies and advanced scientific inquiry, contributing to innovation, knowledge transfer and international cooperation.",
        topicsLabel: "Research Topics",
        lines: [
          { title: "Information Technologies", description: "Research on digital infrastructures, intelligent systems and enabling technologies for modern organizations.", topics: ["Digital Infrastructure", "Emerging Technologies", "Innovation Systems", "Technology Transfer"] },
          { title: "Computer Science", description: "Foundational research in algorithms, computation, systems and scientific methods for complex problem solving.", topics: ["Algorithms", "Computational Models", "Systems Research", "Scientific Computing"] },
          { title: "Software Engineering", description: "Research on reliable, scalable and sustainable software solutions for academic and industrial applications.", topics: ["Software Architecture", "DevOps", "Quality Engineering", "Human-Centered Systems"] },
          { title: "Networks and Communications", description: "Investigation of communication systems, connected environments and resilient digital networks.", topics: ["Communication Systems", "Connected Environments", "Network Security", "Edge Connectivity"] },
          { title: "Artificial Intelligence", description: "Advanced research in machine learning, deep learning, natural language processing and computer vision.", topics: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"] },
          { title: "Data Science", description: "Research on data analytics, modelling, knowledge extraction and evidence-based decision making.", topics: ["Data Analytics", "Modelling", "Knowledge Extraction", "Decision Support"] },
          { title: "Digital Transformation", description: "Applied research on innovation, digitization and the adoption of emerging technologies in organisations.", topics: ["Digital Strategy", "Innovation Adoption", "Transformation Processes", "Technology Integration"] },
        ],
      },
      about: {
        eyebrow: "About us", title: "About Us",
        description: "CITECA is the Centre for Research in Advanced Technologies of ISTEC Porto, dedicated to scientific excellence and technological innovation.",
        historyTitle: "History",
        history: "By order of the Director of ISTEC-Porto, the Centre for Research in Advanced Technologies (CITECA) was created in September 2020. The Covid-19 pandemic, change of facilities and changes in the teaching staff implied that the initially planned programme was altered; the proposed objectives were not achieved, and the plan underwent a profound remodelling. The present strategic plan, which aims to be more realistic, was revised based on the previously encountered constraints, but with the reinforcement of new researchers, based on the hiring of new teaching staff for ISTEC Porto.",
        missionTitle: "Mission",
        mission1: "CITECA is the Research Centre for Advanced Technologies at ISTEC Porto, dedicated to research, innovation, cooperation and knowledge transfer in advanced technologies.",
        mission2: "Its work is grounded in scientific excellence, interdisciplinary collaboration and international partnerships, with the aim of strengthening the connection between academia and the wider socio-economic ecosystem through high-impact research and shared knowledge.",
      },
      contact: {
        eyebrow: "Contact", title: "Contact",
        subtitle: "Get in touch with us. We will get back to you as soon as possible.",
        infoTitle: "Contact Information", addressLabel: "Address", emailLabel: "Email", phoneLabel: "Phone",
        formTitle: "Send us a Message", required: "Fields marked with * are required.",
        name: "Full name *", email: "Email *", subject: "Subject *", message: "Message *",
        send: "Send Message", success: "Thanks — we'll be in touch shortly.",
      },
      projects: {
        pageTitle: "Projects — CITECA",
        eyebrow: "Projects",
        title: "Applied research initiatives",
        description: "CITECA develops collaborative projects that connect scientific discovery, technological innovation and societal impact.",
        focusTitle: "Current focus areas",
        focusText: "Our projects span intelligent systems, digital platforms, public-sector innovation and advanced data-driven solutions.",
      },
      internationalization: {
        pageTitle: "Internationalization — CITECA",
        eyebrow: "Internationalization",
        title: "Global collaboration and exchange",
        description: "CITECA strengthens partnerships across institutions, networks and research communities to support international cooperation.",
        focusTitle: "Strategic partnerships",
        focusText: "Internationalization is an integral part of our research agenda, enabling mobility, joint projects and shared knowledge creation.",
      },
      events: {
        pageTitle: "Events — CITECA",
        eyebrow: "Events",
        title: "Scientific events and knowledge exchange",
        description: "CITECA organizes and participates in events that promote discussion, collaboration and dissemination of research outcomes.",
        focusTitle: "Our Activities",
        focusText: "Events remain a core channel for sharing expertise, engaging partners and strengthening the research community.",
      },
      footer: { description: "CITECA — ISTEC Porto Research Center for Advanced Technologies. Driving innovation through excellent scientific research and knowledge transfer.", quickLinks: "Quick Links", contact: "Contact", rights: "All rights reserved", wcag: "WCAG 2.1 AA compliant", newsletter: "Newsletter", newsletterDesc: "Quarterly updates on research, papers and events.", email: "you@domain.com" },
    },
    pt: {
      langName: "PT", switchTo: "Switch to English",
      nav: { home: "Início", about: "Sobre Nós", research: "Linhas de Investigação", projects: "Projetos", internationalization: "Internacionalização", events: "Eventos", contact: "Contactos" },
      hero: { badge: "Centro de Investigação do ISTEC Porto", title: "Centro de Investigação em Tecnologias Avançadas", description: "Impulsionando a inovação através da investigação científica de excelência e transferência de conhecimento.", ctaResearch: "Conheça a nossa Investigação", ctaContact: "Entre em Contacto" },
      heroExtra: { scroll: "Deslize para explorar" },
      sections: {
        stats: { eyebrow: "Em números", title: "Um centro de impacto mensurável" },
        projects: { eyebrow: "Projetos em destaque", title: "Projetos a moldar o amanhã", subtitle: "Investigação aplicada com parceiros da indústria, governo e academia.", cta: "Ver projeto" },
        publications: { eyebrow: "Publicações", title: "Contribuições revistas por pares", subtitle: "Uma seleção de artigos recentes dos investigadores do CITECA.", search: "Pesquisar publicações…", all: "Todas", read: "Ler artigo" },
        researchers: { eyebrow: "Pessoas", title: "Conheça os investigadores", subtitle: "Uma equipa transdisciplinar de cientistas, engenheiros e docentes." },
        resources: { eyebrow: "Recursos", title: "Datasets e ferramentas abertas", subtitle: "Descarregue relatórios, datasets e software aberto dos nossos laboratórios.", download: "Descarregar" },
      },
      homeResearch: { eyebrow: "Linhas de Investigação", title: "Áreas de investigação alinhadas com a nossa missão", subtitle: "Os nossos investigadores contribuem para o avanço do conhecimento científico e tecnológico em áreas que reforçam a investigação, a inovação e a colaboração internacional." },
      stats: { researchers: "Investigadores", projects: "Projetos ativos", publications: "Publicações", events: "Eventos realizados" },
      research: {
        eyebrow: "Investigação", title: "Linhas de Investigação",
        description: "O CITECA desenvolve investigação em áreas estratégicas das tecnologias de informação e da ciência avançada, contribuindo para a inovação, a transferência de conhecimento e a cooperação internacional.",
        topicsLabel: "Tópicos de Investigação",
        lines: [
          { title: "Tecnologias de Informação", description: "Investigação em infraestruturas digitais, sistemas inteligentes e tecnologias de apoio às organizações modernas.", topics: ["Infraestruturas Digitais", "Tecnologias Emergentes", "Sistemas de Inovação", "Transferência de Tecnologia"] },
          { title: "Ciência de Computadores", description: "Investigação fundamental em algoritmos, computação, sistemas e métodos científicos para resolução de problemas complexos.", topics: ["Algoritmos", "Modelos Computacionais", "Investigação em Sistemas", "Computação Científica"] },
          { title: "Engenharia de Software", description: "Investigação em soluções de software fiáveis, escaláveis e sustentáveis para aplicações académicas e industriais.", topics: ["Arquitetura de Software", "DevOps", "Engenharia de Qualidade", "Sistemas Centrado no Utilizador"] },
          { title: "Redes e Comunicações", description: "Investigação em sistemas de comunicação, ambientes conectados e redes digitais resilientes.", topics: ["Sistemas de Comunicação", "Ambientes Conectados", "Segurança de Redes", "Conectividade de Edge"] },
          { title: "Inteligência Artificial", description: "Investigação avançada em machine learning, deep learning, processamento de linguagem natural e visão computacional.", topics: ["Machine Learning", "Deep Learning", "Processamento de Linguagem Natural", "Visão Computacional"] },
          { title: "Ciência de Dados", description: "Investigação em análise de dados, modelação, extração de conhecimento e tomada de decisão baseada em evidência.", topics: ["Análise de Dados", "Modelação", "Extração de Conhecimento", "Suporte à Decisão"] },
          { title: "Transformação Digital", description: "Investigação aplicada em inovação, digitalização e adoção de tecnologias emergentes nas organizações.", topics: ["Estratégia Digital", "Adoção da Inovação", "Processos de Transformação", "Integração de Tecnologias"] },
        ],
      },
      about: {
        eyebrow: "Sobre nós", title: "Sobre Nós",
        description: "O CITECA é o Centro de Investigação em Tecnologias Avançadas do ISTEC Porto, dedicado à excelência científica e à inovação tecnológica.",
        historyTitle: "História",
        history: "Por despacho do Sr. Diretor do ISTEC-Porto foi criado em setembro de 2020 o Centro de Investigação em Tecnologias Avançadas (CITECA). A pandemia Covid-19, mudança de instalações e alterações no quadro de pessoal docente, implicaram que o plano inicialmente previsto tenha sido alterado; os objetivos propostos não foram alcançados, tendo o plano sofrido uma profunda remodelação. Assim o presente plano estratégico, que se pretende mais realista, foi revisto com base nos constrangimentos anteriormente havidos, mas com o reforço de novos investigadores, com base na contratação de novos docentes para o ISTEC Porto.",
        missionTitle: "Missão",
        mission1: "O CITECA é o Centro de Investigação em Tecnologias Avançadas do ISTEC Porto, dedicado à investigação, inovação, cooperação e transferência de conhecimento em tecnologias avançadas.",
        mission2: "O seu trabalho assenta na excelência científica, na colaboração interdisciplinar e nas parcerias internacionais, com o objetivo de fortalecer a ligação entre a academia e o ecossistema socioeconómico através de investigação de alto impacto e conhecimento partilhado.",
      },
      contact: {
        eyebrow: "Contacto", title: "Contacto",
        subtitle: "Entre em contacto connosco. Responderemos o mais brevemente possível.",
        infoTitle: "Informações de Contacto", addressLabel: "Morada", emailLabel: "Email", phoneLabel: "Telefone",
        formTitle: "Envie-nos uma Mensagem", required: "Os campos marcados com * foram obrigatórios.",
        name: "Nome completo *", email: "Email *", subject: "Assunto *", message: "Mensagem *",
        send: "Enviar Mensagem", success: "Obrigado — entraremos em contacto em breve.",
      },
      projects: {
        pageTitle: "Projetos — CITECA",
        eyebrow: "Projetos",
        title: "Iniciativas de investigação aplicada",
        description: "O CITECA desenvolve projetos colaborativos que ligam a descoberta científica, a inovação tecnológica e o impacto societal.",
        focusTitle: "Áreas de foco atuais",
        focusText: "Os nossos projetos abrangem sistemas inteligentes, plataformas digitais, inovação no setor público e soluções avançadas orientadas por dados.",
      },
      internationalization: {
        pageTitle: "Internacionalização — CITECA",
        eyebrow: "Internacionalização",
        title: "Colaboração e intercâmbio global",
        description: "O CITECA reforça parcerias entre instituições, redes e comunidades científicas para apoiar a cooperação internacional.",
        focusTitle: "Parcerias estratégicas",
        focusText: "A internacionalização é parte integrante da nossa agenda de investigação, permitindo mobilidade, projetos conjuntos e criação partilhada de conhecimento.",
      },
      events: {
        pageTitle: "Eventos — CITECA",
        eyebrow: "Eventos",
        title: "Eventos científicos e troca de conhecimento",
        description: "O CITECA organiza e participa em eventos que promovem discussão, colaboração e divulgação dos resultados de investigação.",
        focusTitle: "As nossas atividades",
        focusText: "Os eventos continuam a ser um canal essencial para partilhar conhecimento, envolver parceiros e fortalecer a comunidade científica.",
      },
      footer: { description: "CITECA — Centro de Investigação em Tecnologias Avançadas do ISTEC Porto. A impulsionar a inovação através da investigação científica de excelência e transferência de conhecimento.", quickLinks: "Links Rápidos", contact: "Contactos", rights: "Todos os direitos reservados", wcag: "Em conformidade com WCAG 2.1 AA", newsletter: "Newsletter", newsletterDesc: "Atualizações trimestrais sobre investigação, artigos e eventos.", email: "voce@dominio.com" },
    },
  };

  const STORAGE_KEY = "citeca.lang";
  const DEFAULT_LANGUAGE = "en";
  const SUPPORTED_LANGUAGES = new Set(["en", "pt"]);
  let lang = readStoredLanguage();

  function readStoredLanguage() {
    try { return SUPPORTED_LANGUAGES.has(localStorage.getItem(STORAGE_KEY)) ? localStorage.getItem(STORAGE_KEY) : DEFAULT_LANGUAGE; } catch { return DEFAULT_LANGUAGE; }
  }

  function getTranslationValue(obj, path) {
    return path.split(".").reduce((currentValue, key) => (currentValue == null ? currentValue : currentValue[key]), obj);
  }

  function applyI18n() {
    const translationSet = translations[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getTranslationValue(translationSet, element.getAttribute("data-i18n"));
      if (typeof value === "string") element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attributeName, path] = pair.split(":");
        if (!attributeName || !path) return;
        const value = getTranslationValue(translationSet, path.trim());
        if (typeof value === "string") element.setAttribute(attributeName.trim(), value);
      });
    });
    
    // Safely apply the active classes to the toggle buttons
    document.querySelectorAll(".lang-toggle").forEach((button) => {
      button.setAttribute("aria-label", translationSet.switchTo);
      button.setAttribute("title", translationSet.switchTo);
      const enEl = button.querySelector(".en");
      const ptEl = button.querySelector(".pt");
      if (enEl) enEl.classList.toggle("off", lang !== "en");
      if (ptEl) ptEl.classList.toggle("off", lang !== "pt");
    });

    if (typeof window.renderResearch === "function") window.renderResearch(translationSet);
  }

  window.__setLang = (nextLanguage) => { 
    lang = nextLanguage; 
    try { localStorage.setItem(STORAGE_KEY, nextLanguage); } catch {} 
    applyI18n(); 
  };
  window.__getLang = () => lang;
  window.__t = () => translations[lang];

  // ==========================================
  // API ENGINE
  // ==========================================
  const API_BASE = "http://localhost:3000/api";
  async function requestJson(endpoint, fallback) {
    try { const response = await fetch(`${API_BASE}${endpoint}`); return response.ok ? await response.json() : fallback; } catch { return fallback; }
  }

  // 1. EXTENDED RESEARCHERS GRID
  async function populateResearchers() {
    const target = document.querySelector(".grid-people");
    if (!target) return;
    target.style.alignItems = "flex-start";
    const researchers = await requestJson("/researchers", []);
    target.innerHTML = researchers.map((p, index) => {
      const name = p.name || p.full_name || "Researcher";
      const fallbackInitials = name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase();
      const avatarClass = ["h1", "h2", "h3", "h4"][index % 4];
      return `
        <li class="card person" style="display: flex; flex-direction: column; padding: 20px;">
          ${p.image_url ? `<img src="${p.image_url}" alt="${name}" class="avatar" style="object-fit: cover;">` : `<div class="avatar ${avatarClass}">${fallbackInitials}</div>`}
          <h3 style="margin-top: 12px; font-size: 18px;">${name}</h3>
          <p class="role" style="font-size: 13px; margin-bottom: 12px;">${p.role || p.position || 'Academic Staff'}</p>
          <div style="margin-top: auto;">
            ${(p.research_areas || p.status_membership) ? `
              <ul class="tags" style="margin-bottom: 10px; padding: 0; display: flex; flex-wrap: wrap; gap: 6px;">
                ${p.research_areas ? `<li class="chip" style="font-size: 11px; padding: 4px 8px;">${p.research_areas}</li>` : ''}
                ${p.status_membership ? `<li class="chip" style="font-size: 11px; padding: 4px 8px; background: #eef2f6; color: #444;">${p.status_membership}</li>` : ''}
              </ul>
            ` : ''}
            ${p.bio ? `<p style="font-size: 13px; color: #555; line-height: 1.4; margin-bottom: 12px;">${p.bio}</p>` : ''}
            <div class="socials" style="margin-top: 12px;">
              ${p.email ? `<a href="mailto:${p.email}" class="social" title="Email"><i data-icon="mail" data-size="14"></i></a>` : ''}
              ${p.linkedin_url ? `<a href="${p.linkedin_url}" target="_blank" class="social" title="LinkedIn"><i data-icon="linkedin" data-size="14"></i></a>` : ''}
              ${p.google_scholar ? `<a href="${p.google_scholar}" target="_blank" class="social" title="Google Scholar" style="font-size: 14px; text-decoration: none;">🎓</a>` : ''}
            </div>
            ${(p.orcid_id || p.ciencia_id) ? `
              <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #eee; font-size: 11px; color: #888;">
                ${p.orcid_id ? `<div style="margin-bottom: 2px;">ORCID: <strong style="color: #666;">${p.orcid_id}</strong></div>` : ''}
                ${p.ciencia_id ? `<div>Ciência ID: <strong style="color: #666;">${p.ciencia_id}</strong></div>` : ''}
              </div>
            ` : ''}
          </div>
        </li>`;
    }).join("");
    renderIcons();
  }

  // 2. EXTENDED PROJECTS GRID
  async function populateProjects() {
    const target = document.querySelector(".grid-projects");
    if (!target) return;
    target.style.alignItems = "flex-start";
    const projects = await requestJson("/projects", []);
    target.innerHTML = projects.map((p, idx) => {
      const inlineBanner = p.image_url ? `style="background-image:url('${p.image_url}'); background-size:cover; background-position:center;"` : '';
      return `
        <li class="card project">
          <a href="project.html?id=${p.id}" style="display: flex; flex-direction: column; text-decoration: none; color: inherit;">
            <div class="cover p${(idx % 4) + 1}" ${inlineBanner}><span class="tag" style="font-size: 11px;">${p.category || "Research"}</span></div>
            <div class="body" style="padding: 16px; display: flex; flex-direction: column;">
              <div>
                <h3 style="font-size: 18px; margin-bottom: 6px;">${p.title}</h3>
                ${p.summary ? `<p style="font-size: 13px; line-height: 1.4;">${p.summary}</p>` : ''}
                ${(p.funding_entity || p.principal_investigator) ? `
                  <div style="margin-top: 12px; font-size: 12px; color: #666;">
                    ${p.funding_entity ? `<div style="margin-bottom: 2px;"><strong>Funding:</strong> ${p.funding_entity} ${p.budget ? `(€${p.budget})` : ''}</div>` : ''}
                    ${p.principal_investigator ? `<div><strong>PI:</strong> ${p.principal_investigator}</div>` : ''}
                  </div>
                ` : ''}
              </div>
              <span class="arrow" style="margin-top: 16px; align-self: flex-end;"><i data-icon="arrow-ur" data-size="14"></i></span>
            </div>
          </a>
        </li>`;
    }).join("");
    renderIcons();
  }

  // 3. EXTENDED EVENTS SPLIT-RENDER
  async function populateEvents() {
    const target = document.getElementById("events-list");
    if (!target) return;
    const events = await requestJson("/events", []);
    const now = new Date();
    now.setHours(0,0,0,0); 

    const upcoming = [];
    const past = [];

    events.forEach(e => {
      const eDate = e.event_date ? new Date(e.event_date) : now;
      if(eDate >= now) upcoming.push(e);
      else past.push(e);
    });

    function renderBlock(arr, title) {
      if(arr.length === 0) return `<p style="color:#666; font-size: 14px; font-style:italic; margin-bottom:40px;">No events listed.</p>`;
      return `
        <h3 style="margin: 30px 0 16px 0; color: #0B3C6D; font-size: 22px; border-bottom: 2px solid #eee; padding-bottom: 8px;">${title}</h3>
        <ul class="grid-projects" style="margin-bottom: 40px; align-items: flex-start;">
          ${arr.map((e, idx) => {
            const dateStr = e.event_date ? new Date(e.event_date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'TBA';
            const timeStr = e.start_time ? ` &bull; ${e.start_time.substring(0,5)}` : '';
            const inlineBanner = e.image_url ? `style="background-image:url('${e.image_url}'); background-size:cover; background-position:center;"` : '';
            return `
              <li class="card project" style="cursor: pointer;">
                <a href="event.html?id=${e.id}" style="display: flex; flex-direction: column; text-decoration: none; color: inherit;">
                  <div style="display: flex; flex-direction: column;">
                    <div class="cover p${(idx % 4) + 1}" ${inlineBanner}>
                      <span class="tag" style="font-size: 11px;">${e.category || 'Event'}</span>
                    </div>
                    <div class="body" style="padding: 16px; display: flex; flex-direction: column;">
                      <div style="margin-bottom: 10px; font-size: 12px; font-weight: 600; color: #1CA9C9;">
                        <i data-icon="calendar" data-size="12" style="vertical-align: middle; margin-right: 4px;"></i>
                        ${dateStr}${timeStr}
                      </div>
                      <h3 style="margin-bottom: 6px; font-size: 18px;">${e.title || 'Untitled Event'}</h3>
                      ${e.description ? `<p style="margin-bottom: 12px; font-size: 13px; line-height: 1.4;">${e.description}</p>` : ''}
                      ${(e.venue || e.speaker) ? `
                        <div style="font-size: 12px; color: #555; margin-bottom: 16px;">
                          ${e.venue ? `<div style="margin-bottom: 4px;">📍 <strong>Venue:</strong> ${e.venue}</div>` : ''}
                          ${e.speaker ? `<div>🗣️ <strong>Speaker:</strong> ${e.speaker}</div>` : ''}
                        </div>
                      ` : '<div style="margin-bottom: 16px;"></div>'}
                      ${e.registration_link ? `
                      <div style="margin-top: 8px; padding-top: 12px; border-top: 1px solid #eee;">
                        <a href="${e.registration_link}" target="_blank" class="btn btn-solid" style="display: inline-flex; align-items: center; padding: 8px 16px; font-size: 12px;">
                          Register <i data-icon="arrow" data-size="12" style="margin-left: 6px;"></i>
                        </a>
                      </div>
                      ` : ''}
                    </div>
                  </div>
                </a>
              </li>`;
          }).join('')}
        </ul>`;
    }

    target.innerHTML = renderBlock(upcoming, "Upcoming Events") + renderBlock(past, "Past Events");
    renderIcons();
  }

  function getQueryParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  }

  async function renderProjectDetail() {
    const container = document.getElementById("project-detail");
    if (!container) return;

    const projectId = getQueryParam("id");
    if (!projectId) {
      container.innerHTML = `<p style="color:#666; font-size:16px;">Invalid project ID.</p>`;
      return;
    }

    const response = await requestJson(`/projects/${projectId}`, null);
    if (!response || response.ok === false) {
      container.innerHTML = `<p style="color:#666; font-size:16px;">Project not found.</p>`;
      return;
    }

    const project = response.project;
    const researchers = response.researchers || [];
    const projectDate = project.start_date || project.end_date ? `${project.start_date || 'Start TBD'} — ${project.end_date || 'End TBD'}` : '';
    const partnerList = project.partners ? project.partners.split(/[,;]+/).map((item) => item.trim()).filter(Boolean) : [];

    container.innerHTML = `
      <section class="page-hero detail-hero" style="padding:80px 24px;">
        <div class="inner">
          <p class="eb">${project.category || 'Project'}</p>
          <h1>${project.title}</h1>
          ${project.summary ? `<p style="max-width:760px; margin-top:18px;">${project.summary}</p>` : ''}
        </div>
      </section>
      <section class="container" style="padding:40px 24px; max-width:1160px;">
        <div class="detail-grid">
          <article class="card" style="padding:32px;">
            <h2 style="margin-bottom:18px;">Project overview</h2>
            ${project.detailed_description ? `<p style="line-height:1.8; color:#444;">${project.detailed_description}</p>` : `<p style="line-height:1.8; color:#444;">${project.summary || 'No detailed description available.'}</p>`}
            <div style="display:grid;gap:14px;margin-top:24px;">
              ${project.funding_entity ? `<div><strong>Funding:</strong> ${project.funding_entity}${project.budget ? ` (€${project.budget})` : ''}</div>` : ''}
              ${project.principal_investigator ? `<div><strong>Principal Investigator:</strong> ${project.principal_investigator}</div>` : ''}
              ${project.contact_email ? `<div><strong>Contact:</strong> <a href="mailto:${project.contact_email}">${project.contact_email}</a></div>` : ''}
              ${projectDate ? `<div><strong>Timeline:</strong> ${projectDate}</div>` : ''}
              ${project.website_url ? `<div><strong>Website:</strong> <a href="${project.website_url}" target="_blank">${project.website_url}</a></div>` : ''}
              ${project.documents_url ? `<div><strong>Documents:</strong> <a href="${project.documents_url}" target="_blank">${project.documents_url}</a></div>` : ''}
            </div>
          </article>

          <aside class="card" style="padding:32px;">
            <h2 style="margin-bottom:18px;">Project details</h2>
            <dl class="detail-list">
              ${project.status ? `<div><dt>Status</dt><dd>${project.status}</dd></div>` : ''}
              ${project.category ? `<div><dt>Category</dt><dd>${project.category}</dd></div>` : ''}
              ${project.research_areas ? `<div><dt>Research areas</dt><dd>${project.research_areas}</dd></div>` : ''}
              ${project.outcomes ? `<div><dt>Outcomes</dt><dd>${project.outcomes}</dd></div>` : ''}
              ${partnerList.length ? `<div><dt>Partners</dt><dd>${partnerList.join(', ')}</dd></div>` : ''}
            </dl>
          </aside>
        </div>

        <section style="margin-top:40px;">
          <h2>Researchers on this project</h2>
          <ul class="grid-people" style="margin-top:24px;">
            ${researchers.length > 0 ? researchers.map((r, index) => `
              <li class="person">
                ${r.image_url ? `<img src="${r.image_url}" alt="${r.full_name || r.name}" class="avatar">` : `<div class="avatar h${(index % 4) + 1}">${(r.full_name || r.name || 'Researcher').split(' ').map((part) => part[0]).join('').slice(0,2).toUpperCase()}</div>`}
                <h3 style="margin-top:18px;">${r.full_name || r.name}</h3>
                <p style="margin-top:8px; color:#666; font-size:14px;">${r.position || r.role || ''}</p>
                ${r.research_areas ? `<p style="margin-top:12px; color:#555; font-size:14px; line-height:1.5;">${r.research_areas}</p>` : ''}
              </li>
            `).join('') : `<p style="color:#666; font-size:15px;">No researchers are linked to this project yet.</p>`}
          </ul>
        </section>
      </section>`;

    renderIcons();
  }

  async function renderEventDetail() {
    const container = document.getElementById("event-detail");
    if (!container) return;

    const eventId = getQueryParam("id");
    if (!eventId) {
      container.innerHTML = `<p style="color:#666; font-size:16px;">Invalid event ID.</p>`;
      return;
    }

    const response = await requestJson(`/events/${eventId}`, null);
    if (!response || response.ok === false) {
      container.innerHTML = `<p style="color:#666; font-size:16px;">Event not found.</p>`;
      return;
    }

    const event = response.event;
    const eventDate = event.event_date ? new Date(event.event_date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : 'TBA';
    const timeInfo = event.start_time ? `${event.start_time}${event.end_time ? ` – ${event.end_time}` : ''}` : '';

    container.innerHTML = `
      <section class="page-hero detail-hero" style="padding:80px 24px;">
        <div class="inner">
          <p class="eb">${event.category || 'Event'}</p>
          <h1>${event.title}</h1>
          ${event.description ? `<p style="max-width:760px; margin-top:18px;">${event.description}</p>` : ''}
        </div>
      </section>
      <section class="container" style="padding:40px 24px; max-width:960px;">
        <div class="card detail-grid" style="padding:32px;">
          <div>
            <h2>Event details</h2>
            <div style="display:grid;gap:16px;margin-top:24px;">
              <div><strong>Date:</strong> ${eventDate}</div>
              ${timeInfo ? `<div><strong>Time:</strong> ${timeInfo}</div>` : ''}
              ${event.venue ? `<div><strong>Venue:</strong> ${event.venue}</div>` : ''}
              ${event.speaker ? `<div><strong>Speaker:</strong> ${event.speaker}</div>` : ''}
              ${event.registration_link ? `<div><strong>Registration:</strong> <a href="${event.registration_link}" target="_blank">${event.registration_link}</a></div>` : ''}
              ${event.image_url ? `<div><img src="${event.image_url}" alt="${event.title}" style="width:100%;border-radius:18px;object-fit:cover;max-height:420px;margin-top:10px;"></div>` : ''}
            </div>
          </div>
        </div>
      </section>`;

    renderIcons();
  }

  // ==========================================
  // CORE ICONS
  // ==========================================
  const ICONS = {
    search: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    menu: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    close: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    arrow: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    "arrow-ur": '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
    linkedin: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
    twitter: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    github: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    map: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    file: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
    brain: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v15a2.5 2.5 0 0 0 5 0V18h3.5a2.5 2.5 0 0 0 0-5H12v-2h1.5a2.5 2.5 0 0 0 0-5H12V4.5A2.5 2.5 0 0 0 9.5 2z"/></svg>',
    network: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M12 8v3"/></svg>',
    cpu: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    shield: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    calendar: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'
  };

  window.__icon = (name, size = 20) => (ICONS[name] || "").replace(/\{s\}/g, size);
  function renderIcons() {
    document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = window.__icon(el.dataset.icon, el.dataset.size || 20); });
  }

  // ==========================================
  // UI & NAVIGATION ANIMATIONS
  // ==========================================
  
  // ---> THIS IS THE MISSING TRANSLATION TOGGLE EVENT <---
  function setupLanguageToggle() {
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const currentLang = window.__getLang();
        window.__setLang(currentLang === "en" ? "pt" : "en");
      });
    });
  }

  function setupMobileNavigation() {
    const toggleButton = document.querySelector(".mobile-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (!toggleButton || !mobileNav) return;
    toggleButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      toggleButton.setAttribute("aria-expanded", String(isOpen));
      toggleButton.querySelector(".ic-menu").classList.toggle("hidden", isOpen);
      toggleButton.querySelector(".ic-close").classList.toggle("hidden", !isOpen);
    });
  }

  function setupScrollProgress() {
    const header = document.querySelector(".header");
    const progressBar = document.querySelector(".progress");
    const updateScrollState = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 24);
      if (progressBar) {
        const maxScrollDistance = document.documentElement.scrollHeight - window.innerHeight;
        const progressRatio = maxScrollDistance > 0 ? window.scrollY / maxScrollDistance : 0;
        progressBar.style.transform = `scaleX(${progressRatio})`;
      }
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
  }

  function setupRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "-40px 0px" });
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((element) => observer.observe(element));
    return observer;
  }

  function setupCounterAnimations() {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const targetValue = parseInt(element.dataset.to, 10);
        const suffix = element.dataset.suffix || "";
        const startTime = performance.now();
        const duration = 1600;
        const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);
        function updateCounter(now) {
          const progress = Math.min(1, (now - startTime) / duration);
          element.textContent = Math.round(targetValue * easeOutCubic(progress)).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(updateCounter);
        }
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(element);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll("[data-counter]").forEach((element) => counterObserver.observe(element));
  }

  function createHeroParticles() {
    const particlesContainer = document.querySelector(".hero-particles");
    if (!particlesContainer) return;
    for (let index = 0; index < 22; index += 1) {
      const particle = document.createElement("span");
      const size = 2 + ((index * 37) % 5);
      particle.style.left = ((index * 47) % 100) + "%";
      particle.style.top = ((index * 71) % 100) + "%";
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.animationDuration = (6 + ((index * 13) % 10)) + "s";
      particle.style.animationDelay = ((index % 7) * 0.4) + "s";
      particlesContainer.appendChild(particle);
    }
  }

  function setupResearchPage(revealObserver) {
    const researchLinesContainer = document.getElementById("research-lines");
    if (!researchLinesContainer) return;
    window.renderResearch = (translationSet) => {
      const icons = ["brain", "network", "cpu", "shield"];
      researchLinesContainer.innerHTML = translationSet.research.lines.map((line, index) => `
        <li class="simple-area reveal">
          <div class="row">
            <div class="ico">${window.__icon(icons[index % icons.length], 28)}</div>
            <div>
              <h2>${line.title}</h2>
              <p>${line.description}</p>
              <p class="tlabel">${translationSet.research.topicsLabel}</p>
              <ul class="tchips">${line.topics.map((topic) => `<li>${topic}</li>`).join("")}</ul>
            </div>
          </div>
        </li>`).join("");
      researchLinesContainer.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    };
    window.renderResearch(window.__t());
  }

  function setupHomeResearch(revealObserver) {
    const homeResearchContainer = document.getElementById("home-research");
    if (!homeResearchContainer) return;
    const rebuildHomeResearch = (translationSet) => {
      const icons = ["brain", "network", "cpu", "shield"];
      homeResearchContainer.innerHTML = translationSet.research.lines.map((line, index) => `
        <li class="card area reveal">
          <div class="area-inner">
            <div class="ico">${window.__icon(icons[index % icons.length], 24)}</div>
            <div>
              <h3>${line.title}</h3>
              <p>${line.description}</p>
              <ul class="chips">${line.topics.map((topic) => `<li class="chip">${topic}</li>`).join("")}</ul>
            </div>
          </div>
        </li>`).join("");
      homeResearchContainer.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    };
    rebuildHomeResearch(window.__t());
    const originalSetLanguage = window.__setLang;
    window.__setLang = (languageCode) => {
      originalSetLanguage(languageCode);
      rebuildHomeResearch(window.__t());
    };
  }

  async function populateDashboardStatsDynamic() {
    const values = { researchers: 0, projects: 0, publications: 180, events: 0 };
    const [res, proj, ev] = await Promise.all([
      requestJson("/researchers", []),
      requestJson("/projects", []),
      requestJson("/events", [])
    ]);

    values.researchers = res.length || 40;
    values.projects = proj.length || 25;
    values.events = ev.length || 60;

    const counterElements = Array.from(document.querySelectorAll("[data-counter]"));
    const numericValues = [values.researchers, values.projects, values.publications, values.events];

    counterElements.forEach((element, index) => {
      const targetValue = Number(numericValues[index] || 0);
      const suffix = element.dataset.suffix || "";
      element.dataset.to = String(targetValue);
      element.textContent = `${targetValue.toLocaleString()}${suffix}`;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyI18n();
    renderIcons();
    
    setupLanguageToggle(); // <--- FIXED! The EN/PT button now works again!
    
    setupMobileNavigation();
    setupScrollProgress();
    const revealObserver = setupRevealAnimations();
    setupCounterAnimations();
    createHeroParticles();
    setupResearchPage(revealObserver);
    setupHomeResearch(revealObserver);

    populateDashboardStatsDynamic();
    populateResearchers();
    populateProjects();
    populateEvents();
    renderProjectDetail();
    renderEventDetail();
  });

})();