// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  correlationId: ':correlation_id',
  flowNodeId: ':flow_node_id',
};

const paths = {
  writeOnProcessStarted: `/correlation/${params.correlationId}/process_model/${params.processModelId}/started`,
  writeOnProcessFinished: `/correlation/${params.correlationId}/process_model/${params.processModelId}/finished`,
  writeOnProcessError: `/correlation/${params.correlationId}/process_model/${params.processModelId}/error`,
  writeOnFlowNodeInstanceEnter:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/entered`,
  writeOnFlowNodeInstanceExit:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/exited`,
  writeOnFlowNodeInstanceError:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/error`,
  writeOnFlowNodeInstanceSuspend:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/suspended`,
  writeOnFlowNodeInstanceResume:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/resumed`,
};

/**
 * Contains the endpoints and various rest parameters used by the Metrics API.
 */
export const restSettings = {
  /**
   * A collection of all URL parameters employed by the Metrics API.
   */
  params: params,
  /**
   * A collection of all URLs employed by the Metrics API.
   */
  paths: paths,
};
