function time(callback) {
    console.log('Ready....go!');
    setTimeout(() => {
        console.log("Time is up");
        callback & callback();
    }, 1000)
}
module.exports = time;