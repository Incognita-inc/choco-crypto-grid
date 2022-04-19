/**
idea
   -  rowKey, columnKey를 2차원 배열의 key라고 생각.
   -  rowKey, columnKey로 dataMap을 만들고 columm이나 row의 위치가 변경되는건 따로 index 순서만 관리
         -  이떄 dataMap의 순서는 변경되지 않음
         -  데이터 업데이트 할 떄 마다 내부에서는 변경된 data column key로 sort된 값을 저장
   -  렌더링은 CSS tansform x,y 사용해서 위치 수정

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

import { DataByUser } from "./dataSource";

export type fields = Array<string>;

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
  sortKey: string; // default=name
};

export type Integration = {
  hightlight: boolean;
};

export type TableConfig = {
  data: DataByUser;
  fields: fields;
  headers: Headers;
  integration: Integration;
};
