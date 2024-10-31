// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StlWorkshopScale20241031 from 'stl-workshop-scale-20241031';
import { Response } from 'node-fetch';

const client = new StlWorkshopScale20241031({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource testCases', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evaluationDatasets.testCases.create('evaluation_dataset_id', {
      test_case_data: { artifact_ids_filter: ['string', 'string', 'string'], input: 'input' },
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
    const response = await client.evaluationDatasets.testCases.create('evaluation_dataset_id', {
      test_case_data: {
        artifact_ids_filter: ['string', 'string', 'string'],
        input: 'input',
        expected_extra_info: { info: 'info', schema_type: 'STRING' },
        expected_output: 'expected_output',
      },
      account_id: 'account_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.evaluationDatasets.testCases.retrieve(
      'evaluation_dataset_id',
      'test_case_id',
    );
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
      client.evaluationDatasets.testCases.retrieve('evaluation_dataset_id', 'test_case_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(StlWorkshopScale20241031.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.evaluationDatasets.testCases.update(
      'evaluation_dataset_id',
      'test_case_id',
      { restore: false },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.evaluationDatasets.testCases.update(
      'evaluation_dataset_id',
      'test_case_id',
      {
        restore: false,
        account_id: 'account_id',
        test_case_data: {
          artifact_ids_filter: ['string', 'string', 'string'],
          input: 'input',
          expected_extra_info: { info: 'info', schema_type: 'STRING' },
          expected_output: 'expected_output',
        },
      },
    );
  });

  test('list', async () => {
    const responsePromise = client.evaluationDatasets.testCases.list('evaluation_dataset_id');
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
    await expect(
      client.evaluationDatasets.testCases.list('evaluation_dataset_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StlWorkshopScale20241031.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationDatasets.testCases.list(
        'evaluation_dataset_id',
        { account_id: 'account_id', include_archived: true, limit: 1, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StlWorkshopScale20241031.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.evaluationDatasets.testCases.delete(
      'evaluation_dataset_id',
      'test_case_id',
    );
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
      client.evaluationDatasets.testCases.delete('evaluation_dataset_id', 'test_case_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(StlWorkshopScale20241031.NotFoundError);
  });

  test('batchCreate: only required params', async () => {
    const responsePromise = client.evaluationDatasets.testCases.batchCreate('evaluation_dataset_id', [
      { test_case_data: { artifact_ids_filter: ['string', 'string', 'string'], input: 'input' } },
      { test_case_data: { artifact_ids_filter: ['string', 'string', 'string'], input: 'input' } },
      { test_case_data: { artifact_ids_filter: ['string', 'string', 'string'], input: 'input' } },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batchCreate: required and optional params', async () => {
    const response = await client.evaluationDatasets.testCases.batchCreate('evaluation_dataset_id', [
      {
        test_case_data: {
          artifact_ids_filter: ['string', 'string', 'string'],
          input: 'input',
          expected_extra_info: { info: 'info', schema_type: 'STRING' },
          expected_output: 'expected_output',
        },
        account_id: 'account_id',
      },
      {
        test_case_data: {
          artifact_ids_filter: ['string', 'string', 'string'],
          input: 'input',
          expected_extra_info: { info: 'info', schema_type: 'STRING' },
          expected_output: 'expected_output',
        },
        account_id: 'account_id',
      },
      {
        test_case_data: {
          artifact_ids_filter: ['string', 'string', 'string'],
          input: 'input',
          expected_extra_info: { info: 'info', schema_type: 'STRING' },
          expected_output: 'expected_output',
        },
        account_id: 'account_id',
      },
    ]);
  });
});
