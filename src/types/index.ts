/**
 * Global type definitions
 */

export type Direction = 'ltr' | 'rtl';

export type Language = 'en' | 'ar';

export type Theme = 'light' | 'dark' | 'system';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ErrorResponse {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

export interface FormState {
  isSubmitting: boolean;
  errors: Record<string, string>;
  values: Record<string, unknown>;
}
