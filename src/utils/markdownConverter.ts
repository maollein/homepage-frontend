import MarkdownIt from 'markdown-it';
const md = MarkdownIt();

export const mdToHTML = (markdown: string): string => {
  if (!markdown) return '';
  return md.render(markdown);
};