/**
 * Contains functions for recording metrics relating to process instances and Flow Node Instances.
 */
export interface IMetricsService {

  /**
   * Writes a metric entry for a Process Model within a Correlation.
   * The metric contains performance related data, gathered at the beginning of the Process Models execution.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnProcessStarted(correlationId: string, processModelId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Process Model within a Correlation.
   * The metric contains performance related data, gathered after the Process Model finished execution.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnProcessFinished(correlationId: string, processModelId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Process Model within a Correlation.
   * The metric contains performance related data, gathered when the Process Model encountered an error.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnProcessError(correlationId: string, processModelId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Flow Node Instance of a specific Process Model within a Correlation.
   * The metric contains performance related data, gathered at the beginning of the Flow Node Instances execution.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The Flow Node Instance for which to create an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnFlowNodeInstanceEnter(correlationId: string, processModelId: string, flowNodeInstanceId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Flow Node Instance of a specific Process Model within a Correlation.
   * The metric contains performance related data, gathered after the Flow Node Instances finished execution.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The Flow Node Instance for which to create an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnFlowNodeInstanceExit(correlationId: string, processModelId: string, flowNodeInstanceId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Flow Node Instance of a specific Process Model within a Correlation.
   * The metric contains performance related data, gathered when the Flow Node Instance encountered an error.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The Flow Node Instance for which to create an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnFlowNodeInstanceError(correlationId: string, processModelId: string, flowNodeInstanceId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Flow Node Instance of a process instance.
   * The metric contains performance related data, gathered when the Flow Node Instance was suspended.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The Flow Node Instance for which to create an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnFlowNodeInstanceSuspend(correlationId: string, processModelId: string, flowNodeInstanceId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a Flow Node Instance of a process instance.
   * The metric contains performance related data, gathered when the Flow Node Instance was resumed.
   * @async
   * @param correlationId      The Correlation ID for which to create an onEnter-type metric.
   * @param processModelId     The Process Model ID for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The Flow Node Instance for which to create an onEnter-type metric.
   * @param timestamp          The date and time at which the metrics were recorded.
   */
  writeOnFlowNodeInstanceResume(correlationId: string, processModelId: string, flowNodeInstanceId: string, timestamp: Date): Promise<void>;
}
