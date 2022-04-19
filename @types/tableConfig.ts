/**
idea
   -  rowKey, columnKey를 2차원 배열의 key라고 생각.
   -  rowKey, columnKey로 dataMap을 만들고 columm이나 row의 위치가 변경되는건 따로 index 순서만 관리
         -  이떄 dataMap의 순서는 변경되지 않음
         -  데이터 업데이트 할 떄 마다 내부에서는 변경된 data column key로 sort된 값을 저장
   -  렌더링은 CSS tansform x,y 사용해서 위치 수정
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
