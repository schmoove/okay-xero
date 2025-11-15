// https://github.com/Cristy94/dynamic-listener
!(function (e) {
  "use strict";
  e.addDynamicEventListener = function (e, t, r, n, a) {
    var i = (function (e, t) {
      return function (r) {
        if (r.target && r.target.matches(e))
          return (r.delegatedTarget = r.target), void t.apply(this, arguments);
        var n = event.path || (event.composedPath && event.composedPath());
        if (n)
          for (var a = 0; a < n.length; ++a) {
            var i = n[a];
            if (
              (i.matches(e) &&
                ((r.delegatedTarget = i), t.apply(this, arguments)),
              i === r.currentTarget)
            )
              return;
          }
      };
    })(r, n);
    return e.addEventListener(t, i, a), e.removeEventListener.bind(e, t, i, a);
  };
})(this);

addDynamicEventListener(
  document.body,
  "keydown",
  '.create input[type="text"]',
  function (e) {
    console.log("keydown", e.target.innerText);
    if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
      const okButton = e.delegatedTarget
        .closest(".line")
        .querySelector(".okayButton");
      if (okButton && getComputedStyle(okButton).visibility === "visible") {
        const e = new Event("click");
        okButton.dispatchEvent(e);
        console.log("[okayXero]", "OK!");
      } else {
        console.log("[okayXero]", "OK button not found or not visible");
      }
    }
  }
);
