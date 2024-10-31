// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as MyResourceNameAPI from './my-resource-name';

export class MyResourceName extends APIResource {
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
  myMethod(
    query?: MyResourceNameMyMethodParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MyResourceNameMyMethodResponse>;
  myMethod(options?: Core.RequestOptions): Core.APIPromise<MyResourceNameMyMethodResponse>;
  myMethod(
    query: MyResourceNameMyMethodParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MyResourceNameMyMethodResponse> {
    if (isRequestOptions(query)) {
      return this.myMethod({}, query);
    }
    return this._client.get('/v4/evaluation-datasets', { query, ...options });
  }
}

export interface MyResourceNameMyMethodResponse {
  /**
   * The current page number.
   */
  current_page: number;

  /**
   * The data returned for the current page.
   */
  items: Array<MyResourceNameMyMethodResponse.Item>;

  /**
   * The number of items per page.
   */
  items_per_page: number;

  /**
   * The total number of items of the query
   */
  total_item_count: number;
}

export namespace MyResourceNameMyMethodResponse {
  export interface Item {
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
     * The name of the dataset
     */
    name: string;

    /**
     * The schema type of the dataset.
     */
    schema_type: 'GENERATION' | 'FLEXIBLE';

    /**
     * The date and time when the entity was last updated in ISO format.
     */
    updated_at: string;

    /**
     * The date and time when the entity was archived in ISO format.
     */
    archived_at?: string;

    evaluation_dataset_versions?: Array<Item.EvaluationDatasetVersion>;

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

  export namespace Item {
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
}

export interface MyResourceNameMyMethodParams {
  account_id?: string | null;

  include_archived?: boolean;

  /**
   * Maximum number of artifacts to be returned by the given endpoint. Defaults to
   * 100 and cannot be greater than 10k.
   */
  limit?: number;

  /**
   * Page number for pagination to be returned by the given endpoint. Starts at page
   * 1
   */
  page?: number;
}

export namespace MyResourceName {
  export import MyResourceNameMyMethodResponse = MyResourceNameAPI.MyResourceNameMyMethodResponse;
  export import MyResourceNameMyMethodParams = MyResourceNameAPI.MyResourceNameMyMethodParams;
}
