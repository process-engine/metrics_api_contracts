import {MetricType} from './metric_type';

/**
 * Describes a single metric.
 * Contains information about the Correlation, ProcessModel and
 * FlowNodeInstance to which the metric belongs,
 * and the timestamp at which it was recorded.
 *
 * The properties here are ordered in the same manner as they are in the
 * actual log file.
 */
export class MetricEntry {
  public timeStamp: Date;
  public correlationId: string;
  public processModelId: string;
  public flowNodeInstanceId?: string;
  public flowNodeId?: string;
  public metricType: MetricType;
}
