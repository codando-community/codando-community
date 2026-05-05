/**
 * Eventos Page Logic - Codando Community
 * Migrated to Vanilla JS with UX Enhancements
 */

const DATA = [
  {
    id: 1,
    title: "Segurança de Dados e Inteligência Artificial",
    subtitle: "Na Era das IAs",
    date: "Em breve",
    dayWeek: "A definir",
    dayTime: "Horário a definir",
    transmission: "Transmissão via Even3",
    speaker: "Especialistas da Área",
    status: "upcoming",
    image: "https://images.even3.com/TKWJGzNjj9b_uJpN_AGFE-VCXA4=/1100x440/smart/https://static.even3.com/banner/CapaEven31100x440px-SeguranadedadosnaEradasIAs1600x383px1100x440px.953eca95cf8d4ab7ab0c.png",
    link: "https://www.even3.com.br/seguranca-de-dados-na-era-das-ias-575675",
    description: "Uma imersão sobre como a segurança de dados e a Inteligência Artificial caminham juntas. Prepare-se para os desafios do futuro."
  },
  {
    id: 2,
    title: "Metodologias Ágeis",
    subtitle: "com Prof. Dr. Luiz Carlos Martinelli Jr.",
    date: "18/10/2025",
    dayWeek: "Sábado",
    dayTime: "18h00",
    transmission: "Transmissão via Even3",
    speaker: "Prof. Dr. Luiz Carlos Martinelli Jr.",
    status: "upcoming",
    image: "https://images.even3.com/Cy6xsI8eNIjWPGvqfl52wfiyYFg=/1100x440/smart/https://static.even3.com/banner/Codando-Even3.cf10c9aa03cc4e74884d.png",
    link: "https://www.even3.com.br/metodologias-ageis-641051/",
    description: "Palestra sobre Metodologias Ágeis, com o Prof. Luiz Carlos Martinelli Júnior, doutor em Engenharia Mecânica, Patentes e Inovação."
  },
  {
    id: 3,
    title: "O Mercado de Banco de Dados",
    subtitle: "Evento Online",
    date: "05/05/2025",
    dayWeek: "Segunda",
    dayTime: "19h30",
    transmission: "Transmissão via Sympla",
    speaker: "Convidados",
    status: "past",
    image: "https://images.sympla.com.br/6815f68e632e3-lg.jpg",
    link: "https://www.sympla.com.br/evento-online/o-mercado-de-banco-de-dados/2940880",
    description: "Discussão aprofundada sobre as tendências e oportunidades no mercado de banco de dados."
  },
  {
    id: 4,
    title: "Desmistificando a POO",
    subtitle: "com Profª Silvia Brandão",
    date: "26/04/2025",
    dayWeek: "Sábado",
    dayTime: "14h00",
    transmission: "Transmissão via Sympla",
    speaker: "Profª Silvia Brandão",
    status: "past",
    image: "https://images.sympla.com.br/67fd996eb703b-lg.png",
    link: "https://www.sympla.com.br/evento-online/desmistificando-a-poo-com-prof-silvia-brandao/2915622",
    description: "Quer desvendar os mistérios da Programação Orientada a Objetos? Descubra como aplicar os conceitos de forma prática e eficiente."
  },
  {
    id: 5,
    title: "Inteligência Artificial com R",
    subtitle: "Do Algoritmo à Análise de Dados",
    date: "12/04/2025",
    dayWeek: "Sábado",
    dayTime: "14h00",
    transmission: "Transmissão via Sympla",
    speaker: "Prof. Cristiano Osinski",
    status: "past",
    image: "https://images.sympla.com.br/67f5e98f31353-lg.png",
    link: "https://www.sympla.com.br/evento-online/inteligencia-artificial-com-r-do-algoritmo-a-analise-de-dados/2907270",
    description: "Descubra o poder da linguagem R no desenvolvimento de soluções inteligentes!"
  },
  {
    id: 6,
    title: "Bate-papo: Iniciação em Big Techs",
    subtitle: "Evento Online",
    date: "14/02/2025",
    dayWeek: "Sexta",
    dayTime: "19h30",
    transmission: "Transmissão via Sympla",
    speaker: "Prof. Henrique Poyatos e Luana Ferreira",
    status: "past",
    image: "https://images.sympla.com.br/67a8ceb2ab3d3-lg.jpg",
    link: "https://www.sympla.com.br/evento-online/bate-papo-iniciação-em-big-techs/2826339",
    description: "Como se preparar e iniciar sua carreira nas maiores empresas de tecnologia do mundo."
  },
  {
    id: 7,
    title: "Quebrando o Ciclo: Burnout e Saúde Mental na TI",
    subtitle: "Evento Online",
    date: "11/12/2024",
    dayWeek: "Quarta",
    dayTime: "19h00",
    transmission: "Transmissão via Sympla",
    speaker: "Luciana Doier",
    status: "past",
    image: "https://images.sympla.com.br/67467ec1c59a8-lg.png",
    link: "https://www.sympla.com.br/evento-online/quebrando-o-ciclo-burnout-e-saude-mental-na-ti-e-no-meio-academico/2752259",
    description: "Uma conversa essencial sobre saúde mental no meio acadêmico e profissional da Tecnologia da Informação."
  },
  {
    id: 8,
    title: "Treinamento - Compartilhamento e segurança de contas",
    subtitle: "Evento Online",
    date: "30/11/2024",
    dayWeek: "Sábado",
    dayTime: "19h00",
    transmission: "Transmissão via Sympla",
    speaker: "Convidados",
    status: "past",
    image: "https://images.sympla.com.br/67423ad944521-lg.png",
    link: "https://www.sympla.com.br/evento-online/treinamento-compartilhamento-e-seguranca-de-contas/2747268",
    description: "Melhores práticas para segurança e gestão de contas em ambientes compartilhados."
  },
  {
    id: 9,
    title: "CodeWars",
    subtitle: "Dominando Desafios",
    date: "13/11 a 19/11/2024",
    dayWeek: "Semana",
    dayTime: "Integral",
    transmission: "Evento Online",
    speaker: "Comunidade",
    status: "past",
    image: "https://images.sympla.com.br/672c144a39ffa-lg.png",
    link: "https://www.sympla.com.br/evento-online/codewars/2724907",
    description: "Maratona de desafios de código para aprimorar sua lógica de programação."
  },
  {
    id: 10,
    title: "Lógica de Programação com Matheus Gomes",
    subtitle: "Evento Online",
    date: "30/10/2024",
    dayWeek: "Quarta",
    dayTime: "19h00",
    transmission: "Transmissão via Youtube",
    speaker: "Matheus Gomes",
    status: "past",
    image: "https://images.sympla.com.br/6716a2f4942a9-lg.png",
    link: "https://www.sympla.com.br/evento-online/logica-de-programacao-com-matheus-gomes/2697538",
    description: "Fundamentos essenciais de lógica de programação para iniciar sua jornada dev."
  }
];

const state = {
  filter: 'todos',
  search: ''
};

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

/**
 * Utility: Parse Date String to Date Object
 */
function parseDate(d) {
  if (!d || d.includes('breve')) return new Date(2099, 11, 31);
  const [day, month, year] = d.split('/').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Main Render Function
 */
function render() {
  const container = document.getElementById('event-list');
  container.innerHTML = '';

  // Filter and Sort
  const filtered = DATA.filter(ev => {
    const query = state.search.toLowerCase();
    const matchesSearch = ev.title.toLowerCase().includes(query) || ev.subtitle.toLowerCase().includes(query);
    const matchesFilter = state.filter === 'todos' || (state.filter === 'futuros' && ev.status === 'upcoming') || (state.filter === 'passados' && ev.status === 'past');
    return matchesSearch && matchesFilter;
  });

  const sorted = [...filtered].sort((a, b) => {
    const da = parseDate(a.date);
    const db = parseDate(b.date);
    return a.status === 'upcoming' ? da - db : db - da;
  });

  // Grouping
  const groups = {};
  sorted.forEach(ev => {
    let key = "Próximos Eventos";
    if (ev.status === 'past') {
      const [d, m, y] = ev.date.split('/').map(Number);
      key = `${monthNames[m - 1]} ${y}`;
    }
    if (!groups[key]) groups[key] = [];
    groups[key].push(ev);
  });

  if (Object.keys(groups).length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3 style="font-size: 3rem;">🔍</h3>
        <h3>Nenhum evento encontrado</h3>
        <p>Não encontramos resultados para "${state.search}". Tente outro termo.</p>
      </div>`;
    return;
  }

  // Generate HTML
  Object.entries(groups).forEach(([month, events]) => {
    const group = document.createElement('div');
    group.className = 'month-group';
    group.innerHTML = `<h2 class="month-header">${month}</h2>`;
    
    events.forEach(ev => {
      const row = document.createElement('div');
      row.className = `event-row ${ev.status === 'past' ? 'past-event' : ''}`;
      row.id = `event-${ev.id}`;
      row.innerHTML = `
        <div class="event-main">
          <div class="event-date">
            <strong>${ev.dayWeek}</strong><br>${ev.date}
          </div>
          <div class="event-info">
            <div class="thumbnail" style="background-image: url('${ev.image}')">
              <span class="badge-status ${ev.status === 'past' ? 'badge-past' : 'badge-upcoming'}">
                ${ev.status === 'past' ? 'Sucesso de Público' : 'Inscrições Abertas'}
              </span>
            </div>
            <div class="event-details">
              <h3 class="event-title">${ev.title}</h3>
              <p class="event-transmission">${ev.transmission || ev.dayTime}</p>
            </div>
          </div>
          <div class="event-actions">
            <a href="${ev.link}" target="_blank" class="btn-ev btn-primary-ev ${ev.status === 'past' ? 'disabled' : ''}" ${ev.status === 'past' ? 'onclick="return false;"' : ''}>
              ${ev.status === 'past' ? 'Evento Encerrado' : (ev.link.includes('youtube') ? 'Acessar Live' : 'Garantir Vaga')}
            </a>
            <button class="btn-ev btn-secondary-ev" onclick="toggleDetails(${ev.id})">Mais Informações</button>
          </div>
        </div>
        <div class="expanded-panel" id="panel-${ev.id}">
          <div class="tabs">
            <div class="tab active" onclick="switchTab(${ev.id}, 'sobre', event)">Sobre o Evento</div>
            <div class="tab" onclick="switchTab(${ev.id}, 'palestrante', event)">Palestrante</div>
          </div>
          <div class="tab-content" id="content-${ev.id}">${ev.description}</div>
        </div>
      `;
      group.appendChild(row);
    });
    container.appendChild(group);
  });
}

/**
 * Interactions
 */
window.toggleDetails = (id) => {
  const panel = document.getElementById(`panel-${id}`);
  const isOpening = panel.style.display !== 'block';
  
  // Close all others
  document.querySelectorAll('.expanded-panel').forEach(p => p.style.display = 'none');
  
  if (isOpening) {
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

window.switchTab = (id, tab, event) => {
  const ev = DATA.find(e => e.id === id);
  const content = document.getElementById(`content-${id}`);
  
  // Update Tab Styling
  const tabs = event.target.parentElement.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  // Update Content
  content.innerHTML = tab === 'sobre' ? ev.description : `<strong>Apresentado por:</strong> ${ev.speaker || 'Especialista da Comunidade'}`;
};

// Event Listeners
document.getElementById('search-input').addEventListener('input', (e) => {
  state.search = e.target.value;
  render();
});

document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.filter = pill.dataset.filter;
    render();
  });
});

// Initial Render
render();
