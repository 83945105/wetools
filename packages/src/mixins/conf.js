import {toUpperCase} from '../utils/util';

const projectPrefix = 'we';

export default {
  prefixCls: projectPrefix,
  prefixNameCls: toUpperCase(projectPrefix, 1),
  data() {
    return {
      prefixCls: projectPrefix
    };
  },

  computed: {
    prefixNameCls() {
      return toUpperCase(this.prefixCls, 1);
    }
  }
};
