//Page Object
Page({
    data: {
        value: ''
    },
    onBlur() {
        console.log('blur');
    },
    // eslint-disable-next-line
    onChange({detail}) {
        this.setData({
            value: detail.value
        });
    },
    onFocus() {
        console.log('focus');
    },
    onConfirm({detail}) {
        console.log(detail.value);
    },
    onClean() {
        this.setData({
            value: ''
        });
    }
});
