using System.Text;
using UnityEditor;
using UnityEngine;

namespace Example
{
    public static class ByArrayJSTestMenu
    {
        [MenuItem("ByteArrayJSTest/Print Content")]
        public static void PrintContent()
        {
            Debug.Log(Encoding.Unicode.GetString(ByteArrayJSTest.lastArray, 0, ByteArrayJSTest.lastArray.Length));
        }
    }
}