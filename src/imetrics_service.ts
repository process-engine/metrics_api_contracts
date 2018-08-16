/**
 * Contains functions for recording metrics relating to process instances and flow node instances.
 */
export interface IMetricsService {

  /**
   * Writes a metric entry for a process model within a correlation.
   * The metric contains performance related data, gathered at the beginning of the process models execution.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   */
  writeOnProcessStarted(correlationId: string, processModelId: string): Promise<void>;

  /**
   * Writes a metric entry for a process model within a correlation.
   * The metric contains performance related data, gathered after the process model finished execution.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   */
  writeOnProcessFinished(correlationId: string, processModelId: string): Promise<void>;

  /**
   * Writes a metric entry for a process model within a correlation.
   * The metric contains performance related data, gathered when the process model encountered an error.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   */
  writeOnProcessError(correlationId: string, processModelId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a specific process model within a correlation.
   * The metric contains performance related data, gathered at the beginning of the flow node instances execution.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The flow node instance for which to create an onEnter-type metric.
   */
  writeOnFlowNodeInstanceEnter(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a specific process model within a correlation.
   * The metric contains performance related data, gathered after the flow node instances finished execution.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The flow node instance for which to create an onEnter-type metric.
   */
  writeOnFlowNodeInstanceExit(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a specific process model within a correlation.
   * The metric contains performance related data, gathered when the flow node instance encountered an error.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The flow node instance for which to create an onEnter-type metric.
   */
  writeOnFlowNodeInstanceError(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a process instance.
   * The metric contains performance related data, gathered when the flow node instance was suspended.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The flow node instance for which to create an onEnter-type metric.
   */
  writeOnFlowNodeInstanceSuspend(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a process instance.
   * The metric contains performance related data, gathered when the flow node instance was resumed.
   * @async
   * @param correlationId      The correlation id for which to create an onEnter-type metric.
   * @param processModelId     The process model id for which to write an onEnter-type metric.
   * @param flowNodeInstanceId The flow node instance for which to create an onEnter-type metric.
   */
  writeOnFlowNodeInstanceResume(correlationId: string, processModelId: string, flowNodeInstanceId: string): Promise<void>;
}
