'use strict';
const striptags = require('./strip-tags');
const md = require('markdown-it')();

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

const wrap = function (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

const vueMarkdownOption = {
  //vue-markdown-loader 封装了markdown-it
  preprocess: function (MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  },
  //配置Markdown-it使用的插件
  use: [
    /*    [require('markdown-it-anchor'), {
          level: 2,
          slugify: slugify,
          permalink: true,
          permalinkBefore: true
        }],*/
    [require('markdown-it-container'), 'demo', {
      validate: function (params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },

      render: function (tokens, idx) {
        let m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          let description = (m && m.length > 1) ? m[1] : '';
          let content = tokens[idx + 1].content;
          let html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          let script = striptags.fetch(content, 'script');
          let style = striptags.fetch(content, 'style');
          let jsfiddle = {html: html, script: script, style: style};
          let descriptionHTML = description
            ? md.render(description)
            : '';

          jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

          return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }],
    [require('markdown-it-container'), 'tip'],
    [require('markdown-it-container'), 'warning']
  ]
};
module.exports = {
  vueMarkdownOption
};
