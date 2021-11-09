import { PageConfig } from "case-web-app-core/build/types/pagesConfig"

import { tekenPage } from "./tekenPage"
import { lymePage } from "./lymePage"
import { tekenradarPage } from "./tekenradarPage"
import { artsenPage } from "./artsenPage"


export const informatiePage = (path: string): PageConfig => {
  const infoPages = [
    tekenPage(`${path}/teken`),
    lymePage(`${path}/lyme`),
    tekenradarPage(`${path}/tekenradar`),
    artsenPage(`${path}/artsen`)
  ];

  return {
    path: path,
    pageKey: 'informatie',
    hideTitleBar: true,
    rows: [],
    subPages: {
      pages: infoPages
    },
  }
}