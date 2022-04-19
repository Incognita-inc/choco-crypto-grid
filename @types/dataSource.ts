type RowData = {
  [columnKey: string]: {
    v: number;
    t: string;
    dom: HTMLDivElement;
  };
};

export type OriginData = {
  rowKey: string;
  columnKey: string;
  data: RowData;
};

export type DataByUser = Array<OriginData>;

/**
 * { columnKey : rowKey }
 */
export type sortedData = {
  [columnKey: string]: Array<string>;
};

export type DataMap = Record<string, RowData | HTMLDivElement>;

export type MainBody = HTMLDivElement;
