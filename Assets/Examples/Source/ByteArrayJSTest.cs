using QuickJS;

namespace Example
{
    [JSType]
    public class ByteArrayJSTest
    {
        public static byte[] lastArray;

        public static void SetByteArray(byte[] array)
        {
            lastArray = array;
        }
    }
}