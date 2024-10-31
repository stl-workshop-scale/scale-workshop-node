// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageNumberPageResponse<Item> {
  data: Array<Item>;

  current_page: number;

  items_per_page: number;

  total_item_count: number;
}

export interface PageNumberPageParams {
  account_id?: string | null;

  page?: number;

  page_size?: number;
}

export class PageNumberPage<Item> extends AbstractPage<Item> implements PageNumberPageResponse<Item> {
  data: Array<Item>;

  current_page: number;

  items_per_page: number;

  total_item_count: number;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.current_page = body.current_page || 0;
    this.items_per_page = body.items_per_page || 0;
    this.total_item_count = body.total_item_count || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.current_page;

    return { params: { page: currentPage + 1 } };
  }
}
