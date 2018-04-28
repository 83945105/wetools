export enum ResultCode {
  /** 失败 */
  FAIL_CODE = 0,
  /** 成功 */
  SUCCESS_CODE = 1,
  /** 警告 */
  WARN_CODE = 2,
  /** 信息 */
  INFO_CODE = 3,
  /** 错误 */
  ERROR_CODE = 4,
  /** 需要登录 */
  NEED_LOGIN_CODE = 5,
  /** 没有权限 */
  NO_AUTHORITY_CODE = 6,
  /** 找不到 */
  NOT_FOUND = 404
}

/** 结果信息 */
export interface ResultInfo {

  /**
   * 是否成功
   * @returns {boolean}
   */
  isSuccess: () => boolean,

  /**
   * 是否失败
   * @returns {boolean}
   */
  isFail: () => boolean,

  /**
   * 是否错误
   * @returns {boolean}
   */
  isError: () => boolean,

  /**
   * 获取结果号
   * @returns {ResultCode}
   */
  getResultCode: () => ResultCode,

  /**
   * 获取信息
   * @returns {string}
   */
  getMessage: () => string,

  /**
   * 获取异常信息
   * @returns {string}
   */
  getExceptionMessage: () => string

}
