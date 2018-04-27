/** 数据视图 */
import {ResultInfo} from "./Result";
import {Limit} from "./limit";

export interface DataView {

}

/** 消息视图 */
export class MessageView implements DataView {

  private _resultInfo: ResultInfo;

  /**
   * 获取结果信息
   * @returns {ResultInfo}
   */
  get resultInfo(): ResultInfo {
    return this._resultInfo;
  }

  /**
   * 设置结果信息
   * @param {ResultInfo} value
   */
  set resultInfo(value: ResultInfo) {
    this._resultInfo = value;
  }
}

class PageViewLimit implements Limit {

  private _total: number;
  private _currPageNum: number;
  private _pageSize: number;
  private _totalPage: number;

  constructor(limit: Limit) {
    this._total = limit.getTotal();
    this._currPageNum = limit.getCurrPageNum();
    this._pageSize = limit.getPageSize();
    this._totalPage = limit.getTotalPage();
  }

  getTotal(): number {
    return this._total;
  }

  getCurrPageNum(): number {
    return this._currPageNum;
  }

  getPageSize(): number {
    return this._pageSize;
  }

  getTotalPage(): number {
    return this._totalPage;
  }

}

/** 分页视图 */
export class PageView extends MessageView {

  private _limit: PageViewLimit;

}
