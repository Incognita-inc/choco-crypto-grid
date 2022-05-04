import { DataByUser } from "../@types/dataSource";
import { TableConfig } from "../@types/tableConfig";

// data value 하나인 경우에는 가운데 정렬
export const dummyUserData: DataByUser = [
  {
    rowKey: "btc",
    columnKey: "name",
    data: {
      value1: {
        v: "비트코인",
        t: "",
      },
      value2: {
        v: "BTC",
      },
    },
  },
  {
    rowKey: "btc",
    columnKey: "compared_yesterday",
    data: {
      value1: {
        v: 0.54,
        t: "percent_down",
      },
      value2: {
        v: -313000,
      },
    },
  },
  {
    rowKey: "btc",
    columnKey: "transactionAmount",
    data: {
      value1: {
        v: 506000000,
        t: "amount",
      },
      value2: {
        v: 512400000,
        t: "amount",
      },
    },
  },
];

export const dummyTableConfig: TableConfig = {
  data: dummyUserData,
  fields: ["value1", "value2"],
  headers: {
    meta: [
      {
        // style의 경우는 클래스 명 받을 수 있게 (cell별로 class 명 받을 수 있도록)
        type: "percent_up",
        formatter: {
          value1: (v) => `+${v}%`,
          value2: (v) => v,
        },
        style: {
          color: "blue",
        },
      },
      {
        type: "percent_down",
        formatter: {
          value1: (v) => `-${v}%`,
          value2: (v) => v,
        },
        style: {
          color: "red",
        },
      },
      {
        type: "amount",
        formatter: {
          value1: (v) =>
            Intl.NumberFormat("ko-KR", {
              style: "currency",
              currency: "JPY",
            }).format(v),
          value2: (v) =>
            Intl.NumberFormat("ko-KR", {
              style: "currency",
              currency: "JPY",
            }).format(v),
        },
      },
    ],
    column: [
      {
        type: "name",
        label: "코인명",
      },
      {
        type: "compared_yesterday",
        label: "전일 대비",
      },
      {
        type: "transactionAmount",
        label: "거래액",
      },
    ],
    sortKey: "name",
  },
  integration: {
    hightlight: true,
  },
};
