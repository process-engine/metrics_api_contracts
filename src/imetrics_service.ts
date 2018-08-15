export interface IMetricsService {
  writeOnEnter(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  writeOnExit(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  writeOnError(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  writeOnSuspend(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  writeOnResume(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
}
