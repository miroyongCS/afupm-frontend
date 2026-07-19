export interface News {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content?: string;
}

export const newsData: News[] = [
  {
    id: 1,
    title: "Grande vitória na semana passada",
    excerpt: "Nosso time conquistou uma vitória impressionante contra a equipe rival em um jogo emocionante.",
    date: "15 de Julho de 2026",
  },
  {
    id: 2,
    title: "Novo técnico anunciado",
    excerpt: "A associação anuncia oficialmente o novo técnico que liderará o time na próxima temporada.",
    date: "10 de Julho de 2026",
  },
  {
    id: 3,
    title: "Campeonato universitário começa",
    excerpt: "O campeonato universitário de futebol inicia com grandes perspectivas e equipes fortes.",
    date: "5 de Julho de 2026",
  },
];
