/** 分页 */
export interface Limit {

  getTotal(): number

  getCurrPageNum(): number

  getPageSize(): number

  getTotalPage(): number
}
