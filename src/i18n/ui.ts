export const languages = { es: 'Español', en: 'English' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/** Path to the same page in the other language. */
export const altPath: Record<Lang, string> = { es: '/en/', en: '/' };

export const ui = {
  es: {
    meta: {
      title: 'Roamly — Planea tu viaje en minutos',
      description:
        'Añade destinos, deja que Roamly ordene los días y mira el recorrido completo sobre el mapa. Sin hojas de cálculo.',
    },
    nav: {
      features: 'Funciones',
      how: 'Cómo funciona',
      pricing: 'Precios',
      cta: 'Empezar gratis',
      menu: 'Menú',
      langLabel: 'Cambiar idioma',
    },
    hero: {
      eyebrow: 'Mapa e itinerario en la misma pantalla',
      title: 'Planea tu viaje en minutos, no en horas',
      subtitle:
        'Añade los lugares que te interesan, elige las fechas y Roamly reparte las paradas por día. El mapa y el plan siempre cuentan la misma historia.',
      primary: 'Empezar gratis',
      secondary: 'Ver cómo funciona',
      note: 'Gratis hasta 3 viajes. Sin tarjeta.',
    },
    mock: {
      day: 'Día 2 · Lisboa',
      stops: [
        { time: '09:30', name: 'Mirador de Santa Luzia' },
        { time: '11:00', name: 'Castillo de San Jorge' },
        { time: '13:15', name: 'Time Out Market' },
      ],
      badge: '4 paradas · 2,8 km a pie',
      alt: 'Mapa de Lisboa con cuatro paradas conectadas por una ruta y el itinerario del día 2',
    },
    features: {
      title: 'Lo que hace Roamly',
      subtitle: 'Tres cosas, bien hechas.',
      items: [
        {
          title: 'Mapa interactivo',
          body:
            'Arrastra una parada y el itinerario se reordena solo. Ves las distancias reales antes de comprometerte con un día imposible.',
        },
        {
          title: 'Itinerarios automáticos',
          body:
            'Dinos cuántos días tienes. Roamly agrupa las paradas por zona para que no cruces la ciudad dos veces.',
        },
        {
          title: 'Descubre lugares cerca',
          body:
            'Cafés, miradores y museos a pocos minutos de tu ruta, con datos abiertos de OpenStreetMap.',
        },
      ],
    },
    how: {
      title: 'Cómo funciona',
      subtitle: 'De una lista de nombres a un plan que se sostiene.',
      steps: [
        {
          title: 'Agrega destinos',
          body: 'Busca una ciudad o un lugar concreto. Cada uno aparece en el mapa al instante.',
        },
        {
          title: 'Genera el itinerario',
          body: 'Elige las fechas y Roamly reparte las paradas por día, teniendo en cuenta los traslados.',
        },
        {
          title: 'Explora el mapa',
          body: 'Ajusta lo que quieras, comparte el enlace y expórtalo a tu calendario.',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      subtitle: 'Empieza gratis. Pasa a Pro solo si viajas a menudo.',
      perMonth: '/mes',
      popular: 'Recomendado',
      plans: [
        {
          name: 'Free',
          price: '$0',
          tagline: 'Para un viaje puntual.',
          cta: 'Empezar gratis',
          features: [
            'Hasta 3 viajes activos',
            'Mapa interactivo',
            'Itinerario automático',
            'Exportar a calendario (.ics)',
          ],
        },
        {
          name: 'Pro',
          price: '$9',
          tagline: 'Para quien viaja varias veces al año.',
          cta: 'Probar Pro',
          features: [
            'Viajes ilimitados',
            'Planifica con otras personas',
            'Mapas sin conexión',
            'Historial de cambios',
            'Respuesta por email en 24 h',
          ],
        },
      ],
      note: 'Cancela cuando quieras.',
    },
    footer: {
      tagline: 'Planificador de viajes con mapa e itinerario en un solo sitio.',
      columns: [
        {
          title: 'Producto',
          links: [
            { label: 'Funciones', href: '#features' },
            { label: 'Cómo funciona', href: '#how' },
            { label: 'Precios', href: '#pricing' },
          ],
        },
        {
          title: 'Recursos',
          links: [
            { label: 'Documentación', href: '#' },
            { label: 'Novedades', href: '#' },
            { label: 'Estado del servicio', href: '#' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacidad', href: '#' },
            { label: 'Términos', href: '#' },
            { label: 'Contacto', href: '#' },
          ],
        },
      ],
      credit: 'Datos de mapas por OpenStreetMap.',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    meta: {
      title: 'Roamly — Plan your trip in minutes',
      description:
        'Add your destinations, let Roamly order the days, and see the whole route on a map. No spreadsheets.',
    },
    nav: {
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      cta: 'Start free',
      menu: 'Menu',
      langLabel: 'Change language',
    },
    hero: {
      eyebrow: 'Map and itinerary on the same screen',
      title: 'Plan your trip in minutes, not hours',
      subtitle:
        'Add the places you care about, pick your dates, and Roamly spreads the stops across days. The map and the plan always tell the same story.',
      primary: 'Start free',
      secondary: 'See how it works',
      note: 'Free for up to 3 trips. No card required.',
    },
    mock: {
      day: 'Day 2 · Lisbon',
      stops: [
        { time: '09:30', name: 'Santa Luzia viewpoint' },
        { time: '11:00', name: 'São Jorge Castle' },
        { time: '13:15', name: 'Time Out Market' },
      ],
      badge: '4 stops · 1.7 mi on foot',
      alt: 'Map of Lisbon with four stops joined by a route, next to the day 2 itinerary',
    },
    features: {
      title: 'What Roamly does',
      subtitle: 'Three things, done properly.',
      items: [
        {
          title: 'Interactive map',
          body:
            'Drag a stop and the itinerary reorders itself. You see the real distances before you commit to an impossible day.',
        },
        {
          title: 'Automatic itineraries',
          body:
            'Tell us how many days you have. Roamly groups stops by area so you never cross the city twice.',
        },
        {
          title: 'Places nearby',
          body:
            'Cafés, viewpoints and museums minutes from your route, from OpenStreetMap open data.',
        },
      ],
    },
    how: {
      title: 'How it works',
      subtitle: 'From a list of names to a plan that actually holds up.',
      steps: [
        {
          title: 'Add destinations',
          body: 'Search a city or a specific place. Each one lands on the map instantly.',
        },
        {
          title: 'Generate the itinerary',
          body: 'Pick your dates and Roamly spreads the stops across days, travel time included.',
        },
        {
          title: 'Explore the map',
          body: 'Adjust anything, share the link, and export it to your calendar.',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Start free. Move to Pro only if you travel often.',
      perMonth: '/mo',
      popular: 'Recommended',
      plans: [
        {
          name: 'Free',
          price: '$0',
          tagline: 'For a one-off trip.',
          cta: 'Start free',
          features: [
            'Up to 3 active trips',
            'Interactive map',
            'Automatic itinerary',
            'Calendar export (.ics)',
          ],
        },
        {
          name: 'Pro',
          price: '$9',
          tagline: 'For a few trips a year.',
          cta: 'Try Pro',
          features: [
            'Unlimited trips',
            'Plan with other people',
            'Offline maps',
            'Change history',
            'Email reply within 24h',
          ],
        },
      ],
      note: 'Cancel any time.',
    },
    footer: {
      tagline: 'Trip planner with the map and the itinerary in one place.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Features', href: '#features' },
            { label: 'How it works', href: '#how' },
            { label: 'Pricing', href: '#pricing' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Documentation', href: '#' },
            { label: 'Changelog', href: '#' },
            { label: 'Status', href: '#' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Contact', href: '#' },
          ],
        },
      ],
      credit: 'Map data by OpenStreetMap.',
      rights: 'All rights reserved.',
    },
  },
} as const;

export const t = <L extends Lang>(lang: L) => ui[lang];
