# Shared

Types:

- <code><a href="./src/resources/shared.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/shared.ts">ChatMessage</a></code>
- <code><a href="./src/resources/shared.ts">FlexibleChunk</a></code>
- <code><a href="./src/resources/shared.ts">StringExtraInfoSchema</a></code>
- <code><a href="./src/resources/shared.ts">SystemMessage</a></code>
- <code><a href="./src/resources/shared.ts">UserMessage</a></code>

# EvaluationDatasets

Types:

- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetCreateResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetUpdateResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetListResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetApproveBatchResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetPublishResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">EvaluationDatasetRemoveResponse</a></code>

Methods:

- <code title="post /v4/evaluation-datasets">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">create</a>({ ...params }) -> EvaluationDatasetCreateResponse</code>
- <code title="get /v4/evaluation-datasets/{evaluation_dataset_id}">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">retrieve</a>(evaluationDatasetId) -> EvaluationDatasetRetrieveResponse</code>
- <code title="patch /v4/evaluation-datasets/{evaluation_dataset_id}">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">update</a>(evaluationDatasetId, { ...params }) -> EvaluationDatasetUpdateResponse</code>
- <code title="get /v4/evaluation-datasets">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">list</a>({ ...params }) -> EvaluationDatasetListResponsesPageNumberPage</code>
- <code title="post /v4/evaluation-datasets/{evaluation_dataset_id}/approve-batch">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">approveBatch</a>(evaluationDatasetId, { ...params }) -> EvaluationDatasetApproveBatchResponse</code>
- <code title="post /v4/evaluation-datasets/{evaluation_dataset_id}/publish">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">publish</a>(evaluationDatasetId, { ...params }) -> EvaluationDatasetPublishResponse</code>
- <code title="delete /v4/evaluation-datasets/{evaluation_dataset_id}">client.evaluationDatasets.<a href="./src/resources/evaluation-datasets/evaluation-datasets.ts">remove</a>(evaluationDatasetId) -> EvaluationDatasetRemoveResponse</code>

## TestCases

Types:

- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">ArtifactSchemaGeneration</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">FlexibleTestCaseSchema</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">FlexibleTestCaseVersion</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">GenerationTestCaseSchema</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">GenerationTestCaseVersion</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">PaginatedTestCases</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">TestCase</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">TestCaseDeleteResponse</a></code>
- <code><a href="./src/resources/evaluation-datasets/test-cases.ts">TestCaseBatchResponse</a></code>

Methods:

- <code title="post /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases">client.evaluationDatasets.testCases.<a href="./src/resources/evaluation-datasets/test-cases.ts">create</a>(evaluationDatasetId, { ...params }) -> TestCase</code>
- <code title="get /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases/{test_case_id}">client.evaluationDatasets.testCases.<a href="./src/resources/evaluation-datasets/test-cases.ts">retrieve</a>(evaluationDatasetId, testCaseId) -> TestCase</code>
- <code title="patch /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases/{test_case_id}">client.evaluationDatasets.testCases.<a href="./src/resources/evaluation-datasets/test-cases.ts">update</a>(evaluationDatasetId, testCaseId, { ...params }) -> TestCase</code>
- <code title="get /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases">client.evaluationDatasets.testCases.<a href="./src/resources/evaluation-datasets/test-cases.ts">list</a>(evaluationDatasetId, { ...params }) -> TestCasesPageNumberPage</code>
- <code title="delete /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases/{test_case_id}">client.evaluationDatasets.testCases.<a href="./src/resources/evaluation-datasets/test-cases.ts">delete</a>(evaluationDatasetId, testCaseId) -> TestCaseDeleteResponse</code>
- <code title="post /v4/evaluation-datasets/{evaluation_dataset_id}/test-cases/batch">client.evaluationDatasets.testCases.<a href="./src/resources/evaluation-datasets/test-cases.ts">batch</a>(evaluationDatasetId, [ ...items ]) -> TestCaseBatchResponse</code>
