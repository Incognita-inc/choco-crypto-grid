/**
idea
   - 2차원 배열이 row, column key를 index로 갖는 것 처럼 rowKey, columnKey를 2차원 배열의 key라고 생각.
   - 형태가 변하지 않는 base table을 만들고 columm이나 row의 위치가 변경되는건 따로 index(key) 순서만 관리
   - data update는 base table에서만 이뤄지고 display 할 때는 row, column 의 index(key) 순서에 따라 보여주기

data = [
  {
     rowKey: 'btc',
     columnKey: 'name',
     data: {
        value1: {
           v: '비트코인',
        },
        value2: {
           v: 'BTC'
        }
     }
  },
  {
     rowKey: 'btc',
     columnKey: 'compared_yesterday',
     data: {
        value1: {
           v: 0.54,
           t: 'percent_down'
        },
        value2: {
           v: -313000,
        }
     }
  },
  {
     rowKey: 'btc',
     columnKey: 'transactionAmount',
     data: {
        value1: {
           v: 506000000,
           t: 'amount'
        },
        value2: {
           v: 512400000,
           t: 'amount'
        }
     }
  },
]

tableConfig = {
  data,
  fields: ['value1', 'value2'],
  headers: {
     meta: [
        {
           type: 'percent_up',
           formatter: {
                 value1: (v) => `+${v}%`,
                 value2: (v) => v,
           },
           style: {
              color: 'blue'
           }
        },
        {
           type: 'percent_down',
           formatter: {
                 value1: (v) => `-${v}%`,
                 value2: (v) => v,
           },
           style: {
              color: 'red'
           }
        },
        {
           type: 'amount',
           formatter: {
                 value1: (v) => Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'JPY' }).format(v)),
                 value2: (v) => Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'JPY' }).format(v)),
           }
       },

     ],
     column: [
        {
           type: 'name', 
           label: '코인명', 
        },
        {
           type: 'compared_yesterday', 
           label: '전일 대비', 
        },
        {
           type: 'transactionAmount', 
           label: '거래액',
        }
     ],
     sortKey: 'name',
  },
  integration: {
     hightlight: true
  }
}

 */

export type fields = Array<string>;

export type RowData = {
  [k: string]: {
    v: number;
    t: string;
  };
};

export type DataOrigin = {
  rowKey: string;
  columnKey: string;
  data: RowData;
};

export type Data = Array<DataOrigin>;

export type HeaderMeta = {
  type: string;
  formatter: {
    [k: string]: Function;
  };
  style: {
    color: string;
  };
};

export type HeaderColumn = {
  type: string;
  label: string;
};

export type Headers = {
  meta: Array<HeaderMeta>;
  column: Array<HeaderColumn>;
  sortKey: string;
};

export type Integration = {
  hightlight: boolean;
};

export type TableConfig = {
  data: Data;
  fields: fields;
  headers: Headers;
  integration: Integration;
};
