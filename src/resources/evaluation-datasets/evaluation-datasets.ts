// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EvaluationDatasetsAPI from './evaluation-datasets';
import * as TestCasesAPI from './test-cases';
import { PageNumberPage, type PageNumberPageParams } from '../../pagination';

export class EvaluationDatasets extends APIResource {
  testCases: TestCasesAPI.TestCases = new TestCasesAPI.TestCases(this._client);

  /**
   * ### Description
   *
   * Creates a evaluation dataset
   *
   * ### Details
   *
   * This API can be used to create a evaluation dataset. To use this API, review the
   * request schema and pass in all fields that are required to create a evaluation
   * dataset.
   */
  create(
    body: EvaluationDatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetCreateResponse> {
    return this._client.post('/v4/evaluation-datasets', { body, ...options });
  }

  /**
   * ### Description
   *
   * Gets the details of a dataset.
   */
  retrieve(
    evaluationDatasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetRetrieveResponse> {
    return this._client.get(`/v4/evaluation-datasets/${evaluationDatasetId}`, options);
  }

  /**
   * ### Description
   *
   * Updates a evaluation dataset
   *
   * ### Details
   *
   * This API can be used to update the evaluation dataset that matches the ID that
   * was passed in as a path parameter. To use this API, pass in the `id` that was
   * returned from your Create Evaluation Dataset API call as a path parameter.
   *
   * Review the request schema to see the fields that can be updated.
   */
  update(
    evaluationDatasetId: string,
    body: EvaluationDatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetUpdateResponse> {
    return this._client.patch(`/v4/evaluation-datasets/${evaluationDatasetId}`, { body, ...options });
  }

  /**
   * ### Description
   *
   * Lists all evaluation datasets accessible to the user.
   *
   * ### Details
   *
   * This API can be used to list evaluation datasets. If a user has access to
   * multiple accounts, all evaluation datasets from all accounts the user is
   * associated with will be returned.
   */
  list(
    query?: EvaluationDatasetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluationDatasetListResponsesPageNumberPage, EvaluationDatasetListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluationDatasetListResponsesPageNumberPage, EvaluationDatasetListResponse>;
  list(
    query: EvaluationDatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluationDatasetListResponsesPageNumberPage, EvaluationDatasetListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v4/evaluation-datasets', EvaluationDatasetListResponsesPageNumberPage, {
      query,
      ...options,
    });
  }

  /**
   * Approve Auto Generated Test Cases Batch
   */
  approveBatch(
    evaluationDatasetId: string,
    params: EvaluationDatasetApproveBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetApproveBatchResponse> {
    const { force, ...body } = params;
    return this._client.post(`/v4/evaluation-datasets/${evaluationDatasetId}/approve-batch`, {
      query: { force },
      body,
      ...options,
    });
  }

  /**
   * Publish Latest Evaluation Dataset Version
   */
  publish(
    evaluationDatasetId: string,
    params?: EvaluationDatasetPublishParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetPublishResponse>;
  publish(
    evaluationDatasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetPublishResponse>;
  publish(
    evaluationDatasetId: string,
    params: EvaluationDatasetPublishParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetPublishResponse> {
    if (isRequestOptions(params)) {
      return this.publish(evaluationDatasetId, {}, params);
    }
    const { force } = params;
    return this._client.post(`/v4/evaluation-datasets/${evaluationDatasetId}/publish`, {
      query: { force },
      ...options,
    });
  }

  /**
   * ### Description
   *
   * Deletes the dataset, and all other entities associated with the dataset, such as
   * test cases, evaluations and results.
   *
   * ### Details
   *
   * **This is a permanent and destructive action that cannot be undone.**
   */
  remove(
    evaluationDatasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationDatasetRemoveResponse> {
    return this._client.delete(`/v4/evaluation-datasets/${evaluationDatasetId}`, options);
  }
}

export class EvaluationDatasetListResponsesPageNumberPage extends PageNumberPage<EvaluationDatasetListResponse> {}

export interface EvaluationDatasetCreateResponse {
  /**
   * The unique identifier of the entity.
   */
  id: string;

  /**
   * The ID of the account that owns the given entity.
   */
  account_id: string;

  /**
   * The date and time when the entity was created in ISO format.
   */
  created_at: string;

  /**
   * The user who originally created the entity.
   */
  created_by_user_id: string;

  /**
   * The schema type of the dataset.
   */
  kind_schema: 'GENERATION' | 'FLEXIBLE';

  /**
   * The name of the dataset
   */
  name: string;

  /**
   * The date and time when the entity was last updated in ISO format.
   */
  updated_at: string;

  /**
   * The date and time when the entity was archived in ISO format.
   */
  archived_at?: string;

  /**
   * ID of the knowledge base that the evaluation dataset is associated with.
   */
  knowledge_base_id?: string;

  /**
   * Boolean to check whether or not the knowledge base has been uploaded to since
   * publication of the dataset.
   */
  out_of_date?: boolean;

  schema_sub_type?: 'summarization' | 'translation';

  /**
   * The vendor of the evaluation dataset (e.g. 'Scale' for Scale off-the-shelf
   * datasets). Null if the evaluation dataset is not from a vendor (e.g., is created
   * by the customer).
   */
  vendor?: 'scale';
}

export interface EvaluationDatasetRetrieveResponse {
  /**
   * The unique identifier of the entity.
   */
  id: string;

  /**
   * The ID of the account that owns the given entity.
   */
  account_id: string;

  /**
   * The date and time when the entity was created in ISO format.
   */
  created_at: string;

  /**
   * The user who originally created the entity.
   */
  created_by_user_id: string;

  /**
   * The schema type of the dataset.
   */
  kind_schema: 'GENERATION' | 'FLEXIBLE';

  /**
   * The name of the dataset
   */
  name: string;

  /**
   * The date and time when the entity was last updated in ISO format.
   */
  updated_at: string;

  /**
   * The date and time when the entity was archived in ISO format.
   */
  archived_at?: string;

  evaluation_dataset_versions?: Array<EvaluationDatasetRetrieveResponse.EvaluationDatasetVersion>;

  /**
   * ID of the knowledge base that the evaluation dataset is associated with.
   */
  knowledge_base_id?: string;

  /**
   * Boolean to check whether or not the knowledge base has been uploaded to since
   * publication of the dataset.
   */
  out_of_date?: boolean;

  schema_sub_type?: 'summarization' | 'translation';

  /**
   * The vendor of the evaluation dataset (e.g. 'Scale' for Scale off-the-shelf
   * datasets). Null if the evaluation dataset is not from a vendor (e.g., is created
   * by the customer).
   */
  vendor?: 'scale';
}

export namespace EvaluationDatasetRetrieveResponse {
  export interface EvaluationDatasetVersion {
    /**
     * The unique identifier of the entity.
     */
    id: string;

    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;

    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;

    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;

    /**
     * Boolean to check whether or not the evaluation dataset is in draft mode
     */
    draft: boolean;

    /**
     * The ID of the associated evaluation dataset.
     */
    evaluation_dataset_id: string;

    /**
     * The version number, automatically incremented on creation
     */
    num: number;

    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;

    /**
     * The date and time that all test case results for the evaluation were completed
     * for the evaluation in ISO format.
     */
    published_at?: string;
  }
}

export interface EvaluationDatasetUpdateResponse {
  /**
   * The unique identifier of the entity.
   */
  id: string;

  /**
   * The ID of the account that owns the given entity.
   */
  account_id: string;

  /**
   * The date and time when the entity was created in ISO format.
   */
  created_at: string;

  /**
   * The user who originally created the entity.
   */
  created_by_user_id: string;

  /**
   * The schema type of the dataset.
   */
  kind_schema: 'GENERATION' | 'FLEXIBLE';

  /**
   * The name of the dataset
   */
  name: string;

  /**
   * The date and time when the entity was last updated in ISO format.
   */
  updated_at: string;

  /**
   * The date and time when the entity was archived in ISO format.
   */
  archived_at?: string;

  /**
   * ID of the knowledge base that the evaluation dataset is associated with.
   */
  knowledge_base_id?: string;

  /**
   * Boolean to check whether or not the knowledge base has been uploaded to since
   * publication of the dataset.
   */
  out_of_date?: boolean;

  schema_sub_type?: 'summarization' | 'translation';

  /**
   * The vendor of the evaluation dataset (e.g. 'Scale' for Scale off-the-shelf
   * datasets). Null if the evaluation dataset is not from a vendor (e.g., is created
   * by the customer).
   */
  vendor?: 'scale';
}

export interface EvaluationDatasetListResponse {
  /**
   * The unique identifier of the entity.
   */
  id: string;

  /**
   * The ID of the account that owns the given entity.
   */
  account_id: string;

  /**
   * The date and time when the entity was created in ISO format.
   */
  created_at: string;

  /**
   * The user who originally created the entity.
   */
  created_by_user_id: string;

  /**
   * The schema type of the dataset.
   */
  kind_schema: 'GENERATION' | 'FLEXIBLE';

  /**
   * The name of the dataset
   */
  name: string;

  /**
   * The date and time when the entity was last updated in ISO format.
   */
  updated_at: string;

  /**
   * The date and time when the entity was archived in ISO format.
   */
  archived_at?: string;

  evaluation_dataset_versions?: Array<EvaluationDatasetListResponse.EvaluationDatasetVersion>;

  /**
   * ID of the knowledge base that the evaluation dataset is associated with.
   */
  knowledge_base_id?: string;

  /**
   * Boolean to check whether or not the knowledge base has been uploaded to since
   * publication of the dataset.
   */
  out_of_date?: boolean;

  schema_sub_type?: 'summarization' | 'translation';

  /**
   * The vendor of the evaluation dataset (e.g. 'Scale' for Scale off-the-shelf
   * datasets). Null if the evaluation dataset is not from a vendor (e.g., is created
   * by the customer).
   */
  vendor?: 'scale';
}

export namespace EvaluationDatasetListResponse {
  export interface EvaluationDatasetVersion {
    /**
     * The unique identifier of the entity.
     */
    id: string;

    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;

    /**
     * The date and time when the entity was created in ISO format.
     */
    created_at: string;

    /**
     * The user who originally created the entity.
     */
    created_by_user_id: string;

    /**
     * Boolean to check whether or not the evaluation dataset is in draft mode
     */
    draft: boolean;

    /**
     * The ID of the associated evaluation dataset.
     */
    evaluation_dataset_id: string;

    /**
     * The version number, automatically incremented on creation
     */
    num: number;

    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;

    /**
     * The date and time that all test case results for the evaluation were completed
     * for the evaluation in ISO format.
     */
    published_at?: string;
  }
}

export interface EvaluationDatasetApproveBatchResponse {
  /**
   * List of responses for each of the input draft test cases.
   */
  autogenerated_draft_test_cases: Array<EvaluationDatasetApproveBatchResponse.AutogeneratedDraftTestCase>;

  /**
   * Whether or not the batch approval was successful
   */
  success: boolean;
}

export namespace EvaluationDatasetApproveBatchResponse {
  export interface AutogeneratedDraftTestCase {
    /**
     * Draft test_case_id that has chunk_ids missing
     */
    autogenerated_draft_test_case_id: string;

    failed_chunks: Array<AutogeneratedDraftTestCase.FailedChunk>;

    /**
     * Whether or not the test case was successfully approved
     */
    success: boolean;
  }

  export namespace AutogeneratedDraftTestCase {
    export interface FailedChunk {
      /**
       * Artifact Content Modification Identifier of the missing chunk
       */
      artifact_content_modification_identifier: string;

      /**
       * Artifact ID of the missing chunk
       */
      artifact_id: string;

      /**
       * Artifact Name of the missing chunk
       */
      artifact_name: string;

      /**
       * Text of chunk_id that is missing
       */
      chunk_text: string;
    }
  }
}

export interface EvaluationDatasetPublishResponse {
  /**
   * List of responses for each of the input draft test cases.
   */
  autogenerated_draft_test_cases: Array<EvaluationDatasetPublishResponse.AutogeneratedDraftTestCase>;

  /**
   * Whether or not the evaluation dataset was successfully published
   */
  success: boolean;
}

export namespace EvaluationDatasetPublishResponse {
  export interface AutogeneratedDraftTestCase {
    /**
     * Draft test_case_id that has chunk_ids missing
     */
    autogenerated_draft_test_case_id: string;

    failed_chunks: Array<AutogeneratedDraftTestCase.FailedChunk>;

    /**
     * Whether or not the test case was successfully approved
     */
    success: boolean;
  }

  export namespace AutogeneratedDraftTestCase {
    export interface FailedChunk {
      /**
       * Artifact Content Modification Identifier of the missing chunk
       */
      artifact_content_modification_identifier: string;

      /**
       * Artifact ID of the missing chunk
       */
      artifact_id: string;

      /**
       * Artifact Name of the missing chunk
       */
      artifact_name: string;

      /**
       * Text of chunk_id that is missing
       */
      chunk_text: string;
    }
  }
}

export interface EvaluationDatasetRemoveResponse {
  count: number;

  success: boolean;
}

export type EvaluationDatasetCreateParams =
  | EvaluationDatasetCreateParams.ManualEvaluationDatasetRequest
  | EvaluationDatasetCreateParams.AutoGeneratedEvaluationDatasetRequest
  | EvaluationDatasetCreateParams.SafetyEvaluationDatasetRequest;

export namespace EvaluationDatasetCreateParams {
  export interface ManualEvaluationDatasetRequest {
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;

    /**
     * The schema type of the dataset
     */
    kind_schema: 'GENERATION' | 'FLEXIBLE';

    /**
     * The name of the dataset
     */
    name: string;

    /**
     * Manually or automatically generated dataset
     */
    type: 'manual';
  }

  export interface AutoGeneratedEvaluationDatasetRequest {
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;

    /**
     * The schema type of the dataset. Only GENERATION is currently supported.
     */
    kind_schema: 'GENERATION';

    /**
     * ID of the knowledge base to generate the evaluation dataset from.
     */
    knowledge_base_id: string;

    /**
     * The name of the dataset
     */
    name: string;

    /**
     * Manually or automatically generated dataset
     */
    type: 'autogenerated';
  }

  export interface SafetyEvaluationDatasetRequest {
    /**
     * The ID of the account that owns the given entity.
     */
    account_id: string;

    /**
     * Advanced configuration for the safety evaluation dataset.
     */
    advanced_config: Record<string, Array<string>>;

    /**
     * List of harms to generate the dataset for.
     */
    harms_list: Array<string>;

    /**
     * The schema type of the dataset. Only GENERATION is currently supported.
     */
    kind_schema: 'GENERATION';

    /**
     * The name of the dataset
     */
    name: string;

    /**
     * Manually or automatically generated dataset
     */
    type: 'safety';
  }
}

export type EvaluationDatasetUpdateParams =
  | EvaluationDatasetUpdateParams.PatchEvaluationDatasetRequest
  | EvaluationDatasetUpdateParams.RestoreRequest;

export namespace EvaluationDatasetUpdateParams {
  export interface PatchEvaluationDatasetRequest {
    /**
     * The name of the dataset
     */
    name: string;

    /**
     * Set to true to restore the entity from the database.
     */
    restore: false;
  }

  export interface RestoreRequest {
    /**
     * Set to true to restore the entity from the database.
     */
    restore: true;
  }
}

export interface EvaluationDatasetListParams extends PageNumberPageParams {
  include_archived?: boolean;
}

export interface EvaluationDatasetApproveBatchParams {
  /**
   * Body param: Ids of auto generated draft test cases to be approved.
   */
  autogenerated_draft_test_cases: Array<string>;

  /**
   * Query param: Force approve a batch of autogenerated test case IDs for the
   * evaluation dataset
   */
  force?: boolean;
}

export interface EvaluationDatasetPublishParams {
  /**
   * Force approve an evaluation dataset
   */
  force?: boolean;
}

export namespace EvaluationDatasets {
  export import EvaluationDatasetCreateResponse = EvaluationDatasetsAPI.EvaluationDatasetCreateResponse;
  export import EvaluationDatasetRetrieveResponse = EvaluationDatasetsAPI.EvaluationDatasetRetrieveResponse;
  export import EvaluationDatasetUpdateResponse = EvaluationDatasetsAPI.EvaluationDatasetUpdateResponse;
  export import EvaluationDatasetListResponse = EvaluationDatasetsAPI.EvaluationDatasetListResponse;
  export import EvaluationDatasetApproveBatchResponse = EvaluationDatasetsAPI.EvaluationDatasetApproveBatchResponse;
  export import EvaluationDatasetPublishResponse = EvaluationDatasetsAPI.EvaluationDatasetPublishResponse;
  export import EvaluationDatasetRemoveResponse = EvaluationDatasetsAPI.EvaluationDatasetRemoveResponse;
  export import EvaluationDatasetListResponsesPageNumberPage = EvaluationDatasetsAPI.EvaluationDatasetListResponsesPageNumberPage;
  export import EvaluationDatasetCreateParams = EvaluationDatasetsAPI.EvaluationDatasetCreateParams;
  export import EvaluationDatasetUpdateParams = EvaluationDatasetsAPI.EvaluationDatasetUpdateParams;
  export import EvaluationDatasetListParams = EvaluationDatasetsAPI.EvaluationDatasetListParams;
  export import EvaluationDatasetApproveBatchParams = EvaluationDatasetsAPI.EvaluationDatasetApproveBatchParams;
  export import EvaluationDatasetPublishParams = EvaluationDatasetsAPI.EvaluationDatasetPublishParams;
  export import TestCases = TestCasesAPI.TestCases;
  export import ArtifactSchemaGeneration = TestCasesAPI.ArtifactSchemaGeneration;
  export import FlexibleTestCaseSchema = TestCasesAPI.FlexibleTestCaseSchema;
  export import FlexibleTestCaseVersion = TestCasesAPI.FlexibleTestCaseVersion;
  export import GenerationTestCaseSchema = TestCasesAPI.GenerationTestCaseSchema;
  export import GenerationTestCaseVersion = TestCasesAPI.GenerationTestCaseVersion;
  export import PaginatedTestCases = TestCasesAPI.PaginatedTestCases;
  export import TestCase = TestCasesAPI.TestCase;
  export import TestCaseDeleteResponse = TestCasesAPI.TestCaseDeleteResponse;
  export import TestCaseBatchResponse = TestCasesAPI.TestCaseBatchResponse;
  export import TestCasesPageNumberPage = TestCasesAPI.TestCasesPageNumberPage;
  export import TestCaseCreateParams = TestCasesAPI.TestCaseCreateParams;
  export import TestCaseUpdateParams = TestCasesAPI.TestCaseUpdateParams;
  export import TestCaseListParams = TestCasesAPI.TestCaseListParams;
  export import TestCaseBatchParams = TestCasesAPI.TestCaseBatchParams;
}
