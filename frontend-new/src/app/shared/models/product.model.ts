import { TCommonParams } from "./common.model";

export interface Product {
  id?: number;
  name: string;
  description: string;
  price?: number;
}

export type TProductParams = TCommonParams & {
  name: string;
}
