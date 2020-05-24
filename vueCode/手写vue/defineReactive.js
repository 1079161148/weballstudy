// 响应式 --  安装扩展Code Runner 按下Ctrl+alt+N运行
const obj  = {};
function defineReactive (obj, key, val){
    // 递归
    observe(val);
    // Object.defineProperty对数组是无效的;---数组需要处理则覆盖原型上的方法
    Object.defineProperty(obj, key, {
        get(){
            console.log('get' + key);
            return val  
        },
        set(newVal){
            if(newVal !== val){
                console.log('set' + key + ':' + newVal);
                // 如果传入的newVal依然是obj,则应该继续响应
                observe(newVal);
                
                val = newVal;
            }
        }
    })
}

function observe (obj){
    // 希望传入的是obj
    if(typeof obj !== 'object' || obj == null){
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

// defineReactive(obj, 'foo', 'foo')
// obj.foo
// obj.foo = '响应式nihao'; 