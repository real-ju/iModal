# iModal
Vue隐式弹出框(Implicit Modal)

### 简介
- 支持iView、Antd
- 支持异步导入组件

### 安装
#### 以插件安装
```javascript
import iModal from '?/imodal.plugin'
Vue.use(iModal)
```
iModal将在弹出框组件的data对象中添加属性Modal：
- Modal.show可控制对话框的显示/隐藏
- Modal.$caller可访问调用者组件实例
#### 配置别名
$Modal.open方法中路径参数是基于别名@modal的相对路径，请在Webpack中配置该alias

### 使用
定义对话框组件(iView)：
```html
//message.vue
<template>
    <Modal v-model="Modal.show" title="信息对话框" :mask-closable="false">
        <p v-text="msg"></p>
        <div slot="footer">
            <Button type="primary" @click="closeModal">知道了</Button>
        </div>
    </Modal>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('checked');
            this.Modal.close();
        }
    }
}
</script>
```
打开iModal弹出框：
```javascript
//异步调用（组件代码量较大且复用性较小）
this.$Modal.open('?/modal/message.vue', {
    props: {
        msg: '欢迎使用iModal！这是一条信息！'
    },
    on: {
        checked: ()=> {
            this.$Message.success('已读');
        }
    }
})

//本地调用（组件代码量较小或复用性较大）
import MessageModal from '?/modal/message.vue'
this.$Modal.open(MessageModal, { ... })
```