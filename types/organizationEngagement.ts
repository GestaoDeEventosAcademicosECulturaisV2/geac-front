export interface OrganizationEngagementDTO {
  organizerId: string;
  organizerName: string;
  totalEventosRealizados: number;
  totalParticipantesEngajados: number;
}
export interface OrganizationPopularityDTO {
  organizerId: string;
  organizerName: string;
  value: number; // eventos ou engajamento
}

export interface OrganizationDashBoardDTO {
  totalOrgs: number;
  totalEvents: number;
  totalEngaged: number;
  avgEventsPerOrg: number;
  avgEngagedPerOrg: number;
  activeOrgs: number;
  inactiveCount: number;
  lowCount: number;
  mediumCount: number;
  highCount: number;
}
