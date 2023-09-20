export const fallbackLng = 'en'
export const languages = [fallbackLng, "de",'zh-CN']
export const defaultNS = 'translation'
export const cookieName = 'i18next'
export type II18n = "en" | "zh-CN"
export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}