import { TCommonParams } from "./common.model";

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price?: number;
}

export type TProductParams = TCommonParams & {
  name?: string;
}
