export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Amistoso - AFUPM vs Equipe Local",
    description: "Venha torcer pela AFUPM em um emocionante jogo amistoso contra a equipe local. Local: Campo Principal da Universidade.",
    date: "25 de Julho de 2026 às 15:00",
  },
  {
    id: 2,
    title: "Treino Aberto para Novos Membros",
    description: "Venha conhecer a AFUPM e experimentar o treino com nosso time. Não é necessário experiência prévia!",
    date: "22 de Julho de 2026 às 17:00",
  },
  {
    id: 3,
    title: "Assembleia Geral da AFUPM",
    description: "Reunião importante para discutir os planos e estratégias para a próxima temporada. Todos os membros estão convidados.",
    date: "28 de Julho de 2026 às 18:30",
  },
];
