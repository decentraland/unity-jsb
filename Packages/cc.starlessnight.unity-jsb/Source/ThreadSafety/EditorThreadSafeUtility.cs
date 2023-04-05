#if UNITY_EDITOR
using UnityEditor;

namespace QuickJS.ThreadSafety
{
    [InitializeOnLoad]
    public class EditorThreadSafeUtility
    {
        static EditorThreadSafeUtility()
        {
            EditorApplication.update += CacheIsApplicationActive;
        }

        private static void CacheIsApplicationActive()
        {
            IsApplicationActive = UnityEditorInternal.InternalEditorUtility.isApplicationActive;
        }

        public static bool IsApplicationActive { get; private set; }
    }
}
#endif