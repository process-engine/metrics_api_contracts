/**
 * Contains the payload that gets send with a HTTP request to record metrics.
 */
export class CreateMetricsRequestPayload {
  public flowNodeInstanceId?: string;
  public timestamp: Date;
}
