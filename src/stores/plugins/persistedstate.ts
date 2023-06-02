import { PiniaPluginContext } from "pinia";
export function persistedstate(context:PiniaPluginContext ){
   //两个参数
   //第一个是当前修改store的上下文
   //第二个是当前修改的状态
    
    context.store.$subscribe((_storem,state)=>{
              
        
    },{
        //组件卸载 依赖还在
        detached:true
    })
}