import * as lodash from "lodash";
declare module "lodash" {
  //export function chunk(collection: any, size?: number): any[][];

  interface LoDashStatic {
    log(item: string): void;
  }
}
