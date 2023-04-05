onmessage = function (event) {
    const str = event.data;
    const buffer = new ArrayBuffer(str.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < str.length; i++) {
        view.setInt16(i * 2, str.charCodeAt(i), true);
    }
    postMessage(buffer);
};
/**setInterval(function () {
    const str = "Paradox";
    const buffer = new ArrayBuffer(str.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < str.length; i++) {
        view.setInt16(i * 2, str.charCodeAt(i), true);
    }
    self.postMessage(buffer)
}, 3000)*/
/**
setInterval(function () {
    postMessage("message form worker");
}, 3000)

onmessage = function (data) {
    console.log("worker get message from master:", data);
}*/ 
//# sourceMappingURL=basic_worker.js.map