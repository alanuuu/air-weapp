const warn = (msg, getValue) => {
    console.warn(msg);
    console.log('接收到的值为：', getValue);
};

module.exports = {
    warn
};
