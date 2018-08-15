/**
 * Contains functions for recording metrics relating to process instances and flow node instances.
 */
export interface IMetricsService {
  /**
   * Writes a metric entry for a process instance, or a specific flow node instance of that process instance.
   * The metric contains performance related data, gathered at the beginning of the process models/flow node instances execution.
   *
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnEnter(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  /**
   * Writes a metric entry for a process instance, or a specific flow node instance of that process instance.
   * The metric contains performance related data, gathered after the process models/flow node instances finished execution.
   *
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnExit(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  /**
   * Writes a metric entry for a process instance, or a specific flow node instance of that process instance.
   * The metric contains performance related data, gathered when the process models/flow node instance encountered an error.
   *
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnError(processModeldId: string, correlationId: string, flowNodeInstanceId?: string): void;
  /**
   * For FlowNodeInstances only.
   * Writes a metric entry for a flow node instance of a process instance.
   * The metric contains performance related data, gathered when the flow node instance was suspended.
   *
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnSuspend(processModeldId: string, correlationId: string, flowNodeInstanceId: string): void;
  /**
   * For FlowNodeInstances only.
   * Writes a metric entry for a flow node instance of a process instance.
   * The metric contains performance related data, gathered when the flow node instance was resumed.
   *
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnResume(processModeldId: string, correlationId: string, flowNodeInstanceId: string): void;
}
