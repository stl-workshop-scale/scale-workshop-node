# Root

# EvaluationDatasets

Types:

- <code><a href="./src/resources/evaluation-datasets.ts">AutoGeneratedDraftTestCaseApproveBatch</a></code>
- <code><a href="./src/resources/evaluation-datasets.ts">DeleteResponseEvaluationDatasetsSchemaObject</a></code>
- <code><a href="./src/resources/evaluation-datasets.ts">EvaluationDatasetResponseSchema</a></code>
- <code><a href="./src/resources/evaluation-datasets.ts">EvaluationDatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets.ts">EvaluationDatasetListResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets.ts">EvaluationDatasetPublishResponse</a></code>

Methods:

- <code title="post /v4/evaluation-datasets">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">create</a>({ ...params }) -> EvaluationDatasetResponseSchema</code>
- <code title="get /v4/evaluation-datasets/{evaluation_dataset_id}">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">retrieve</a>(evaluationDatasetId) -> EvaluationDatasetRetrieveResponse</code>
- <code title="patch /v4/evaluation-datasets/{evaluation_dataset_id}">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">update</a>(evaluationDatasetId, { ...params }) -> EvaluationDatasetResponseSchema</code>
- <code title="get /v4/evaluation-datasets">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">list</a>({ ...params }) -> EvaluationDatasetListResponse</code>
- <code title="delete /v4/evaluation-datasets/{evaluation_dataset_id}">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">delete</a>(evaluationDatasetId) -> DeleteResponseEvaluationDatasetsSchemaObject</code>
- <code title="post /v4/evaluation-datasets/{evaluation_dataset_id}/approve-batch">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">approveBatch</a>(evaluationDatasetId, { ...params }) -> AutoGeneratedDraftTestCaseApproveBatch</code>
- <code title="post /v4/evaluation-datasets/{evaluation_dataset_id}/publish">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets.ts">publish</a>(evaluationDatasetId, { ...params }) -> EvaluationDatasetPublishResponse</code>

# EvaluationDatasetsTestCases

Types:

- <code><a href="./src/resources/evaluation-datasets-test-cases.ts">EvaluationDatasetsTestCaseListResponse</a></code>

Methods:

- <code title="get /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases">client.evaluationDatasetsTestCases.<a href="./src/resources/evaluation-datasets-test-cases.ts">list</a>(evaluationDatasetId, { ...params }) -> EvaluationDatasetsTestCaseListResponse</code>