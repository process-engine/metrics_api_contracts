import {ProcessToken} from './process_token';

/**
 * Contains functions for recording metrics relating to
 * ProcessInstances and FlowNodeInstances.
 */
export interface IMetricsService {

  /**
   * Writes a metric entry for a ProcessModel within a Correlation.
   * The metric contains performance related data, gathered at the beginning
   * of the ProcessModels execution.
   * @async
   * @param correlationId  The Correlation ID for which to write the metric.
   * @param processModelId The ProcessModel ID for which to write the metric.
   * @param timestamp      The date and time at which the metric was recorded.
   */
  writeOnProcessStarted(correlationId: string, processModelId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a ProcessModel within a Correlation.
   * The metric contains performance related data, gathered after the
   * ProcessModel finished execution.
   * @async
   * @param correlationId  The Correlation ID for which to write the metric.
   * @param processModelId The ProcessModel ID for which to write the metric.
   * @param timestamp      The date and time at which the metric was recorded.
   */
  writeOnProcessFinished(correlationId: string, processModelId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a ProcessModel within a Correlation.
   * The metric contains performance related data, gathered when the
   * ProcessModel encountered an error.
   * @async
   * @param correlationId  The Correlation ID for which to write the metric.
   * @param processModelId The ProcessModel ID for which to write the metric.
   * @param timestamp      The date and time at which the metric was recorded.
   */
  writeOnProcessError(correlationId: string, processModelId: string, timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a FlowNodeInstance of a specific ProcessModel
   * within a Correlation.
   * The metric contains performance related data, gathered at the beginning
   * of the FlowNodeInstances execution.
   * @async
   * @param correlationId      The Correlation ID for which to write the metric.
   * @param processModelId     The ProcessModel ID for which to write the metric.
   * @param flowNodeInstanceId The FlowNodeInstance for which to write the metric.
   * @param processToken       The process token that the FlowNodeInstance had
   *                           at the time the metric was recorded.
   * @param timestamp          The date and time at which the metric was recorded.
   */
  writeOnFlowNodeInstanceEnter(correlationId: string,
                               processModelId: string,
                               flowNodeInstanceId: string,
                               flowNodeId: string,
                               processToken: ProcessToken,
                               timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a FlowNodeInstance of a specific ProcessModel
   * within a Correlation.
   * The metric contains performance related data, gathered after the
   * FlowNodeInstances finished execution.
   * @async
   * @param correlationId      The Correlation ID for which to write the metric.
   * @param processModelId     The ProcessModel ID for which to write the metric.
   * @param flowNodeInstanceId The FlowNodeInstance for which to write the metric.
   * @param processToken       The process token that the FlowNodeInstance had
   *                           at the time the metric was recorded.
   * @param timestamp          The date and time at which the metric was recorded.
   */
  writeOnFlowNodeInstanceExit(correlationId: string,
                              processModelId: string,
                              flowNodeInstanceId: string,
                              flowNodeId: string,
                              processToken: ProcessToken,
                              timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a FlowNodeInstance of a specific ProcessModel
   * within a Correlation.
   * The metric contains performance related data, gathered when the
   * FlowNodeInstance encountered an error.
   * @async
   * @param correlationId      The Correlation ID for which to write the metric.
   * @param processModelId     The ProcessModel ID for which to write the metric.
   * @param flowNodeInstanceId The FlowNodeInstance for which to write the metric.
   * @param processToken       The process token that the FlowNodeInstance had
   *                           at the time the metric was recorded.
   * @param timestamp          The date and time at which the metric was recorded.
   */
  writeOnFlowNodeInstanceError(correlationId: string,
                               processModelId: string,
                               flowNodeInstanceId: string,
                               flowNodeId: string,
                               processToken: ProcessToken,
                               timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a FlowNodeInstance of a ProcessInstance.
   * The metric contains performance related data, gathered when the
   * FlowNodeInstance was suspended.
   * @async
   * @param correlationId      The Correlation ID for which to write the metric.
   * @param processModelId     The ProcessModel ID for which to write the metric.
   * @param flowNodeInstanceId The FlowNodeInstance for which to write the metric.
   * @param processToken       The process token that the FlowNodeInstance had
   *                           at the time the metric was recorded.
   * @param timestamp          The date and time at which the metric was recorded.
   */
  writeOnFlowNodeInstanceSuspend(correlationId: string,
                                 processModelId: string,
                                 flowNodeInstanceId: string,
                                 flowNodeId: string,
                                 processToken: ProcessToken,
                                 timestamp: Date): Promise<void>;

  /**
   * Writes a metric entry for a FlowNodeInstance of a ProcessInstance.
   * The metric contains performance related data, gathered when the
   * FlowNodeInstance was resumed.
   * @async
   * @param correlationId      The Correlation ID for which to write the metric.
   * @param processModelId     The ProcessModel ID for which to write the metric.
   * @param flowNodeInstanceId The FlowNodeInstance for which to write the metric.
   * @param processToken       The process token that the FlowNodeInstance had
   *                           at the time the metric was recorded.
   * @param timestamp          The date and time at which the metric was recorded.
   */
  writeOnFlowNodeInstanceResume(correlationId: string,
                                processModelId: string,
                                flowNodeInstanceId: string,
                                flowNodeId: string,
                                processToken: ProcessToken,
                                timestamp: Date): Promise<void>;
}
