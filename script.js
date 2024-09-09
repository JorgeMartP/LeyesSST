const laws = [
  {
    id: 1,
    title: "Constitución Política de Colombia",
    description: "Es la norma fundamental del país, estableciendo el marco jurídico y los principios que rigen el Estado colombiano. Adoptada en 1991, define los derechos y deberes de los ciudadanos, la estructura del gobierno y las garantías fundamentales.",
    category: "constitutional",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4125"
  },
  {
    id: 2,
    title: "Ley 9 de 1979",
    description: "También conocida como 'Código Sanitario Nacional', regula la salud pública en Colombia y establece normas para la prevención de enfermedades y la promoción de la salud.",
    category: "health",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=1177",
  },
  {
    id: 3,
    title: "Decreto 1295 de 1994",
    description: "Establece el Sistema General de Riesgos Profesionales en Colombia, protegiendo a los trabajadores de riesgos derivados de su actividad laboral.",
    category: "safety",
    link: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2629",
  },
  {
    id: 4,
    title: "Ley 1562 de 2012",
    description: "Modifica y actualiza el Sistema General de Riesgos Laborales, mejorando la protección de los trabajadores y la gestión de riesgos laborales.",
    category: "safety",
    link:"https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=48365"
  },
  {
    id: 5,
    title: "Decreto 1443 de 2014",
    description: "Reglamenta la aplicación de la Ley 1562 de 2012 en cuanto a la prevención de riesgos laborales y la salud en el trabajo.",
    category: "safety",
    link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=58841"
  },
  {
    id: 6,
    title: "Resolución 1111 de 2017",
    description: "Establece el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), con lineamientos para la prevención de riesgos laborales.",
    category: "safety",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=72623"
  },
  {
    id: 7,
    title: "Decreto 1072 de 2015",
    description: "Compila y actualiza la normativa sobre Seguridad y Salud en el Trabajo, consolidando las políticas de salud laboral.",
    category: "labor",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=62506"
  },
  {
    id: 8,
    title: "Decreto 472 de 2015",
    description: "Regula el Sistema de Riesgos Laborales y establece normas para la administración de pensiones y subsidios por incapacidad.",
    category: "labor",
    link: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=61117"
  },
  {
    id: 9,
    title: "GTC 45 de 2012",
    description: "Guía Técnica Colombiana que proporciona directrices voluntarias para sistemas de gestión de seguridad y salud en el trabajo.",
    category: "safety",
    link: "https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHG01.pdf",
  },
  {
    id: 10,
    title: "Ley 1010 de 2006",
    description: "Establece medidas para la prevención del acoso laboral en Colombia, definiendo el acoso y estableciendo mecanismos de denuncia.",
    category: "labor",
    link: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18843",
  },
  {
    id: 11,
    title: "Ley 100 de 1993",
    description: "Crea el Sistema de Seguridad Social Integral en Colombia, regulando la seguridad social en salud, pensiones y riesgos profesionales.",
    category: "health",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=5248"
  },
  {
    id: 12,
    title: "Resolución 0312 de 2019",
    description: "Establece los requisitos mínimos del SG-SST para las empresas, con normas sobre la identificación de peligros y evaluación de riesgos.",
    category: "safety",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=82666"
  },
  {
    id: 13,
    title: "Resolución 1401 de 2007",
    description: "Establece el Sistema de Gestión de la Seguridad y Salud en el Trabajo en empresas, enfocándose en riesgos asociados a actividades específicas.",
    category: "safety",
    link: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53497"
  },
];
  
  const lawsGrid = document.getElementById('lawsGrid');
  const searchBar = document.getElementById('searchBar');
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.querySelector('.navbar');
  
  // Function to render laws
  function renderLaws(filteredLaws) {
    lawsGrid.innerHTML = '';
    filteredLaws.forEach(law => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${law.title}</h3>
        <p>${law.description}</p>
        <a class='boton' href="${law.link}">Ver mas</a>
      `;
      lawsGrid.appendChild(card);
    });
  }
  
  // Initial render
  renderLaws(laws);
  
  // Search functionality
  searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredLaws = laws.filter(law =>
      law.title.toLowerCase().includes(searchTerm) ||
      law.description.toLowerCase().includes(searchTerm)
    );
    renderLaws(filteredLaws);
  });
  
  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });