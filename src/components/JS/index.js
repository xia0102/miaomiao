import Vue from 'vue';
import MessageBox from './MessageBox';

// 扩展全局组件
export var messageBox = (function(){
    var defaults = { // 默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel : null,
        handleOk: null
    };

    // 创建Vue构照器
    var Mycomponent = Vue.extend(MessageBox);

    return function(opts){ // ops配置参数
        for(var attr in defaults){
            defaults[attr] = opts[attr];
        }

        var vm = new Mycomponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });

        document.body.appendChild(vm.$el);
    };
})();
