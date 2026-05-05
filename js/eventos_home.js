/**
 * Homepage Events Carousel Logic - Codando Community
 */

const HOME_EVENTS_DATA = [
  {
    id: 1,
    title: "Segurança de Dados e IA",
    image: "https://images.even3.com/TKWJGzNjj9b_uJpN_AGFE-VCXA4=/1100x440/smart/https://static.even3.com/banner/CapaEven31100x440px-SeguranadedadosnaEradasIAs1600x383px1100x440px.953eca95cf8d4ab7ab0c.png",
    link: "pages/eventos/index.html",
    status: "Inscrições Abertas"
  },
  {
    id: 2,
    title: "Metodologias Ágeis",
    image: "https://images.even3.com/Cy6xsI8eNIjWPGvqfl52wfiyYFg=/1100x440/smart/https://static.even3.com/banner/Codando-Even3.cf10c9aa03cc4e74884d.png",
    link: "pages/eventos/index.html",
    status: "Inscrições Abertas"
  },
  {
    id: 3,
    title: "Mercado de Banco de Dados",
    image: "https://images.sympla.com.br/6815f68e632e3-lg.jpg",
    link: "pages/eventos/index.html",
    status: "Evento Encerrado"
  }
];

function initHomeCarousel() {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselIndicators = document.querySelector('.carousel-indicators');
  
  if (!carouselInner || !carouselIndicators) return;

  carouselInner.innerHTML = '';
  carouselIndicators.innerHTML = '';

  HOME_EVENTS_DATA.forEach((ev, index) => {
    // Add Indicator
    const li = document.createElement('li');
    li.dataset.target = "#carouselExampleIndicators";
    li.dataset.slideTo = index;
    if (index === 0) li.className = 'active';
    carouselIndicators.appendChild(li);

    // Add Item
    const item = document.createElement('div');
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <a href="${ev.link}">
        <img class="d-block w-100" src="${ev.image}" alt="${ev.title}" style="height: 450px; object-fit: cover; border-radius: 15px;">
        <div class="carousel-caption d-none d-md-block" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); border-radius: 10px; padding: 1rem; bottom: 30px;">
          <h5 style="color: #FFD700; font-weight: 800;">${ev.title}</h5>
          <p>${ev.status}</p>
        </div>
      </a>
    `;
    carouselInner.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', initHomeCarousel);
