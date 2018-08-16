/**
 * Contains functions for recording metrics relating to process instances and flow node instances.
 */
export interface IMetricsService {

  /**
   * Writes a metric entry for a process model within a correlation.
   * The metric contains performance related data, gathered at the beginning of the process models execution.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   */
  writeOnProcessStarted(processModeldId: string, correlationId: string): Promise<void>;

  /**
   * Writes a metric entry for a process model within a correlation.
   * The metric contains performance related data, gathered after the process model finished execution.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   */
  writeOnProcessFinished(processModeldId: string, correlationId: string): Promise<void>;

  /**
   * Writes a metric entry for a process model within a correlation.
   * The metric contains performance related data, gathered when the process model encountered an error.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   */
  writeOnProcessError(processModeldId: string, correlationId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a specific process model within a correlation.
   * The metric contains performance related data, gathered at the beginning of the flow node instances execution.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnEnter(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a specific process model within a correlation.
   * The metric contains performance related data, gathered after the flow node instances finished execution.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnExit(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a specific process model within a correlation.
   * The metric contains performance related data, gathered when the flow node instance encountered an error.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnError(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a process instance.
   * The metric contains performance related data, gathered when the flow node instance was suspended.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnSuspend(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void>;

  /**
   * Writes a metric entry for a flow node instance of a process instance.
   * The metric contains performance related data, gathered when the flow node instance was resumed.
   * @async
   * @param processModeldId     The process model id for which to write an onEnter-type metric.
   * @param correlationId       The correlation id for which to create an onEnter-type metric.
   * @param flowNodeInstanceId  The flow node instance for which to create an onEnter-type metric.
   */
  writeOnResume(processModeldId: string, correlationId: string, flowNodeInstanceId: string): Promise<void>;
}
