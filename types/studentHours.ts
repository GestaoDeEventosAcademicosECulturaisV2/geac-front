export interface StudentHoursDTO {
  studentId: string;
  studentName: string;
  studentEmail: string;
  totalCertificadosEmitidos: number;
  totalHorasAcumuladas: number;
}
export interface StudentHoursDashBoardDTO {
  totalAlunos: number;
  totalCertificados: number;
  horasTotais: number;
  studentAverage: number;
}
