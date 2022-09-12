// Vue2中定义Vue实例是通过构造函数的方式
// 没有使用class类的方式定义：是因为 class方式类时，方法是写在类里面的，没有办法把不同的方法拆分出去
// 构造函数定义的类，通过Vue.prototype.xxx  定义方法，可以将不同的功能拆分成不同的文件

import initMixin from './init'
function Vue(options){
    // debugger
    // 首先会执行初始化任务,vue源码中对应的是　init方法
    this._init(options)
}

// 初始化方法，但是所有的方法都写在此文件中，不利于维护，代码量会非常庞大，因此需要拆分出去
// Vue.prototype.init = function (){
//
// }
// 因此不同的功能都需要一个方法来混入对应的方法挂载到Vue的原型上，Vue源码中对应的是 /src/core/instance/init.js   initXXX,如: initState、initRender、init
// 初始化混入
initMixin(Vue)


export default Vue

