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
        focusTitle: "Upcoming activities",
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
        history: "Por despacho do Sr. Diretor do ISTEC-Porto foi criado em setembro de 2020 o Centro de Investigação em Tecnologias Avançadas (CITECA). A pandemia Covid-19, mudança de instalações e alterações no quadro de pessoal docente, implicaram que o programa inicialmente previsto tenha sido alterado; os objetivos propostos não foram alcançados, tendo o plano sofrido uma profunda remodelação. Assim o presente plano estratégico, que se pretende mais realista, foi revisto com base nos constrangimentos anteriormente havidos, mas com o reforço de novos investigadores, com base na contratação de novos docentes para o ISTEC Porto.",
        missionTitle: "Missão",
        mission1: "O CITECA é o Centro de Investigação em Tecnologias Avançadas do ISTEC Porto, dedicado à investigação, inovação, cooperação e transferência de conhecimento em tecnologias avançadas.",
        mission2: "O seu trabalho assenta na excelência científica, na colaboração interdisciplinar e nas parcerias internacionais, com o objetivo de fortalecer a ligação entre a academia e o ecossistema socioeconómico através de investigação de alto impacto e conhecimento partilhado.",
      },
      contact: {
        eyebrow: "Contacto", title: "Contacto",
        subtitle: "Entre em contacto connosco. Responderemos o mais brevemente possível.",
        infoTitle: "Informações de Contacto", addressLabel: "Morada", emailLabel: "Email", phoneLabel: "Telefone",
        formTitle: "Envie-nos uma Mensagem", required: "Os campos marcados com * são obrigatórios.",
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
        focusTitle: "Atividades futuras",
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
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGUAGES.has(stored) ? stored : DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
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
      // format: "attr:path;attr2:path2"
      element.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attributeName, path] = pair.split(":");
        if (!attributeName || !path) return;
        const value = getTranslationValue(translationSet, path.trim());
        if (typeof value === "string") element.setAttribute(attributeName.trim(), value);
      });
    });

    document.querySelectorAll(".lang-toggle").forEach((button) => {
      button.setAttribute("aria-label", translationSet.switchTo);
      button.setAttribute("title", translationSet.switchTo);
      button.querySelector(".en").classList.toggle("off", lang !== "en");
      button.querySelector(".pt").classList.toggle("off", lang !== "pt");
    });

    if (typeof window.renderResearch === "function") window.renderResearch(translationSet);
    if (typeof window.renderPublications === "function") window.renderPublications(translationSet);
  }

  function setLanguage(nextLanguage) {
    lang = nextLanguage;
    try { localStorage.setItem(STORAGE_KEY, nextLanguage); } catch {}
    applyI18n();
  }

  window.__setLang = setLanguage;
  window.__getLang = () => lang;
  window.__t = () => translations[lang];

  async function requestJson(endpoint, fallback) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`Unable to load ${endpoint}:`, error);
      return fallback;
    }
  }

  async function populateDashboardStats() {
    const values = await requestJson("/api/dashboard", { researchers: 40, projects: 25, publications: 180, events: 60 });
    const counterElements = Array.from(document.querySelectorAll("[data-counter]"));
    const numericValues = [values.researchers, values.projects, values.publications, values.events];

    counterElements.forEach((element, index) => {
      const targetValue = Number(numericValues[index] || 0);
      const suffix = element.dataset.suffix || "";
      element.dataset.to = String(targetValue);
      element.textContent = `${targetValue.toLocaleString()}${suffix}`;
    });
  }

  async function populateResearchers() {
    const target = document.querySelector(".grid-people");
    if (!target) return;

    const researchers = await requestJson("/api/researchers", []);
    target.innerHTML = researchers.map((person, index) => {
      const initials = (person.full_name || "Researcher")
        .split(" ")
        .map((word) => word[0] || "")
        .join("")
        .slice(0, 2)
        .toUpperCase();
      const avatarClass = ["h1", "h2", "h3", "h4"][index % 4];
      return `
        <li class="card person">
          <div class="avatar ${avatarClass}">${initials}</div>
          <h3>${person.full_name || "Researcher"}</h3>
          <p class="role">${person.position || "Research Team Member"}</p>
          <ul class="tags">
            <li class="chip">${person.expertise || "Research"}</li>
          </ul>
          <div class="socials">
            <a href="mailto:${person.email || "contact@istec.pt"}" class="social" aria-label="Email"><i data-icon="mail" data-size="14"></i></a>
          </div>
        </li>`;
    }).join("");
  }

  async function populateProjects() {
    const target = document.querySelector(".grid-projects");
    if (!target) return;

    const projects = await requestJson("/api/projects", []);
    target.innerHTML = projects.map((project, index) => `
      <li class="card project">
        <a href="#">
          <div class="cover p${(index % 4) + 1}"><span class="tag">${project.category || "Research"}</span></div>
          <div class="body">
            <div>
              <h3>${project.title || "Project"}</h3>
              <p>${project.summary || "Applied research project"}</p>
            </div>
            <span class="arrow"><i data-icon="arrow-ur" data-size="16"></i></span>
          </div>
        </a>
      </li>`).join("");
  }

  async function populateResources() {
    const target = document.querySelector(".grid-res");
    if (!target) return;

    const resources = await requestJson("/api/resources", []);
    target.innerHTML = resources.map((resource) => `
      <li>
        <a href="${resource.link || "#"}" class="res" target="_blank" rel="noreferrer">
          <div class="ico"><i data-icon="file" data-size="20"></i></div>
          <div class="body">
            <h3>${resource.name || "Resource"}</h3>
            <small>${resource.category || "Resource"}</small>
          </div>
          <span class="dl" aria-label="Open"><i data-icon="download" data-size="16"></i></span>
        </a>
      </li>`).join("");
  }

  async function populatePublications(translationSet) {
    const target = document.getElementById("pub-list");
    if (!target) return;

    const publications = await requestJson("/api/publications", []);
    const readLabel = translationSet?.sections?.publications?.read || "Read paper";
    target.innerHTML = publications.map((publication, index) => `
      <li class="pub" data-cat="${publication.type || "Research"}" data-title="${publication.title || "Publication"}">
        <span class="dot"></span>
        <a href="#" class="pub-card">
          <div class="pub-meta">
            <div>
              <span class="year">${publication.year || new Date().getFullYear()}</span>
              <span class="cat">${publication.type || "Research"}</span>
            </div>
            <div>
              <h3>${publication.title || "Publication"}</h3>
              <small>${publication.type || "Research"}</small>
            </div>
          </div>
          <span class="pub-read">${readLabel} <i data-icon="arrow-ur" data-size="16"></i></span>
        </a>
      </li>`).join("");

    setupPublicationFilters();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageToggles();
    applyI18n();
    setupMobileNavigation();
    setupScrollProgress();
    const revealObserver = setupRevealAnimations();
    setupCounterAnimations();
    createHeroParticles();
    setupResearchPage(revealObserver);
    setupHomeResearch(revealObserver);
    setupForms();

    populateDashboardStats();
    populateResearchers();
    populateProjects();
    populateResources();
    populatePublications(window.__t());
  });

  function initializeLanguageToggles() {
    document.querySelectorAll(".lang-toggle").forEach((button) => {
      button.addEventListener("click", () => window.__setLang(lang === "en" ? "pt" : "en"));
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

  function setupPublicationFilters() {
    const publicationList = document.getElementById("pub-list");
    if (!publicationList) return;

    const categoryButtons = document.querySelectorAll(".cat-btn");
    const searchInput = document.getElementById("pub-search-input");
    let activeCategory = "All";

    const updatePublicationVisibility = () => {
      const searchTerm = (searchInput?.value || "").toLowerCase();
      publicationList.querySelectorAll(".pub").forEach((item) => {
        const category = item.dataset.cat;
        const title = item.dataset.title.toLowerCase();
        const shouldShow = (activeCategory === "All" || category === activeCategory) && title.includes(searchTerm);
        item.classList.toggle("hidden", !shouldShow);
      });
    };

    categoryButtons.forEach((button) => button.addEventListener("click", () => {
      activeCategory = button.dataset.cat;
      categoryButtons.forEach((candidate) => candidate.classList.toggle("active", candidate === button));
      updatePublicationVisibility();
    }));

    searchInput?.addEventListener("input", updatePublicationVisibility);
  }

  function setupResearchPage(revealObserver) {
    const researchLinesContainer = document.getElementById("research-lines");
    if (!researchLinesContainer) return;

    window.renderResearch = (translationSet) => {
      const icons = ["brain", "network", "cpu", "shield"];
      researchLinesContainer.innerHTML = translationSet.research.lines.map((line, index) => `
        <li class="simple-area reveal">
          <div class="row">
            <div class="ico">${window.__icon(icons[index], 28)}</div>
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
            <div class="ico">${window.__icon(icons[index], 24)}</div>
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

  function setupForms() {
    document.querySelectorAll("form.contact-form").forEach((form) => {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const statusMessage = form.querySelector(".sent");
        const submitButton = form.querySelector("button[type='submit']");

        if (statusMessage) {
          statusMessage.textContent = "";
          statusMessage.hidden = true;
        }

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Sending…";
        }

        try {
          const payload = {
            name: document.getElementById("c-name")?.value || "",
            email: document.getElementById("c-email")?.value || "",
            subject: document.getElementById("c-subject")?.value || "",
            message: document.getElementById("c-message")?.value || "",
          };

          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const result = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(result.message || "Unable to send message");

          if (statusMessage) {
            statusMessage.textContent = window.__t().contact.success;
            statusMessage.hidden = false;
          }
          form.reset();
        } catch (error) {
          if (statusMessage) {
            statusMessage.textContent = error.message || "The message could not be sent.";
            statusMessage.hidden = false;
          }
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = `<span>${window.__t().contact.send}</span><i data-icon="arrow" data-size="16"></i>`;
          }
        }
      });
    });

    document.querySelectorAll("form.newsletter-form").forEach((form) => {
      form.addEventListener("submit", (event) => event.preventDefault());
    });
  }

  // Icon helper
  const ICONS = {
    arrow: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    "arrow-ur": '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>',
    chevron: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    sparkles: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM19 14l.9 2.6L22 17.5l-2.1.9L19 21l-.9-2.6L16 17.5l2.1-.9L19 14zM5 15l.7 2.1L8 18l-2.3.9L5 21l-.7-2.1L2 18l2.3-.9L5 15z"/></svg>',
    users: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    rocket: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    book: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z"/></svg>',
    flask: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.5L4.5 20A2 2 0 0 0 6.2 23h11.6a2 2 0 0 0 1.7-3L14 9.5V2M8 2h8M7 15h10"/></svg>',
    brain: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0-2 5.24A3 3 0 0 0 6 19a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2zM12 2a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1 2 5.24A3 3 0 0 1 18 19a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2z"/></svg>',
    network: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><path d="M5 16v-3h14v3M12 12V8"/></svg>',
    cpu: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
    shield: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
    mail: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>',
    map: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.72 2.82a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.35 1.85.6 2.82.72A2 2 0 0 1 22 16.92z"/></svg>',
    search: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>',
    menu: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    download: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
    file: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
    database: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
    code: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
    bookmark: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    linkedin: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
    twitter: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
    github: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  };
  window.__icon = (name, size = 20) => (ICONS[name] || "").replace(/\{s\}/g, size);

  // Inject icons declared as <i data-icon="name" data-size="20"></i>
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-icon]").forEach((el) => {
      el.innerHTML = window.__icon(el.dataset.icon, el.dataset.size || 20);
    });
  });
})();