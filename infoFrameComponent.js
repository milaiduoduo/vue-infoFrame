Vue.component('info', {
    props: {
        type: {
            type: String,
            default: 'info'
        },
        title: {
            type: String,
            default: '这是一个消息提示'
        },
        closeable: {
            type: Boolean,
            default: true
        },
        showicon: {
            type: Boolean,
            default: true
        },
        style: String
    },
    computed: {
        alertType(type){
            return `m-alert-${this.type}`;
        },
        iconType(type){
            return `m-icon-${this.type}`;
        }
    },
    methods: {
        closeHandle(){
            alert('子组件触发了！暴露给父组件的事件名称只能用小写！！')
            this.$emit('closeclick');

        }
    },
    template: `<div class="m-alert" :class="alertType" :style="style">
    <slot name="iconTmp">
        <i v-if="showicon" class="m-icon" :class="iconType"></i>
    </slot>

    <div class="m-content">
        <slot name="titleTmp">
            <span class="m-message">{{this.title}}</span>
        </slot>
        <i v-if="closeable" class="m-closebtn m-icon-close" @click="closeHandle"></i>
    </div>
</div>`
});