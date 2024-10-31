// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageNumberPageParams, PageNumberPageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  EvaluationDatasetApproveBatchParams,
  EvaluationDatasetApproveBatchResponse,
  EvaluationDatasetListParams,
  EvaluationDatasetListResponse,
  EvaluationDatasetListResponsesPageNumberPage,
  EvaluationDatasetPublishParams,
  EvaluationDatasetPublishResponse,
  EvaluationDatasetRemoveResponse,
  EvaluationDatasetRetrieveResponse,
  EvaluationDatasetUpdateParams,
  EvaluationDatasetUpdateResponse,
  EvaluationDatasets,
} from './resources/evaluation-datasets/evaluation-datasets';

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

  evaluationDatasets: API.EvaluationDatasets = new API.EvaluationDatasets(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
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

export const ScaleWorkshopError = Errors.ScaleWorkshopError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

ScaleWorkshop.EvaluationDatasets = EvaluationDatasets;
ScaleWorkshop.EvaluationDatasetListResponsesPageNumberPage = EvaluationDatasetListResponsesPageNumberPage;

export declare namespace ScaleWorkshop {
  export type RequestOptions = Core.RequestOptions;

  export import PageNumberPage = Pagination.PageNumberPage;
  export {
    type PageNumberPageParams as PageNumberPageParams,
    type PageNumberPageResponse as PageNumberPageResponse,
  };

  export {
    EvaluationDatasets as EvaluationDatasets,
    type EvaluationDatasetRetrieveResponse as EvaluationDatasetRetrieveResponse,
    type EvaluationDatasetUpdateResponse as EvaluationDatasetUpdateResponse,
    type EvaluationDatasetListResponse as EvaluationDatasetListResponse,
    type EvaluationDatasetApproveBatchResponse as EvaluationDatasetApproveBatchResponse,
    type EvaluationDatasetPublishResponse as EvaluationDatasetPublishResponse,
    type EvaluationDatasetRemoveResponse as EvaluationDatasetRemoveResponse,
    EvaluationDatasetListResponsesPageNumberPage as EvaluationDatasetListResponsesPageNumberPage,
    type EvaluationDatasetUpdateParams as EvaluationDatasetUpdateParams,
    type EvaluationDatasetListParams as EvaluationDatasetListParams,
    type EvaluationDatasetApproveBatchParams as EvaluationDatasetApproveBatchParams,
    type EvaluationDatasetPublishParams as EvaluationDatasetPublishParams,
  };

  export type AssistantMessage = API.AssistantMessage;
  export type ChatMessage = API.ChatMessage;
  export type FlexibleChunk = API.FlexibleChunk;
  export type StringExtraInfoSchema = API.StringExtraInfoSchema;
  export type SystemMessage = API.SystemMessage;
  export type UserMessage = API.UserMessage;
}

export default ScaleWorkshop;
