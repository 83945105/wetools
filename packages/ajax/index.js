import LayerFrame from '../layer/src/LayerFrame';

LayerFrame.install = function (Vue) {
  Vue.component(LayerFrame.name, LayerFrame);
};

export default LayerFrame;
