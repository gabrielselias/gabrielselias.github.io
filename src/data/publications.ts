export type Publication = {
  id: string;
  type:
    | "thesis"
    | "dissertation"
    | "article"
    | "chapter"
    | "conference-paper"
    | "technical-report"
    | "tcc-supervision"
    | "presentation";
  title: { pt: string; en: string };
  year: number;
  venue?: { pt: string; en: string };
  abstract?: { pt: string; en: string };
  url?: string;
  citations?: number;
};

export const publications: Publication[] = [
  // ── Doctoral Thesis ──
  {
    id: "thesis-2025",
    type: "thesis",
    title: {
      pt: "Repertórios em transformação: advocacy no Legislativo no contexto de retrocesso democrático no Brasil",
      en: "Transforming Repertoires: Legislative Advocacy in the Context of Democratic Backsliding in Brazil",
    },
    year: 2025,
    venue: {
      pt: "Tese (Doutorado em Ciência Política) — Instituto de Ciência Política, Universidade de Brasília. Orientadora: Rebecca Neaera Abers",
      en: "Doctoral Thesis (PhD in Political Science) — Institute of Political Science, University of Brasília. Advisor: Rebecca Neaera Abers",
    },
    abstract: {
      pt: "Esta tese investiga por que movimentos sociais e organizações da sociedade civil brasileira passaram a buscar maior interação com o Poder Legislativo e quais recursos de advocacy permitem que sejam efetivamente ouvidos no processo legislativo. A pesquisa combina quatro estudos de caso — APIB, Campanha Despejo Zero, Coalizão Negra por Direitos e Coalizão Direitos na Rede — com análise documental de materiais produzidos pela sociedade civil sobre práticas de incidência política. A tese propõe uma tipologia de quatro recursos de advocacy: mobilização e pressão política, representatividade, evidências científicas e conhecimento técnico, e conexões políticas e acompanhamento legislativo. A principal contribuição é a identificação de processos de hibridização desses recursos, demonstrando que a efetividade da sociedade civil em contextos adversos depende menos da quantidade de recursos do que da capacidade de combiná-los estrategicamente.",
      en: "This thesis investigates why Brazilian social movements and civil society organizations have increasingly sought interaction with the Legislative branch and which advocacy resources enable them to be effectively heard in the legislative process. The research combines four case studies — APIB, Campanha Despejo Zero, Coalizão Negra por Direitos, and Coalizão Direitos na Rede — with documentary analysis of civil society materials on advocacy practices. The thesis proposes a typology of four advocacy resources: mobilization and political pressure, representativeness, scientific evidence and technical knowledge, and political connections and legislative monitoring. Its main contribution is the identification of hybridization processes among these resources, showing that civil society effectiveness in adverse contexts depends less on the quantity of resources than on the ability to combine them strategically.",
    },
    // Tese em andamento / defesa 2025 — atualizar com link do repositório UnB após depósito
  },

  // ── Master's Dissertation ──
  {
    id: "dissertation-2014",
    type: "dissertation",
    title: {
      pt: "Criar Poder Popular: as relações entre o MTST e o Estado no Distrito Federal",
      en: "Creating Popular Power: Relations Between MTST and the State in the Federal District",
    },
    year: 2014,
    venue: {
      pt: "Dissertação (Mestrado em Ciência Política) — Instituto de Ciência Política, Universidade de Brasília. Orientadora: Rebecca Neaera Abers",
      en: "Master's Dissertation (Political Science) — Institute of Political Science, University of Brasília. Advisor: Rebecca Neaera Abers",
    },
    url: "https://repositorio.unb.br/handle/10482/17435",
  },

  // ── Published Articles ──
  {
    id: "article-2020-justica-transicional",
    type: "article",
    title: {
      pt: "Justiça de transição como chave pacificadora e reparadora da guerra às drogas",
      en: "Transitional Justice as a Pacifying and Reparative Key in the War on Drugs",
    },
    year: 2020,
    venue: {
      pt: "Revista da Plataforma Brasileira de Política de Drogas, v. 4, n. 4, p. 87-93",
      en: "Journal of the Brazilian Drug Policy Platform, v. 4, n. 4, p. 87-93",
    },
    citations: 9,
  },
  {
    id: "article-2019-populismo-elitismo",
    type: "article",
    title: {
      pt: "Entre o populismo e o elitismo penal: os desafios de fazer política criminal",
      en: "Between Penal Populism and Elitism: The Challenges of Criminal Policy-Making",
    },
    year: 2019,
    venue: {
      pt: "Boletim do IBCCRIM, v. 26, p. 13-17",
      en: "IBCCRIM Bulletin, v. 26, p. 13-17",
    },
    url: "https://www.mpsp.mp.br/portal/page/portal/documentacao_e_divulgacao/doc_biblioteca/bibli_servicos_produtos/bibli_boletim/bibli_bol_2006/Boletim-IBCCRIM_n.319.pdf",
  },
  {
    id: "article-2018-conjuntura",
    type: "article",
    title: {
      pt: "Conjuntura da política criminal no legislativo e os nossos desafios para 2018",
      en: "Criminal Policy Outlook in the Legislature and Our Challenges for 2018",
    },
    year: 2018,
    venue: {
      pt: "Boletim do IBCCRIM, v. 26, p. 6-7",
      en: "IBCCRIM Bulletin, v. 26, p. 6-7",
    },
    url: "http://arquivo.ibccrim.org.br/site/boletim/pdfs/Boletim303.pdf",
  },
  {
    id: "article-2018-descriminalizar",
    type: "article",
    title: {
      pt: "Por que descriminalizar o uso, a produção e o consumo das drogas?",
      en: "Why Decriminalize the Use, Production, and Consumption of Drugs?",
    },
    year: 2018,
    venue: {
      pt: "Boletim de Análise Político-Institucional (IPEA), v. 18, p. 9",
      en: "Bulletin of Political-Institutional Analysis (IPEA), v. 18, p. 9",
    },
    url: "https://repositorio.ipea.gov.br/handle/11058/8874",
  },
  {
    id: "article-2010-fora-arruda",
    type: "article",
    title: {
      pt: "'Fora Arruda' e a nova geração política do DF",
      en: "'Fora Arruda' and the New Political Generation of the Federal District",
    },
    year: 2010,
    venue: {
      pt: "Constituição & Democracia, v. 6, p. 6-7",
      en: "Constitution & Democracy, v. 6, p. 6-7",
    },
  },
  {
    id: "article-2010-neoconstitucionalismo",
    type: "article",
    title: {
      pt: "Neoconstitucionalismo, judicialização da política e as relações do poder judiciário com a sociedade civil no Brasil",
      en: "Neoconstitutionalism, Judicialization of Politics, and the Relations Between the Judiciary and Civil Society in Brazil",
    },
    year: 2010,
    venue: {
      pt: "Artigo acadêmico",
      en: "Academic article",
    },
  },

  // ── Book Chapters ──
  {
    id: "chapter-2013-pt-fsm",
    type: "chapter",
    title: {
      pt: "A relação dos Partidos Políticos com os Movimentos Sociais: O caso do PT e o Fórum Social Mundial",
      en: "The Relationship Between Political Parties and Social Movements: The Case of PT and the World Social Forum",
    },
    year: 2013,
    venue: {
      pt: "In: BULOW, Marisa Von (Org.). Fórum Social Mundial: A Transnacionalização da Sociedade Civil Brasileira. 1ed. Brasília: Editora UnB, p. 27-49",
      en: "In: BULOW, Marisa Von (Ed.). World Social Forum: The Transnationalization of Brazilian Civil Society. 1st ed. Brasília: UnB Press, p. 27-49",
    },
    url: "https://loja.editora.unb.br/produto/706/forum-social-mundial--a-transnacionalizacao-da-sociedade-civil-brasileira",
  },
  {
    id: "chapter-2010-imaginar",
    type: "chapter",
    title: {
      pt: "Capítulos em \"Imaginar para revolucionar\" (múltiplos textos)",
      en: "Chapters in \"Imagine to Revolutionize\" (multiple texts)",
    },
    year: 2010,
    venue: {
      pt: "In: Imaginar para revolucionar. Brasília: Edição dos autores. Capítulos: \"Sobre a importância de se pensar grande\", \"Planejamento para mudança\", \"Os limites do Governo Lula\", \"Direito à Cidade: Por que lutar pelo Passe Livre\", \"O medo como anti-proposta\", \"A importância do debate público no processo eleitoral\", \"A volta às bases\", \"Gramsci e Freire, uma combinação necessária\", \"Os intelectuais e a transformação social\", \"Essa semana conheci Césare Battisti\"",
      en: "In: Imagine to Revolutionize. Brasília: Authors' edition. Chapters: \"On the Importance of Thinking Big\", \"Planning for Change\", \"The Limits of the Lula Government\", \"Right to the City: Why Fight for Free Transit\", \"Fear as Anti-Proposal\", \"The Importance of Public Debate in the Electoral Process\", \"Back to the Grassroots\", \"Gramsci and Freire, a Necessary Combination\", \"Intellectuals and Social Transformation\", \"This Week I Met Césare Battisti\"",
    },
  },

  // ── Conference Papers ──
  {
    id: "conf-2010-andhep",
    type: "conference-paper",
    title: {
      pt: "A luta pelo passe livre sob a perspectiva do direito à cidade no Distrito Federal",
      en: "The Struggle for Free Transit from the Perspective of the Right to the City in the Federal District",
    },
    year: 2010,
    venue: {
      pt: "IV Encontro Anual da ANDHEP — Associação Nacional dos Direitos Humanos, Brasília",
      en: "IV Annual Meeting of ANDHEP — National Human Rights Association, Brasília",
    },
    citations: 6,
    url: "https://forumjustica.com.br/wp-content/uploads/2013/02/46205733-A-Luta-Pelo-Passe-Livre-Sob-a-Perspectiva-do-Direito-a-Cidade-no-Distrito-Federal-Gabriel-Telesforo.pdf",
  },

  // ── Technical Reports (UNDP/DEPEN) ──
  {
    id: "report-2017-indexadores",
    type: "technical-report",
    title: {
      pt: "Proposta de indexadores da informação produzida no âmbito do Congresso Nacional",
      en: "Proposal for Information Indexing Produced Within the National Congress",
    },
    year: 2017,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2017-metodologia",
    type: "technical-report",
    title: {
      pt: "Proposta de metodologia para pesquisa de impacto de alterações legislativas no sistema prisional",
      en: "Methodology Proposal for Researching the Impact of Legislative Changes on the Prison System",
    },
    year: 2017,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2017-temas-estrategias",
    type: "technical-report",
    title: {
      pt: "Relatório com propostas de temas e estratégias para apresentação ao Congresso",
      en: "Report with Proposed Themes and Strategies for Presentation to Congress",
    },
    year: 2017,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2017-metodo-producao",
    type: "technical-report",
    title: {
      pt: "Proposta de método de produção e análise de informações relacionadas aos trabalhos do Congresso Nacional",
      en: "Proposed Method for Producing and Analyzing Information Related to National Congress Activities",
    },
    year: 2017,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2016-diagnostico-compatibilidade",
    type: "technical-report",
    title: {
      pt: "Diagnóstico sobre compatibilidade de informações divulgadas pelos atores em comissões e subcomissões do Congresso Nacional e os dados dos sistemas de informação do DEPEN e análise de modelos de fiscalização do Poder Legislativo sobre o sistema penal",
      en: "Assessment of Information Compatibility Between Congressional Committee Actors and DEPEN Information Systems, and Analysis of Legislative Oversight Models of the Penal System",
    },
    year: 2016,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2016-difusao",
    type: "technical-report",
    title: {
      pt: "Descrição sobre difusão e conhecimento de dados sobre o sistema prisional no âmbito do Congresso Nacional",
      en: "Description of Data Dissemination and Knowledge About the Prison System Within the National Congress",
    },
    year: 2016,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2016-atores",
    type: "technical-report",
    title: {
      pt: "Descrição dos atores institucionais envolvidos na agenda penitenciária no âmbito do Congresso Nacional",
      en: "Description of Institutional Actors Involved in the Penitentiary Agenda Within the National Congress",
    },
    year: 2016,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },
  {
    id: "report-2016-participacao-social",
    type: "technical-report",
    title: {
      pt: "Diagnóstico sobre as estratégias de mobilização e fortalecimento das ações de participação social no âmbito do Congresso Nacional",
      en: "Assessment of Mobilization Strategies and Strengthening of Social Participation Within the National Congress",
    },
    year: 2016,
    venue: {
      pt: "Consultoria PNUD/DEPEN",
      en: "UNDP/DEPEN Consultancy",
    },
  },

  // ── TCC Supervision ──
  {
    id: "tcc-2015-reinsercao",
    type: "tcc-supervision",
    title: {
      pt: "Reinserção social: Com o olhar crítico sobre a prisão e o trabalho penal para apegados no regime semiaberto do Distrito Federal",
      en: "Social Reintegration: A Critical View of Prison and Penal Labor for Semi-Open Regime Inmates in the Federal District",
    },
    year: 2015,
    venue: {
      pt: "TCC (Serviço Social) — Universidade Católica de Brasília. Coautoria: Silveira, F. F.; Figueiredo, K. A.",
      en: "Undergraduate thesis (Social Work) — Catholic University of Brasília. Co-authors: Silveira, F. F.; Figueiredo, K. A.",
    },
  },
  {
    id: "tcc-2015-guerra-drogas",
    type: "tcc-supervision",
    title: {
      pt: "A guerra às drogas e o genocídio nas periferias do Distrito Federal",
      en: "The War on Drugs and Genocide in the Peripheries of the Federal District",
    },
    year: 2015,
    venue: {
      pt: "TCC (Serviço Social) — Universidade Católica de Brasília. Coautoria: Silveira, F. F.; Figueiredo, K. A.",
      en: "Undergraduate thesis (Social Work) — Catholic University of Brasília. Co-authors: Silveira, F. F.; Figueiredo, K. A.",
    },
  },
  {
    id: "tcc-2014-desmilitarizacao",
    type: "tcc-supervision",
    title: {
      pt: "Desmilitarização da Polícia: Um debate inadiável sobre segurança pública",
      en: "Police Demilitarization: An Urgent Debate on Public Security",
    },
    year: 2014,
    venue: {
      pt: "TCC (Direito) — Universidade de Brasília. Coautoria: Mamede Said; Silveira, F. F.",
      en: "Undergraduate thesis (Law) — University of Brasília. Co-authors: Mamede Said; Silveira, F. F.",
    },
  },

  // ── Selected Conference Presentations ──
  {
    id: "pres-2017-sistema-penitenciario",
    type: "presentation",
    title: {
      pt: "Considerações sobre o Sistema Penitenciário Brasileiro: Crise ou Normalidade",
      en: "Considerations on the Brazilian Penitentiary System: Crisis or Normality",
    },
    year: 2017,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2017-politica-droga",
    type: "presentation",
    title: {
      pt: "Política de Droga e Contextos Legais / Drogas, Violência e Direitos Humanos",
      en: "Drug Policy and Legal Contexts / Drugs, Violence and Human Rights",
    },
    year: 2017,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2016-legalizacao",
    type: "presentation",
    title: {
      pt: "O Brasil está preparado para a legalização das drogas?",
      en: "Is Brazil Ready for Drug Legalization?",
    },
    year: 2016,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2016-drogas-ilicitas",
    type: "presentation",
    title: {
      pt: "Drogas Ilícitas e Políticas Públicas",
      en: "Illicit Drugs and Public Policy",
    },
    year: 2016,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2016-criterios",
    type: "presentation",
    title: {
      pt: "A viabilidade e a pertinência dos critérios objetivos de distinção entre tráfico e uso de drogas",
      en: "The Viability and Relevance of Objective Criteria for Distinguishing Between Drug Trafficking and Use",
    },
    year: 2016,
    venue: { pt: "Seminário", en: "Seminar" },
  },
  {
    id: "pres-2016-ungass",
    type: "presentation",
    title: {
      pt: "Política de Drogas e a posição do Brasil na UNGASS",
      en: "Drug Policy and Brazil's Position at UNGASS",
    },
    year: 2016,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2015-ungass-propostas",
    type: "presentation",
    title: {
      pt: "Propostas para a UNGASS 2016",
      en: "Proposals for UNGASS 2016",
    },
    year: 2015,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2015-proibicionismo",
    type: "presentation",
    title: {
      pt: "Paradigma proibicionista e sistema ONU",
      en: "Prohibitionist Paradigm and the UN System",
    },
    year: 2015,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2015-pl4330",
    type: "presentation",
    title: {
      pt: "PL 4330 — A terceirização na Precarização dos Direitos Trabalhistas",
      en: "Bill 4330 — Outsourcing and the Precarization of Labor Rights",
    },
    year: 2015,
    venue: { pt: "Palestra/Conferência", en: "Conference/Lecture" },
  },
  {
    id: "pres-2013-quitandinha",
    type: "presentation",
    title: {
      pt: "A rua e a estratégia dos movimentos sociais na luta pelo Direito à Cidade",
      en: "The Street and Social Movement Strategy in the Struggle for the Right to the City",
    },
    year: 2013,
    venue: {
      pt: "Seminário de Política Urbana — Quitandinha +50",
      en: "Urban Policy Seminar — Quitandinha +50",
    },
  },
  {
    id: "pres-2010-processo-legislativo",
    type: "presentation",
    title: {
      pt: "Seminário Processo Legislativo e Democracia",
      en: "Seminar on the Legislative Process and Democracy",
    },
    year: 2010,
    venue: { pt: "Seminário", en: "Seminar" },
  },
  {
    id: "pres-2010-pt-fsm",
    type: "presentation",
    title: {
      pt: "A relação dos Partidos Políticos com Movimentos Sociais: O caso do PT e o Fórum Social Mundial",
      en: "The Relationship Between Political Parties and Social Movements: The Case of PT and the World Social Forum",
    },
    year: 2010,
    venue: {
      pt: "Fórum Social Mundial 10 anos: Diferentes Olhares",
      en: "World Social Forum 10 Years: Different Perspectives",
    },
  },
  {
    id: "pres-2009-sbs",
    type: "presentation",
    title: {
      pt: "A Relação dos Partidos Políticos com Movimentos Sociais: O caso do PT e o Fórum Social Mundial",
      en: "The Relationship Between Political Parties and Social Movements: The Case of PT and the World Social Forum",
    },
    year: 2009,
    venue: {
      pt: "Congresso Brasileiro de Sociologia",
      en: "Brazilian Congress of Sociology",
    },
  },
  {
    id: "pres-2009-enapet",
    type: "presentation",
    title: {
      pt: "Ação coletiva transnacional: o caso do Fórum Social Mundial",
      en: "Transnational Collective Action: The Case of the World Social Forum",
    },
    year: 2009,
    venue: { pt: "ENAPET", en: "ENAPET" },
  },

  // TODO: Add future publications here as "working-paper" type
];

// ── Research Groups ──
export const researchGroups = [
  {
    name: "RESOCIE",
    fullName: {
      pt: "Grupo de Pesquisa sobre Relações entre Sociedade e Estado (UnB)",
      en: "Research Group on State-Society Relations (UnB)",
    },
    description: {
      pt: "Pesquisa sobre movimentos sociais, advocacy, mobilização durante a pandemia, ativismos feminista/antifeminista e interações Estado-sociedade.",
      en: "Research on social movements, advocacy, pandemic mobilization, feminist/anti-feminist activism, and state-society interactions.",
    },
  },
  {
    name: "INCT Participação",
    fullName: {
      pt: "Instituto Nacional de Ciência e Tecnologia — Democracia, Participação e Gestão Pública",
      en: "National Institute of Science and Technology — Democracy, Participation and Public Management",
    },
    description: {
      pt: "Instituto nacional voltado ao estudo da democracia participativa, movimentos sociais e gestão pública.",
      en: "National institute dedicated to the study of participatory democracy, social movements, and public management.",
    },
  },
];
