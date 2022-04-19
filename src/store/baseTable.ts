import { TableConfig } from "../../@types/tableConfig";

import {
  OriginData,
  MainBody,
  DataMap,
  sortedData,
} from "../../@types/dataSource";

export default class BaseTable {
  /**
   * 사용자로부터 받은 데이터
   */
  #data: TableConfig["data"];
  #fields: TableConfig["fields"];
  #headers: TableConfig["headers"];
  #integration: TableConfig["integration"];

  /**
   * 정제된 데이터
   */
  #dataMap: DataMap;

  /**
   * headers.column 들로 key를 가진 sortedData
   */
  #sortedData: sortedData;

  /**
   * Table이 렌더링 될 메인 div Body
   */
  #mainBody: MainBody;

  constructor({
    data: data,
    fields: fields,
    headers: headers,
    integration: integration,
  }: TableConfig) {
    this.#mainBody = document.createElement("div");

    this.#data = data;
    this.#fields = fields;
    this.#headers = headers;
    this.#integration = integration;

    this.#createDataMap();
  }

  get fields() {
    return this.#fields;
  }

  get headers() {
    return this.#headers;
  }

  get integration() {
    return this.#integration;
  }

  #createDataMap() {
    this.#data.forEach((d) => {
      this.#dataMap[d.rowKey][d.columnKey] = d.data;
    });
  }

  /**
   * data값 update 시키는 함수
   *
   * TODO
   *  - sortedData에 updatedData기반으로 row keys 재정렬
   *  - update 된 값이 sortKey인지 확인하고 필요시 재졍렬
   */
  updateDataMap(updatedData: OriginData) {
    this.#dataMap[updatedData.rowKey][updatedData.columnKey] = updatedData.data;
  }

  /**
   * column 이동시키는 함수
   *
   * @param {number} sourceIdx - column index to move
   * @param {number} targetIdx - column index where to move
   *
   * TODO
   *  - column 별 width 계산해서 sourceIdx에 있는 column들을 targetIdx로 이동
   *  - transformX 계산 후 partialRender 호출
   */
  moveColumn(sourceIdx: number, targetIdx: number) {}

  /**
   * row 이동시키는 함수
   *
   * @param {number} sourceIdx - row index to move
   * @param {number} targetIdx - row index where to move
   *
   * TODO
   *  - row 별 height 계산해서 sourceIdx에 있는 row를 targetIdx로 이동
   *  - transformY 계산 후 partialRender 호출
   */
  moveRow(sourceIdx: number, targetIdx: number) {}

  /**
   * 전체 렌더링
   *
   * TODO
   *  - dataMap 기반으로 렌더링
   *  - sortKey(default=name)로 최초 정렬 이후 변경되는 데이터 sort는 CSS transform 으로.
   */
  render() {}

  /**
   * 일부 렌더링
   *
   * @param {string} rowKey - dataMap rowKey
   * @param {string} columnKey - dataMap columnKey
   * @param {string} transformX - element render to transformX
   * @param {string} transformY - element render to transformY
   *
   * TODO
   * - 계산된 transformX transformY로 element transform 수정
   */
  partialRender(
    rowKey: string,
    columnKey: string,
    transformX: number,
    transformY: number
  ) {}
}
