// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface AssistantMessage {
  content: Array<string>;

  role: 'assistant';
}

export type ChatMessage = UserMessage | AssistantMessage | SystemMessage;

export interface FlexibleChunk {
  text: string;

  metadata?: Record<string, unknown>;
}

export interface StringExtraInfoSchema {
  info: string;

  kind_schema?: 'STRING';
}

export interface SystemMessage {
  content: Array<string>;

  role: 'system';
}

export interface UserMessage {
  content: Array<string>;

  role: 'user';
}
