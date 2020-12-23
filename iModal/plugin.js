import iModal from './source/iModal'

/**
 * Vue调用插件
 */
const install = function(Vue, options) {
    // 这里没有兼容多个UI框架 根据需求修改
    if(Vue.prototype.$Modal) {
        let instance = new iModal(this);
        Vue.prototype.$Modal.open = instance.open.bind(instance);
    }
    else {
        throw '请先安装iView';
    }
}

export default { install }