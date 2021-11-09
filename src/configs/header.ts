import { HeaderConfig } from "case-web-app-core/build/types/headerConfig";

export const headerConfig: HeaderConfig = {
  config: {
    type: 'simpleLogo',
    className: 'd-flex justify-content-center',
    image: {
      altKey: 'logoAlt',
      sm: {
        url: '/images/simplified_logo_tekenradar.png',
        className: 'pb-2 d-block mx-auto',
        height: 100
      },
      lg: {
        url: '/images/simplified_logo_tekenradar.png',
        className: 'pb-2',
        height: 120
      }
    },
    useLanguageSelector: false
  }
}