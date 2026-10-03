import { codeToHtml, type BundledLanguage } from "shiki"

export function highlight(code: string, lang: BundledLanguage) {
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark-default" },
    defaultColor: false,
  })
}
