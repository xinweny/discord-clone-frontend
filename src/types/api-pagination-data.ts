export interface ApiPaginationData<DataType> {
  items: DataType[];
  totalDocs: number;
  totalPages: number;
  currentPage: number;
}