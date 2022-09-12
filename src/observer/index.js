
import {isObject} from '../utils/index'

class Observer {
    constructor(data){
        // 循环data的每一个key
        this.data = data
        console.log('contructor....',this.data)
        this.walk(data)
    }
    walk(){
        // let keys = Object.keys(this.data)
        // keys.forEach(key => {
        //     defineReactive(this.data,key)
        // })
        // defineReactive(data)
    }
}

/**
 * @desc:向外暴露一个observer方法，用于接收外部传递的data属性，然后做响应式处理
 * @param data
 */
export function observer(data){
    console.log('observer....',data)
    // 判断：如果data不是一个对象，或者为null，则直接返回，无需实例observer处理响应式
    if(!isObject((data)) || data == null) return
    // 实例化observer,并进行响应式处理
    let ob = new Observer(data)
    console.log('ob:  ',ob)
    return ob
}

/**
 * @desc:对data中的每个key进行响应式处理
 * @param data
 * @param key
 */
function defineReactive(target,key){
    // console.log(target,key)
    let value = target[key]
    // 如果当前处理的属性为一个对象,则需要递归将内部的所有属性都处理成响应式，直到都不为对象类型
    if(isObject(value)){
        let keys = Object.keys(value)
        keys.forEach(childKey =>{
            defineReactive(value,childKey)
        })
    }else if(Array.isArray(value)){
        // 如果当前target[key]是一个数组类型，则重写Array的push等方法

    }else{
        console.log(`target[${key}]不是一个对象或数组..`,target,key,target[key])
        // 当前target[key]既不是对象类型，也不是数组类型时，则对target本身进行数据劫持处理，也就是当前递归调用的出口
        Object.defineProperty(target,key,{
            get(){
                console.log(`${key}的值是: ${value}`)
                return value
            },
            set(newVal){
                if(newVal === target[key])return
                value = newVal
            }
        })
    }
}