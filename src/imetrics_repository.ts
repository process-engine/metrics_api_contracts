import {MetricEntry} from './metric_entry';
import {MetricType} from './metric_type';

/**
 * Contains functions for writing and retrieving content from logfiles,
 * pertaining to metrics.
 * Each file relates to a specific ProcessModel.
 */
export interface IMetricsRepository {

  /**
   * Retrieves the metrics for a specific ProcessModel.
   *
   * @async
   * @param processModelId The ID of ProcessModel for which to retrieve
   *                       the metrics.
   * @returns              A list of metrics.
   */
  readMetricsForProcessModel(processModelId: string): Promise<Array<MetricEntry>>;

  /**
   * Writes a metric for a specific ProcessModel of a Correlation.
   *
   * @async
   * @param correlationId  The ID of the Correlation to which the
   *                       ProcessModel belongs.
   * @param processModelId The ID of ProcessModel for which to create a
   *                       metric.
   * @param metricType     The type of metric (OnEnter, OnExit, etc).
   * @param timestamp      Optional: The timestamp to use for the metric.
   *                       Defaults to "now".
   */
  writeMetricForProcessModel(correlationId: string,
                             processModelId: string,
                             metricType: MetricType,
                             timestamp?: Date): Promise<void>;

  /**
   * Writes a metric for a specific FlowNode of a ProcessModel within a
   * Correlation.
   *
   * @async
   * @param correlationId      The ID of the Correlation to which the
   *                           ProcessModel belongs.
   * @param processModelId     The ID of ProcessModel to which the FlowNode
   *                           belongs.
   * @param flowNodeInstanceId The instance ID of FlowNode for which to create
   *                           a metric.
   * @param flowNodeId         The ID of FlowNode for which to create a
   *                           metric.
   * @param metricType         The type of metric (OnEnter, OnExit, etc).
   * @param timestamp          Optional: The timestamp to use for the metric.
   *                           Defaults to "now".
   */
  writeMetricForFlowNode(correlationId: string,
                         processModelId: string,
                         flowNodeInstanceId: string,
                         flowNodeId: string,
                         metricType: MetricType,
                         timestamp?: Date): Promise<void>;
}
