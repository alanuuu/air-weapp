Component({
    externalClasses: ['air-class', 'air-class--hover'],
    properties: {
        value: {
            type: String,
            value: '',
            observer(newVal) {
                this.onCloseShow(newVal);
            },
        },
        placeholder: {
            type: String,
            value: '搜索'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        placeholderClass: {
            type: String,
            value: 'placeholder-class'
        },
        maxLength: {
            type: Number,
            value: 140
        }
    },
    data: {
        focus: true,
        showClose: false
    },
    methods: {
        onCloseShow(val) {
            this.setData({
                showClose: val ? true : false
            });
        },
        onClickClose() {
            this.triggerEvent('clean');
        },
        handleInput({detail}) {
            this.triggerEvent('change', {
                value: detail.value
            });
        },
        handleFocus() {
            this.setData({
                focus: true
            });
            this.triggerEvent('focus');
        },
        handleBlur() {
            this.triggerEvent('blur');
        },
        handleConfirm({detail}) {
            this.triggerEvent('confirm',{
                value: detail.value
            });
        }
    },
});
