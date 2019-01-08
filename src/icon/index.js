Component({
    externalClasses: ['air-class'],

    properties: {
        type: {
            type: String,
            value: ''
        },
        size: {
            type: Number,
            value: 14
        },
        color: {
            type: String,
            value: ''
        }
    },
    methods: {
        handleClick() {
            this.triggerEvent('click');
        }
    }
});
