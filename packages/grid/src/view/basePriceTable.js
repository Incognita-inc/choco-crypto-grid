export default class BasePriceTable {
  #option = {
    searchIndexKey: [],
    idKey: "id",
  };
  #data = [];
  #header = [];
  #dataMap = {
    BTC: {
      rowKey: 0,
      price: 200,
      selector: "css selector",
    },
  };
  #mainBody;

  constructor({ option, data, header }) {
    this.#mainBody = document.createElement("div");
    document.body.appendChild(div);
    this.#option = { ...this.#option, ...option };
    this.#data = data;
    this.#header = header;
  }

  /**
   * 가격 정보 map 생성 - 가격 map 생성
   */
  #createPriceMap() {
    const tmp = [
      { id: "BTC", price: 200 },
      { id: "ETH", price: 500 },
    ];
    const tmpPriceMap = {
      BTC: 200,
      ETH: 500,
    };
  }

  /**
   * 검색용 index를 만든다.
   */
  initSearchIndex() {
    if (this.#option?.searchIndexKey) {
      console.log(this.#option.searchIndexKey);
    }
  }

  /**
   * data 에 rowKey(data의 index) 라는 속성을 가진채로 insert 한다.
   * id 값 - 데이터에서 사용자가 id를 넣어줘야 함.
   *
   * rowKey 사용예시
   * filter 걸었을 때
   */
  initRowKey(data) {}

  /**
   * 데이터 리스트에 id값이 포함된 객체로 넘어왔는지 확인한다.
   */
  validateId() {}

  /**
   * 헤더와 데이터가 제대로 매핑되어있는지 확인한다.
   */
  validateHeader() {}

  /**
   * key를 통하여 option의 value를 조회한다.
   * @param {String} key
   * @returns {Object}
   */
  getOption(key) {
    return this.#option[key];
  }

  getData() {
    return this.#data;
  }

  /**
   * 리스트로 새로 바꿔끼우기
   */
  setData(data) {
    // 전체 list 바꾸기
  }

  /**
   * 리스트의 일부만 바꾸기
   */
  setDataObject(key, value) {
    // rowKey 생성.
  }

  /**
   * render 하는 함수
   */
  render() {
    this.#mainBody.appendChild(<div>asdfadsf</div>);
  }

  /**
   * 일부 render 하는 함수
   */
  partialRender() {}
}
