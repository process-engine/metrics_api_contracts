// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  correlationId: ':correlation_id',
  flowNodeInstanceId: ':flow_node_instance_id',
};

const paths = {
  writeOnProcessStarted: `/correlation/${params.correlationId}/process_model/${params.processModelId}/started`,
  writeOnProcessFinished: `/correlation/${params.correlationId}/process_model/${params.processModelId}/finished`,
  writeOnProcessError: `/correlation/${params.correlationId}/process_model/${params.processModelId}/error`,
  writeOnFlowNodeInstanceEnter:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node_instance/${params.flowNodeInstanceId}/entered`,
  writeOnFlowNodeInstanceExit:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node_instance/${params.flowNodeInstanceId}/exited`,
  writeOnFlowNodeInstanceError:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node_instance/${params.flowNodeInstanceId}/error`,
  writeOnFlowNodeInstanceSuspend:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node_instance/${params.flowNodeInstanceId}/suspended`,
  writeOnFlowNodeInstanceResume:
    `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node_instance/${params.flowNodeInstanceId}/resumed`,
};

/**
 * Contains the endpoints and various rest parameters used by the metrics api.
 */
export const restSettings = {
  /**
   * A collection of all url parameters employed by the metrics api.
   */
  params: params,
  /**
   * A collection of all urls employed by the metrics api.
   */
  paths: paths,
};
