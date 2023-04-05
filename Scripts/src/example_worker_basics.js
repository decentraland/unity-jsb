"use strict";
exports.__esModule = true;
var Example_1 = require("Example");
var jsb_1 = require("jsb");
if (module == require.main) {
    var str = "Paradox";
    var buffer = new ArrayBuffer(str.length * 2);
    var view = new DataView(buffer);
    for (var i = 0; i < str.length; i++) {
        view.setInt16(i * 2, str.charCodeAt(i), true);
    }
    Example_1.ByteArrayJSTest.SetByteArray(jsb_1.ToBytes(buffer));
    console.log(buffer);
}
