import { ByteArrayJSTest } from "Example"
import { ToArrayBuffer, ToBytes } from "jsb";

if (module == require.main) {
    console.log("Example Worker basics");
    
    console.log("Type Of Worker " + typeof(Worker));
    
    const web_worker = new Worker("basic_worker");
    console.log("Worker object " + web_worker);
    web_worker.onmessage = function (event) {
        const buffer = event.data;
        
        ByteArrayJSTest.SetByteArray(ToBytes(buffer));

        const uint16Array = new Uint16Array(buffer);
        const result = String.fromCharCode(...uint16Array);
        console.log(result);
    };
    
    web_worker.postMessage("Paradox");
}