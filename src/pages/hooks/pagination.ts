export interface PaginationParams<D extends Record<string, any> = Record<string, any>> {
  [key: string]: any;
  page: number;
  perPage: number;
  sortField?: keyof D;
  sortDirection?: 'asc' | 'desc';
  filters?: any;
}

export interface PaginationResponse<T = unknown> {
  total: number;
  result: T[];
}
