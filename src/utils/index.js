// 工具函数，向外暴露一系列封装的方法
/**
 * @desc:判断传入的参数是否是一个函数
 * @param value
 */
export function isFunc(value){
    return value instanceof Function
}

/**
 * @desc:判断一个值是否是对象类型
 * @param value
 * @returns {boolean}
 */
export function isObject(value){
    return value instanceof Object
}

/**
 * @desc:判断当前obj对象上是否存在key属性
 * @param obj
 * @param key
 * @returns {boolean}
 */
export function hasOwnPrototype(obj,key){
    return Object.hasOwnProperty.call(obj,key)
}