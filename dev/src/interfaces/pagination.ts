export interface IPaginationParams {
  term?: string;
  page: number;
  pageSize: number;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
}

export interface IPaginationResponse<T> extends IPaginationParams {
  total: number;
  results: T[];
}
