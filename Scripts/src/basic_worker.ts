onmessage = function (event: any) {
    const str = event.data;
    const buffer = new ArrayBuffer(str.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < str.length; i++) {
        view.setInt16(i * 2, str.charCodeAt(i), true);
    }    
    postMessage(buffer);
}