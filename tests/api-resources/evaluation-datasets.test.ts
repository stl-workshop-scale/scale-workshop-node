// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScaleWorkshop from 'scale-workshop';
import { Response } from 'node-fetch';

const client = new ScaleWorkshop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluationDatasets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evaluationDatasets.create({
      account_id: 'account_id',
      name: 'name',
      schema_type: 'GENERATION',
      type: 'manual',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.evaluationDatasets.create({
      account_id: 'account_id',
      name: 'name',
      schema_type: 'GENERATION',
      type: 'manual',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.evaluationDatasets.retrieve('evaluation_dataset_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationDatasets.retrieve('evaluation_dataset_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScaleWorkshop.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.evaluationDatasets.update('evaluation_dataset_id', {
      name: 'name',
      restore: false,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.evaluationDatasets.update('evaluation_dataset_id', {
      name: 'name',
      restore: false,
    });
  });

  test('list', async () => {
    const responsePromise = client.evaluationDatasets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evaluationDatasets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ScaleWorkshop.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationDatasets.list(
        { account_id: 'account_id', include_archived: true, limit: 1, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScaleWorkshop.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.evaluationDatasets.delete('evaluation_dataset_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationDatasets.delete('evaluation_dataset_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScaleWorkshop.NotFoundError);
  });

  test('approveBatch: only required params', async () => {
    const responsePromise = client.evaluationDatasets.approveBatch('evaluation_dataset_id', {
      autogenerated_draft_test_cases: ['string', 'string', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('approveBatch: required and optional params', async () => {
    const response = await client.evaluationDatasets.approveBatch('evaluation_dataset_id', {
      autogenerated_draft_test_cases: ['string', 'string', 'string'],
      force: true,
    });
  });

  test('publish', async () => {
    const responsePromise = client.evaluationDatasets.publish('evaluation_dataset_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('publish: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationDatasets.publish('evaluation_dataset_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScaleWorkshop.NotFoundError);
  });

  test('publish: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationDatasets.publish(
        'evaluation_dataset_id',
        { force: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScaleWorkshop.NotFoundError);
  });
});
