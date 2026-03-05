export interface EventStatisticsDTO {
  eventId: string;
  eventTitle: string;
  eventStatus: string;
  totalInscritos: number;
  totalPresentes: number;
  mediaAvaliacao: number;
}

export interface EventDashBoardReportDTO {
  totalEvents: number;
  activeEvents: number;
  completedEvents: number;
  cancelledEvents: number;
  upcomingEvents: number;
  totalInscritos: number;
  totalPresentes: number;
  taxaPresenca: number;
  avgRating: number;
}
