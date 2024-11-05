export interface IResults<Results> {
  page: number
  results: Results[]
  total_pages: number
  total_results: number
}
