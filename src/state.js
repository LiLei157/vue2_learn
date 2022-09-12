import {isFunc} from './utils/index'
import {observer} from "./observer/index";

/**
 * @desc:初始化状态
 * @param vm 实例
 * @description: vue源码中初始化状态中需要做的事:
 *      1、初始化data
 *      2、如果有props，初始化props，判断props的key是否已经在data中,存在便报错
 *      3、如果有methods，初始化methods，判断methods的key是否已经在data中，存在便报错
 *      4、都通过，则对配置项做一层代理，可以通过 vm[key]获取
 *          不做这一层处理，就无法通过this.xxx获取
 */
export function initState(vm){
    let ops = vm.$options
    if(ops.data)initData(vm)
}

/**
 * @desc:处理data参数，进行数据响应式及依赖收集
 * @param vm
 * @param data
 */
function initData(vm){
    let data = vm.$options.data
    /**
     * 以下 if..else 可以合并成一行
     */
    // if(isFunc(data)){
    //     // 说明data定义的是一个函数,标准写法
    //     data = data()
    //     console.log('return .... ',data)
    // }else{
    //     // 说明定义的是一个对象
    //     console.warn('You should define data as a function, not an object')
    //     data = data
    // }
    /**
     * 合并一行
     * @desc:需要注意，data如果是一个函数，调用时this指向就不是vm实例了，需要通过call，将this指向为vm实例。
     */
    data = isFunc(data) ? data.call(vm) : data

    // 进行响应式处理
    vm.$options._data = observer(data)
}