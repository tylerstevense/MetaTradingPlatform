export type TSearchParams = {
  [key: "slide" | string]: string | string[] | undefined;
};

export type TCells = {
  id: number;
  key: string;
  value: string;
};
export type TRows = {
  id: number;
  rowAsSection: boolean;
  cells: TCells[];
};
export type THeads = {
  id: number;
  key: string;
  th: string;
  subTh?: string;
};
export type TTableData = {
  thead: THeads[];
  tbody: TRows[];
};
export type TTableTabs = { value: string; text: string };
