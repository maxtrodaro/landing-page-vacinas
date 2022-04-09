/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-danger */
import sanitizeHtml from 'sanitize-html';

const templateLiteralToHTML = (html: string, ignoreSanitize?: boolean): any => (
  <span dangerouslySetInnerHTML={{ __html: ignoreSanitize ? html : sanitizeHtml(html) }} />
);

export default templateLiteralToHTML;
