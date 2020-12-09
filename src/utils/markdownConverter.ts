import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const md = MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (e) {
        console.log(e);
      }
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

export const mdToHTML = (markdown: string): string => {
  if (!markdown) return '';
  return md.render(markdown);
};