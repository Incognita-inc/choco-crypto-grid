import { DataByUser } from "./dataSource";

export type fields = Array<string>;

export type HeaderMeta = {
  type: string;
  formatter: {
    [field: string]: Function;
  };
  style?: {
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
