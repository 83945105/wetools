<template>
  <we-web-template-doc
    logo-text="wetools"
    :logo-src="logoSrc"
    :left-data="docs"
    :header-data="pages"
    page-name="Plugins"
    @click-logo="$message.open('首页还没做好...')"
  ></we-web-template-doc>
</template>

<script>

  import DocConf from '../../examples/docs.config';
  import PageConf from '../../examples/page.config';

  const LogoSrc = require('../assets/wetools_logo.png');

  export default {

    name: "docs",

    data() {
      return {
        projectName: 'weview',
        docs: DocConf,
        pages: PageConf
      };
    },

    computed: {
      logoSrc() {
        return LogoSrc;
      }
    }
  }
</script>
