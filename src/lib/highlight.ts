import { codeToHtml, type BundledLanguage, type ThemeRegistration } from "shiki"

interface Palette {
  foreground: string
  comment: string
  keyword: string
  function: string
  string: string
  constant: string
  property: string
  punctuation: string
}

// Keep in sync with the --code-* variables in globals.css.
const DARK: Palette = {
  foreground: "#e6e8ec",
  comment: "#62666d",
  keyword: "#828fff",
  function: "#5ec4d6",
  string: "#e6b673",
  constant: "#f28b82",
  property: "#b4b9f5",
  punctuation: "#8a8f98",
}

const LIGHT: Palette = {
  foreground: "#0f1011",
  comment: "#8a8f98",
  keyword: "#5e6ad2",
  function: "#0e7c8f",
  string: "#a05a00",
  constant: "#c4413c",
  property: "#4c55a8",
  punctuation: "#62666d",
}

function theme(name: string, type: "dark" | "light", c: Palette): ThemeRegistration {
  return {
    name,
    type,
    colors: { "editor.foreground": c.foreground, "editor.background": "#00000000" },
    tokenColors: [
      { settings: { foreground: c.foreground } },
      { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: c.comment, fontStyle: "italic" } },
      {
        scope: ["keyword", "storage", "storage.type", "storage.modifier", "keyword.operator.new", "keyword.control"],
        settings: { foreground: c.keyword },
      },
      {
        scope: ["entity.name.function", "support.function", "entity.name.tag", "support.class.component", "entity.name.type", "support.type", "entity.name.class"],
        settings: { foreground: c.function },
      },
      { scope: ["string", "string.quoted", "string.template", "punctuation.definition.string"], settings: { foreground: c.string } },
      {
        scope: ["constant", "constant.numeric", "constant.language", "variable.language", "support.constant"],
        settings: { foreground: c.constant },
      },
      {
        scope: ["entity.other.attribute-name", "support.type.property-name", "variable.other.property", "meta.object-literal.key", "support.type.property-name.json", "support.type.property-name.css"],
        settings: { foreground: c.property },
      },
      { scope: ["punctuation", "meta.brace", "keyword.operator"], settings: { foreground: c.punctuation } },
    ],
  }
}

const themes = { light: theme("i-ui-light", "light", LIGHT), dark: theme("i-ui-dark", "dark", DARK) }

export function highlight(code: string, lang: BundledLanguage) {
  return codeToHtml(code, { lang, themes, defaultColor: false })
}
