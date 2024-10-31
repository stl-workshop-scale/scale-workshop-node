// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScaleWorkshop from 'scale-workshop';
import { Response } from 'node-fetch';

const client = new ScaleWorkshop({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource myResourceName', () => {
  test('myMethod', async () => {
    const responsePromise = client.myResourceName.myMethod();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('myMethod: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.myResourceName.myMethod({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ScaleWorkshop.NotFoundError,
    );
  });

  test('myMethod: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.myResourceName.myMethod(
        { account_id: 'account_id', include_archived: true, limit: 1, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScaleWorkshop.NotFoundError);
  });
});
