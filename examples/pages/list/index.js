Page({
    data: {
        switch1 : true,
        show: true
    },
    onChange({detail}){
        this.setData({
            'switch1' : detail.checked
        });
    }
});
