import {
  fields,
  Headers,
  Data,
  Integration,
  RowData,
  DataOrigin,
} from "../../@types/tableConfig";

export default class BaseTable {
  /**
   * 사용자로부터 받은 데이터
   */
  #data: Data;
  #fields: fields;
  #headers: Headers;
  #integration: Integration;

  /**
   * 정제된 데이터
   */
  #dataMap: {
    [k: string]: {
      [k: string]: RowData;
    };
  };

  constructor({
    data: data,
    fields: fields,
    headers: headers,
    integration: integration,
  }) {
    this.#data = data;
    this.#fields = fields;
    this.#headers = headers;
    this.#integration = integration;

    this.#createDataMap();
  }

  #createDataMap() {
    this.#data.forEach((d) => {
      this.#dataMap[d.rowKey][d.columnKey] = d.data;
    });
  }

  updateDataMap(updatedData: DataOrigin) {
    this.#dataMap[updatedData.rowKey][updatedData.columnKey] = updatedData.data;
  }
}
