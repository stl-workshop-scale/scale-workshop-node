// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Authentication header containing API key (find it in our dashboard at https://...)
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SCALE_WORKSHOP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Scale Workshop API.
 */
export class ScaleWorkshop extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Scale Workshop API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['AWESOME_COMPANY_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['SCALE_WORKSHOP_BASE_URL'] ?? https://api.egp.scale.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('SCALE_WORKSHOP_BASE_URL'),
    apiKey = Core.readEnv('AWESOME_COMPANY_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.ScaleWorkshopError(
        "The AWESOME_COMPANY_API_KEY environment variable is missing or empty; either provide it, or instantiate the ScaleWorkshop client with an apiKey option, like new ScaleWorkshop({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.egp.scale.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  root: API.Root = new API.Root(this);
  evaluationDatasets: API.EvaluationDatasets = new API.EvaluationDatasets(this);
  evaluationDatasetsTestCases: API.EvaluationDatasetsTestCases = new API.EvaluationDatasetsTestCases(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static ScaleWorkshop = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static ScaleWorkshopError = Errors.ScaleWorkshopError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  ScaleWorkshopError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace ScaleWorkshop {
  export import RequestOptions = Core.RequestOptions;

  export import PageNumberPage = Pagination.PageNumberPage;
  export import PageNumberPageParams = Pagination.PageNumberPageParams;
  export import PageNumberPageResponse = Pagination.PageNumberPageResponse;

  export import Root = API.Root;

  export import EvaluationDatasets = API.EvaluationDatasets;
  export import AutoGeneratedDraftTestCaseApproveBatch = API.AutoGeneratedDraftTestCaseApproveBatch;
  export import DeleteResponseEvaluationDatasetsSchemaObject = API.DeleteResponseEvaluationDatasetsSchemaObject;
  export import EvaluationDatasetResponseSchema = API.EvaluationDatasetResponseSchema;
  export import EvaluationDatasetRetrieveResponse = API.EvaluationDatasetRetrieveResponse;
  export import EvaluationDatasetListResponse = API.EvaluationDatasetListResponse;
  export import EvaluationDatasetPublishResponse = API.EvaluationDatasetPublishResponse;
  export import EvaluationDatasetCreateParams = API.EvaluationDatasetCreateParams;
  export import EvaluationDatasetUpdateParams = API.EvaluationDatasetUpdateParams;
  export import EvaluationDatasetListParams = API.EvaluationDatasetListParams;
  export import EvaluationDatasetApproveBatchParams = API.EvaluationDatasetApproveBatchParams;
  export import EvaluationDatasetPublishParams = API.EvaluationDatasetPublishParams;

  export import EvaluationDatasetsTestCases = API.EvaluationDatasetsTestCases;
  export import EvaluationDatasetsTestCaseListResponse = API.EvaluationDatasetsTestCaseListResponse;
  export import EvaluationDatasetsTestCaseListParams = API.EvaluationDatasetsTestCaseListParams;
}

export default ScaleWorkshop;
