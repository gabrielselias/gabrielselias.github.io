export type WritingPiece = {
  id: string;
  type: "op-ed" | "policy-brief" | "press" | "interview" | "forthcoming";
  title: { pt: string; en: string };
  outlet: string;
  date: string;
  url?: string;
  coauthor?: string;
  note?: { pt: string; en: string };
};

// ── Recent Op-eds (2024–2026) ──
export const recentOpeds: WritingPiece[] = [
  {
    id: "w-2026-nexo-advocacy",
    type: "op-ed",
    title: {
      pt: "Como movimentos sociais brasileiros reinventaram o advocacy diante do retrocesso democrático",
      en: "How Brazilian Social Movements Reinvented Advocacy in the Face of Democratic Backsliding",
    },
    outlet: "Nexo Políticas Públicas (Acadêmico)",
    date: "10 abr. 2026",
    url: "https://pp.nexojornal.com.br/academico/2026/04/10/como-movimentos-sociais-brasileiros-reinventaram-o-advocacy-diante-do-retrocesso-democratico",
  },
  {
    id: "w-2026-spray-pimenta",
    type: "op-ed",
    title: {
      pt: "O spray de pimenta de Ibaneis e o aparelhamento como método de governo",
      en: "Ibaneis's Pepper Spray and State Capture as a Method of Governance",
    },
    outlet: "Brasil de Fato",
    date: "19 fev. 2026",
    url: "https://www.brasildefato.com.br/2026/02/19/o-spray-de-pimenta-de-ibaneis-e-o-aparelhamento-como-metodo-de-governo/",
  },
  {
    id: "w-2025-bolsa-empresario",
    type: "op-ed",
    title: {
      pt: "O escândalo da 'bolsa empresário' de Ibaneis Rocha",
      en: "The 'Entrepreneur Allowance' Scandal of Ibaneis Rocha",
    },
    outlet: "Brasil de Fato",
    date: "10 dez. 2025",
    url: "https://www.brasildefato.com.br/2025/12/10/o-escandalo-da-bolsa-empresario-de-ibaneis-rocha/",
  },
  {
    id: "w-2025-papuda",
    type: "op-ed",
    title: {
      pt: "Bolsonaro na Papuda: como vivem os idosos esquecidos na maior penitenciária do DF",
      en: "Bolsonaro in Papuda: How the Forgotten Elderly Live in the Federal District's Largest Prison",
    },
    outlet: "Brasil de Fato",
    date: "24 nov. 2025",
    url: "https://www.brasildefato.com.br/2025/11/24/bolsonaro-na-papuda-como-vivem-os-idosos-esquecidos-na-maior-penitenciaria-do-df/",
  },
  {
    id: "w-2025-golpistas",
    type: "op-ed",
    title: {
      pt: "Golpistas e corruptos entregam presente para Lula",
      en: "Coup Plotters and Corrupt Officials Hand Lula a Gift",
    },
    outlet: "Poder360 (Opinião)",
    date: "24 set. 2025",
    url: "https://www.poder360.com.br/opiniao/golpistas-e-corruptos-entregam-presente-para-lula/",
  },
  {
    id: "w-2025-autoritarismo",
    type: "op-ed",
    title: {
      pt: "O problema do autoritarismo legislativo",
      en: "The Problem of Legislative Authoritarianism",
    },
    outlet: "Estadão (Blog do Fausto Macedo)",
    date: "2025",
    url: "https://www.estadao.com.br/politica/blog-do-fausto-macedo/o-problema-do-autoritarismo-legislativo/",
  },
  {
    id: "w-2025-bir",
    type: "op-ed",
    title: {
      pt: "BIR: Banco do Ibaneis Rocha",
      en: "BIR: Bank of Ibaneis Rocha",
    },
    outlet: "Brasil de Fato",
    date: "4 set. 2025",
    url: "https://www.brasildefato.com.br/2025/09/04/bir-banco-do-ibaneis-rocha/",
  },
  {
    id: "w-2024-derrubadas",
    type: "op-ed",
    title: {
      pt: "Ibaneis prioriza derrubadas e corta pela metade verba para habitação em 2025",
      en: "Ibaneis Prioritizes Demolitions and Halves Housing Funding for 2025",
    },
    outlet: "Brasil de Fato",
    date: "16 dez. 2024",
    url: "https://www.brasildefato.com.br/2024/12/16/ibaneis-prioriza-derrubadas-e-corta-pela-metade-verba-para-habitacao-em-2025/",
  },
];

// ── Earlier Op-eds (2015–2017) ──
export const earlierOpeds: WritingPiece[] = [
  {
    id: "w-2017-temer",
    type: "op-ed",
    title: {
      pt: "Impopular, Michel Temer abraça o Congresso e coloca seu projeto a perder",
      en: "Unpopular, Michel Temer Embraces Congress and Jeopardizes His Project",
    },
    outlet: "Poder360",
    date: "21 fev. 2017",
    url: "https://www.poder360.com.br/opiniao/impopular-michel-temer-abraca-o-congresso-e-coloca-seu-projeto-a-perder/",
  },
  {
    id: "w-2016-decisao-historica",
    type: "op-ed",
    title: {
      pt: "Uma decisão histórica para a política de drogas no Brasil",
      en: "A Historic Decision for Drug Policy in Brazil",
    },
    outlet: "Justificando",
    date: "24 jun. 2016",
  },
  {
    id: "w-2016-mundo-legalizar",
    type: "op-ed",
    title: {
      pt: "O mundo vai legalizar as drogas (mas não vai ser fácil)",
      en: "The World Will Legalize Drugs (But It Won't Be Easy)",
    },
    outlet: "Mercado Popular",
    date: "17 maio 2016",
  },
  {
    id: "w-2016-ungass",
    type: "op-ed",
    title: {
      pt: "A UNGASS 2016: O primeiro passo da meia volta na política de drogas",
      en: "UNGASS 2016: The First Step Back in Drug Policy",
    },
    outlet: "JOTA",
    date: "26 abr. 2016",
    url: "https://www.jota.info/opiniao-e-analise/artigos/ungass-2016-o-primeiro-passo-da-meia-volta-na-politica-de-drogas-26042016",
  },
  {
    id: "w-2016-parlamentares",
    type: "op-ed",
    title: {
      pt: "O que pensam os parlamentares brasileiros sobre políticas de drogas?",
      en: "What Do Brazilian Legislators Think About Drug Policies?",
    },
    outlet: "Nexo Jornal",
    date: "15 mar. 2016",
    coauthor: "Maurício Fiore",
    // TODO: Verify URL — may correspond to a different article
    url: "https://www.nexojornal.com.br/o-que-a-legalizacao-da-maconha-no-canada-pode-ensinar-ao-brasil",
  },
  {
    id: "w-2015-discriminacao",
    type: "op-ed",
    title: {
      pt: "A discriminação da descriminalização",
      en: "The Discrimination of Decriminalization",
    },
    outlet: "JOTA",
    date: "11 set. 2015",
    coauthor: "Andrea Donatti Gallassi",
  },
  {
    id: "w-2015-stf",
    type: "op-ed",
    title: {
      pt: "Política de drogas no STF",
      en: "Drug Policy at the Supreme Court",
    },
    outlet: "JOTA",
    date: "19 ago. 2015",
    url: "https://www.linkedin.com/pulse/pol%C3%ADtica-de-drogas-stf-gabriel-santos-elias",
  },
  {
    id: "w-2015-seguranca",
    type: "op-ed",
    title: {
      pt: "Oportunidade para mudar a segurança pública",
      en: "An Opportunity to Change Public Security",
    },
    outlet: "Brasil Econômico, p. 30",
    date: "17 mar. 2015",
    coauthor: "Luciana B. F. Rodrigues",
  },
  {
    id: "w-nd-carta-maior",
    type: "op-ed",
    title: {
      pt: "Entre o institucionalismo e o ativismo: o PT e o Fórum Social Mundial",
      en: "Between Institutionalism and Activism: PT and the World Social Forum",
    },
    outlet: "Carta Maior",
    date: "", // TODO: Add date
  },
];

// ── Nexo Jornal articles (drug policy) ──
export const nexoArticles: WritingPiece[] = [
  {
    id: "w-nexo-mexico",
    type: "op-ed",
    title: {
      pt: "O México pode ser a nova fronteira da política de drogas",
      en: "Mexico Could Be the New Frontier of Drug Policy",
    },
    outlet: "Nexo Jornal",
    date: "",
    url: "https://www.nexojornal.com.br/o-mexico-pode-ser-a-nova-fronteira-da-politica-de-drogas",
  },
  {
    id: "w-nexo-canada",
    type: "op-ed",
    title: {
      pt: "O que a legalização da maconha no Canadá pode ensinar ao Brasil",
      en: "What Canada's Marijuana Legalization Can Teach Brazil",
    },
    outlet: "Nexo Jornal",
    date: "",
    url: "https://www.nexojornal.com.br/o-que-a-legalizacao-da-maconha-no-canada-pode-ensinar-ao-brasil",
  },
  {
    id: "w-nexo-descriminalizacao",
    type: "op-ed",
    title: {
      pt: "A política de drogas e a necessidade da descriminalização",
      en: "Drug Policy and the Need for Decriminalization",
    },
    outlet: "Nexo Jornal",
    date: "",
    url: "https://www.nexojornal.com.br/a-politica-de-drogas-e-a-necessidade-da-descriminalizacao",
  },
];

// ── Forthcoming ──
export const forthcoming: WritingPiece[] = [];

// ── Vero Notícias articles (DF politics / 2026 elections) ──
export const veroArticles: WritingPiece[] = [
  {
    id: "w-vero-2025-stf-bolsonaristas",
    type: "op-ed",
    title: {
      pt: "Precisamos proteger o STF dos bolsonaristas e dos seus próprios Ministros",
      en: "We Need to Protect the Supreme Court from Bolsonaristas and from Its Own Justices",
    },
    outlet: "Vero Notícias",
    date: "19 dez. 2025",
    url: "https://veronoticias.com/politica/precisamos-proteger-o-stf-dos-bolsonaristas-e-dos-seus-proprios-ministros/",
  },
  {
    id: "w-vero-2025-celina",
    type: "op-ed",
    title: {
      pt: "A história de Celina Leão: forte nos bastidores, fraca nas urnas",
      en: "The Story of Celina Leão: Strong Behind the Scenes, Weak at the Ballot Box",
    },
    outlet: "Vero Notícias",
    date: "5 dez. 2025",
    url: "https://veronoticias.com/politica/a-historia-de-celina-leao-forte-nos-bastidores-fraca-nas-urnas/",
  },
  {
    id: "w-vero-2025-pandora",
    type: "op-ed",
    title: {
      pt: "O espectro da Caixa de Pandora ronda a política de Brasília",
      en: "The Specter of Pandora's Box Haunts Brasília's Politics",
    },
    outlet: "Vero Notícias",
    date: "25 nov. 2025",
    url: "https://veronoticias.com/politica/o-espectro-da-caixa-de-pandora-ronda-a-politica-de-brasilia/",
  },
  {
    id: "w-vero-2025-obras-atrasadas",
    type: "op-ed",
    title: {
      pt: "Governo Ibaneis desperdiça R$ 304 milhões com obras atrasadas",
      en: "Ibaneis Government Wastes R$ 304 Million on Delayed Public Works",
    },
    outlet: "Vero Notícias",
    date: "12 nov. 2025",
    url: "https://veronoticias.com/politica/governo-ibaneis-desperdica-r-304-milhoes-com-obras-atrasadas/",
  },
  {
    id: "w-vero-2025-julga-golpismo",
    type: "op-ed",
    title: {
      pt: "O Brasil julga o golpismo: um acerto de contas histórico",
      en: "Brazil Puts Coup-Plotting on Trial: A Historic Reckoning",
    },
    outlet: "Vero Notícias",
    date: "3 set. 2025",
    url: "https://veronoticias.com/politica/o-brasil-julga-o-golpismo-um-acerto-de-contas-historico/",
  },
  {
    id: "w-vero-2025-esquerda-df",
    type: "op-ed",
    title: {
      pt: "Para a esquerda do DF, vencer não basta: é preciso governar bem",
      en: "For the Federal District's Left, Winning Is Not Enough: Governing Well Is Essential",
    },
    outlet: "Vero Notícias",
    date: "22 ago. 2025",
    url: "https://veronoticias.com/politica/para-a-esquerda-do-df-vencer-nao-basta-e-preciso-governar-bem/",
  },
  {
    id: "w-vero-2025-america-latina",
    type: "op-ed",
    title: {
      pt: "A América Latina tem direito ao seu próprio destino?",
      en: "Does Latin America Have the Right to Its Own Destiny?",
    },
    outlet: "Vero Notícias",
    date: "30 jul. 2025",
    url: "https://veronoticias.com/mundo/a-america-latina-tem-direito-ao-seu-proprio-destino/",
  },
  {
    id: "w-vero-2025-eua-trump",
    type: "op-ed",
    title: {
      pt: "EUA acima de tudo, Trump acima de todos",
      en: "USA Above All, Trump Above Everyone",
    },
    outlet: "Vero Notícias",
    date: "11 jul. 2025",
    url: "https://veronoticias.com/politica/eua-acima-de-tudo-trump-acima-de-todos/",
  },
  {
    id: "w-vero-2025-armadilha",
    type: "op-ed",
    title: {
      pt: "Armadilha: o dilema bolsonarista da direita brasileira",
      en: "Trap: The Bolsonarist Dilemma of the Brazilian Right",
    },
    outlet: "Vero Notícias",
    date: "4 jul. 2025",
    url: "https://veronoticias.com/politica/armadilha-o-dilema-bolsonarista-da-direita-brasileira/",
  },
  {
    id: "w-vero-2025-brasilia-escuras",
    type: "op-ed",
    title: {
      pt: "Brasília às escuras: um problema de segurança, desigualdade e cidadania",
      en: "Brasília in the Dark: A Problem of Security, Inequality and Citizenship",
    },
    outlet: "Vero Notícias",
    date: "6 jun. 2025",
    url: "https://veronoticias.com/politica/brasilia-as-escuras-um-problema-de-seguranca-desigualdade-e-cidadania/",
  },
  {
    id: "w-vero-2025-capital-desigualdade",
    type: "op-ed",
    title: {
      pt: "Governo Ibaneis transformou Brasília na Capital da Desigualdade",
      en: "Ibaneis Government Turned Brasília into the Capital of Inequality",
    },
    outlet: "Vero Notícias",
    date: "13 maio 2025",
    url: "https://veronoticias.com/politica/governo-ibaneis-transformou-brasilia-na-capital-da-desigualdade/",
  },
  {
    id: "w-vero-2025-glauber-braga",
    type: "op-ed",
    title: {
      pt: "Caso Glauber Braga: Degradação política e falência do decoro",
      en: "The Glauber Braga Case: Political Degradation and the Collapse of Decorum",
    },
    outlet: "Vero Notícias",
    date: "11 abr. 2025",
    url: "https://veronoticias.com/politica/caso-glauber-braga-degradacao-politica-e-falencia-do-decoro/",
  },
  {
    id: "w-vero-2025-desigualdade-arborea",
    type: "op-ed",
    title: {
      pt: "Desigualdade arbórea: A outra face da segregação urbana no DF",
      en: "Tree Inequality: The Other Face of Urban Segregation in the Federal District",
    },
    outlet: "Vero Notícias",
    date: "31 mar. 2025",
    url: "https://veronoticias.com/politica/desigualdade-arborea-a-outra-face-da-segregacao-urbana-no-df/",
  },
  {
    id: "w-vero-2025-tarifa-zero",
    type: "op-ed",
    title: {
      pt: "A economia política da Tarifa Zero: Por que Ibaneis adotou a gratuidade no transporte?",
      en: "The Political Economy of Fare-Free Transit: Why Did Ibaneis Adopt Free Public Transport?",
    },
    outlet: "Vero Notícias",
    date: "18 mar. 2025",
    url: "https://veronoticias.com/politica/a-economia-politica-da-tarifa-zero-por-que-ibaneis-adotou-a-gratuidade-no-transporte/",
  },
  {
    id: "w-vero-2025-denuncia-bolsonaro",
    type: "op-ed",
    title: {
      pt: "A denúncia contra Bolsonaro: Um marco histórico para a democracia brasileira",
      en: "The Indictment of Bolsonaro: A Historic Milestone for Brazilian Democracy",
    },
    outlet: "Vero Notícias",
    date: "21 fev. 2025",
    url: "https://veronoticias.com/politica/a-denuncia-contra-bolsonaro-um-marco-historico-para-a-democracia-brasileira/",
  },
  {
    id: "w-vero-2025-ia-df",
    type: "op-ed",
    title: {
      pt: "Inteligência artificial: Como o DF pode aproveitar oportunidades e mitigar riscos",
      en: "Artificial Intelligence: How the Federal District Can Seize Opportunities and Mitigate Risks",
    },
    outlet: "Vero Notícias",
    date: "11 fev. 2025",
    url: "https://veronoticias.com/politica/inteligencia-artificial-como-o-df-pode-aproveitar-oportunidades-e-mitigar-riscos/",
  },
  {
    id: "w-vero-2025-8-janeiro",
    type: "op-ed",
    title: {
      pt: "As perguntas que ainda precisam ser respondidas sobre o 8 de janeiro",
      en: "The Questions That Still Need to Be Answered About January 8",
    },
    outlet: "Vero Notícias",
    date: "9 jan. 2025",
    url: "https://veronoticias.com/politica/as-perguntas-que-ainda-precisam-ser-respondidas-sobre-o-8-de-janeiro/",
  },
  {
    id: "w-vero-2024-orcamento-gdf",
    type: "op-ed",
    title: {
      pt: "O que o orçamento do GDF informa sobre suas prioridades políticas?",
      en: "What the Federal District Government's Budget Reveals About Its Political Priorities",
    },
    outlet: "Vero Notícias",
    date: "12 dez. 2024",
    url: "https://veronoticias.com/politica/o-que-o-orcamento-do-gdf-informa-sobre-suas-prioridades-politicas/",
  },
];

// ── Press Citations ──
export const pressCitations: WritingPiece[] = [
  {
    id: "w-press-2018-brasildefato",
    type: "press",
    title: {
      pt: "726 mil presos: qual a política dos candidatos para o encarceramento em massa?",
      en: "726,000 Prisoners: What Are the Candidates' Policies on Mass Incarceration?",
    },
    outlet: "Brasil de Fato",
    date: "set. 2018",
    url: "https://www.brasildefato.com.br/2018/09/26/apenas-cinco-candidaturas-tem-alguma-medida-para-diminuicao-da-populacao-carceraria/",
    note: {
      pt: "Citado como especialista em política de drogas e encarceramento em massa",
      en: "Quoted as specialist on drug policy and mass incarceration",
    },
  },
];

// ── Interviews & Media ──
export const interviews: WritingPiece[] = [
  {
    id: "w-interview-2017-cannabis",
    type: "interview",
    title: {
      pt: "Clubes sociais de Cannabis e a reforma da política de drogas",
      en: "Cannabis Social Clubs and Drug Policy Reform",
    },
    outlet: "Rádio/TV",
    date: "2017",
    coauthor: "Andrea Donatti Gallassi",
  },
  {
    id: "w-interview-2015-porte",
    type: "interview",
    title: {
      pt: "Porte de drogas para uso próprio",
      en: "Drug Possession for Personal Use",
    },
    outlet: "Rádio/TV",
    date: "2015",
  },
  {
    id: "w-interview-nd-cannabis-guide",
    type: "interview",
    title: {
      pt: "Reparação histórica, justiça social e tributação — lançamento do guia \"Como regular a Cannabis\" (Transform/Plataforma Justa)",
      en: "Historical Reparation, Social Justice and Taxation — launch of the guide \"How to Regulate Cannabis\" (Transform/Plataforma Justa)",
    },
    outlet: "Evento/Painel",
    date: "", // TODO: Add date
  },
];

// TODO: Add new writing pieces here as they are published
