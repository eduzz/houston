import * as React from 'react';
function useOnClickOutside(ref, handler) {
    React.useEffect(function () {
        var listener = function (event) {
            var el = ref === null || ref === void 0 ? void 0 : ref.current;
            if (!el || el.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
}
export default useOnClickOutside;
