import {initState} from './state'


/**
 * @desc:初始化操作,即往vue实例上挂载一系列方法
 * @param Vue
 */
export default function initMixin(Vue){
    // 往Vue原型上挂载了一个Init方式，用于初始化state
    Vue.prototype._init = function(options){
        console.log('_init...',this,options)
        console.log(options)
        // 将options配置参数挂载到vm实例上，方便所有的方法使用
        let vm = this
        vm.$options = options


        // 初始化状态
        initState(vm)
    }

    /**
     * 下方给Vue原型挂载initState方式,是和初始化状态相关，可单独提取为一个文件
     */

    // 初始化状态逻辑，vue2源码中位于 src/core/instance/state.js
    // 主要用于初始化data,props,computed,methods等state参数
    // Vue.prototype.initState = function(vm){
    //     console.log('initState...',vm.$options)
    //     // vue2源码有简写为下:
    //     let ops = vm.$options
    //     if(ops.data)initData(vm,ops.data)
    // }
}

