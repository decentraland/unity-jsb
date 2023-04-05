"use strict";
/** master.js

let web_worker = new Worker("basic_worker");

web_worker.onmessage = function (data) {
    console.log("master receive message from worker", data);
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Example_1 = require("Example");
const jsb_1 = require("jsb");
if (module == require.main) {
    console.log("Example Worker basics");
    console.log("Type Of Worker " + typeof (Worker));
    const web_worker = new Worker("basic_worker");
    console.log("Worker object " + web_worker);
    web_worker.onmessage = function (event) {
        const buffer = event.data;
        Example_1.ByteArrayJSTest.SetByteArray(jsb_1.ToBytes(buffer));
        const uint16Array = new Uint16Array(buffer);
        const result = String.fromCharCode(...uint16Array);
        console.log(result);
    };
    web_worker.postMessage("Paradox");
}
//# sourceMappingURL=example_worker_basics.js.map