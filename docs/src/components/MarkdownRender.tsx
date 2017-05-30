import * as React from "react";
import * as PropTypes from "prop-types";

import  * as Prism from "prismjs";
import "prismjs/components/prism-jsx.min.js";
import  * as marked from "marked";

export interface DataProps {
  text?: string;
}

export interface MarkdownRenderProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export default class MarkdownRender extends React.Component<MarkdownRenderProps, void> {
  static defaultProps = {
    text: ""
  };

  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight(code, lang) {
        try {
          switch (lang) {
            case "jsx": {
              require("prismjs/components/prism-jsx.min.js");
              break;
            }
            case "bash": {
              require("prismjs/components/prism-bash.min.js");
              break;
            }
            default: {
              break;
            }
          }
          return Prism.highlight(code, Prism.languages[lang]);
        } catch (err) {}
      }
    });
  }

  componentDidMount() {
    this.updateThemeStyle();
  }

  componentDidUpdate() {
    this.updateThemeStyle();
  }

  updateThemeStyle = () => {
    let markdownStyleString: any;
    if (this.context.theme.isDarkTheme) {
      markdownStyleString = require("!raw!prismjs/themes/prism-okaidia.css");
    } else {
      markdownStyleString = require("!raw!prismjs/themes/prism-coy.css");
    }

    const className = "react-uwp-markdown-style-sheet";
    let styleSheet = document.querySelector(`.${className}`);
    const cssString = getCSSString(this.context.theme) + "\n" + markdownStyleString;
    if (!styleSheet) {
      styleSheet = document.createElement("style");
      styleSheet.className = className;
      styleSheet.innerHTML = cssString;
      document.head.appendChild(styleSheet);
    } else {
      styleSheet.innerHTML = cssString;
    }
  }

  render() {
    const { text, className, ...attributes } = this.props;
    const { theme } = this.context;

    return (
      <div>
        <div
          {...attributes}
          className={`react-uwp-markdown ${className || ""}`}
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      </div>
    );
  }
}


function getCSSString(theme: ReactUWP.ThemeType) {
return (
`.react-uwp-markdown {
  /** background: ${theme.chromeMedium}; **/
  color: ${theme.baseMediumHigh};
  font-family: ${theme.fontFamily.split(", ").map((font: string) => `"${font}"`).join(", ")};
}

.react-uwp-markdown img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

.react-uwp-markdown div {
  letter-spacing: 0px;
  margin: 0;
  padding: 0 32px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.react-uwp-markdown a, .react-uwp-markdown h1, .react-uwp-markdown h2, .react-uwp-markdown h3, .react-uwp-markdown h4, .react-uwp-markdown h5, .react-uwp-markdown h6 {
  line-height: 1.8;
  font-weight: normal;
  color: ${theme.baseHigh};
}

.react-uwp-markdown p {
  line-height: 1.8;
  font-size: 14px;
}

.react-uwp-markdown strong {
  color: ${theme.baseHigh};
  font-size: 16px;
}

.react-uwp-markdown a {
  font-size: 15px;
  color: ${theme.accent};
  font-weight: lighter;
}

.react-uwp-markdown h1 {
  font-size: 24px;
}

.react-uwp-markdown h2 {
  font-size: 20px;
}


.react-uwp-markdown h3 {
  font-size: 18px;
}

.react-uwp-markdown h4 {
  font-size: 16px;
}

.react-uwp-markdown h5 {
  font-size: 15px;
}

.react-uwp-markdown h6 {
  font-size: 14px;
}

.react-uwp-markdown hr {
  margin: 4px 0;
  border: 0;
  width: 100%;
  border-top: 2px solid ${theme.accent};
}

.react-uwp-markdown ol > li {
  margin-left: 12px;
}

.react-uwp-markdown li {
  font-size: 14px;
  line-height: 1.5;
}

.react-uwp-markdown blockquote {
  border-left: 4px solid ${theme.accent};
  padding-left: 15px;
  margin: 20px 0px 35px;
}

.react-uwp-markdown .language-math {
  font-size: 24px;
  color: ${theme.baseHigh};
}

.react-uwp-markdown .language-math pre {
  margin: 6px 0 6px;
  padding: 10px;
  width: 100%;
}

.react-uwp-markdown pre {
  font-family: ${theme.fontFamily.split(", ").map((font: string) => `"${font}"`).join(", ")};
  background: ${theme.chromeLow};
  border: 1px solid ${theme.listLow};
  border-left: 4px solid ${theme.accent} !important;
  border-radius: 0 !important;
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.react-uwp-markdown pre {
  font-size: 14;
}


.react-uwp-markdown code {
  font-family: ${theme.fontFamily.split(", ").map((font: string) => `"${font}"`).join(", ")};
  font-size: inherit;
  background: ${theme.chromeLow};
  color: ${theme.accent};
  padding: 2px 4px;
  font-weight: inherit;
}

.react-uwp-markdown table {
  width: 100%;
}

.react-uwp-markdown table, .react-uwp-markdown td, .react-uwp-markdown th {
  border-collapse: collapse;
  border: 1px solid ${theme.altHigh};
  padding: 10px;
  / ** word-break: break-all; **/
}

.react-uwp-markdown table tbody {
  background: ${theme.baseLow};
}

.react-uwp-markdown table tr:nth-child(1n) {
  background: ${theme.altMedium};
}

.react-uwp-markdown table tr:nth-child(2n) {
  background: ${theme.altMediumHigh};
}

.react-uwp-markdown th {
  vertical-align: middle;
  border-collapse: collapse;
  padding: 12px;
  color: #fff;
  background: ${theme[theme.isDarkTheme ? "accentDarker1" : "accentLighter1"]};
  border: 1px solid ${theme.altHigh};
}

.react-uwp-markdown input[type="checkbox"] {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  opacity: .5;
  pointer-events: none;
}

.react-uwp-markdown li > label {
  pointer-events: none;
}

.react-uwp-markdown ul {
  margin: 10px 20px;
}
code[class*="language-"], pre[class*="language-"] {
  text-shadow: none !important;
  box-shadow: none !important;
  ${theme.isDarkTheme ? (
    "background: none !important;"
  ) : (
    ""
  )}
}
`
); }
