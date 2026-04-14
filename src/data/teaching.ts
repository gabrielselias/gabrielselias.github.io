export type Course = {
  id: string;
  current: boolean;
  title: { pt: string; en: string };
  institution: string;
  program: { pt: string; en: string };
  description: { pt: string; en: string };
  format?: { pt: string; en: string };
  period?: string;
  hours?: string;
};

export const courses: Course[] = [
  {
    id: "course-idp-advocacy",
    current: true,
    title: {
      pt: "Advocacy Legislativo e Estratégias de Incidência Política",
      en: "Legislative Advocacy and Political Influence Strategies",
    },
    institution: "IDP — Instituto Brasiliense de Direito Público",
    program: {
      pt: "Mestrado Profissional em Ciência Política e Relações Internacionais",
      en: "Professional Master's in Political Science and International Relations",
    },
    description: {
      pt: "Fundamentos teóricos da ação coletiva e dos repertórios de interação entre sociedade civil e Estado. Advocacy legislativo como estratégia de incidência política: conceitos, tipologias e dimensões práticas. Relações entre movimentos sociais, partidos políticos e poder legislativo. Contextos de retrocesso democrático e seus impactos sobre as estratégias de incidência. Recursos de advocacy: mobilização e pressão política, representatividade, evidências técnico-científicas e conexões institucionais. Monitoramento legislativo, gestão de coalizões e comunicação política.",
      en: "Theoretical foundations of collective action and state-society interaction repertoires. Legislative advocacy as a political influence strategy: concepts, typologies, and practical dimensions. Relations between social movements, political parties, and the legislature. Democratic backsliding and its impact on advocacy strategies. Advocacy resources: mobilization and political pressure, representativeness, scientific evidence and technical knowledge, and political connections and legislative monitoring.",
    },
    format: {
      pt: "40 horas · 4 módulos quinzenais (sexta 14h–17h40 — teórico; sábado 09h–12h40 — prático)",
      en: "40 hours · 4 biweekly modules (Friday 2pm–5:40pm — theoretical; Saturday 9am–12:40pm — practical)",
    },
  },
  {
    id: "course-fe-movimentos",
    current: false,
    title: {
      pt: "Política e Movimentos Sociais",
      en: "Politics and Social Movements",
    },
    institution: "Faculdade Evangélica de Brasília (FE)",
    program: {
      pt: "Graduação em Serviço Social",
      en: "Undergraduate Program in Social Work",
    },
    description: {
      pt: "Disciplina sobre teoria e prática dos movimentos sociais e suas relações com a política institucional no Brasil contemporâneo.",
      en: "Course on the theory and practice of social movements and their relations with institutional politics in contemporary Brazil.",
    },
    period: "2014–2015",
    hours: "8h/semana",
  },
  {
    id: "course-advocacy-hub",
    current: false,
    title: {
      pt: "Formação em comunicação e mobilização — Advocacy Hub",
      en: "Training in Communication and Mobilization — Advocacy Hub",
    },
    institution: "Plataforma Brasileira de Política de Drogas",
    program: {
      pt: "Formação profissional",
      en: "Professional training",
    },
    description: {
      pt: "Formação sobre estratégias de comunicação e mobilização para advocacy em política de drogas.",
      en: "Training on communication and mobilization strategies for drug policy advocacy.",
    },
    // TODO: Add date
  },
  // TODO: Add additional past teaching experiences
];
