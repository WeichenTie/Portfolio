import Bowser from "bowser";

export function useCursor(el: any | string, scope?: Element) {
  if (Bowser.parse(window.navigator.userAgent).platform.type === "mobile") {
    return;
  }
  let els: Element[] | NodeListOf<Element>;
  const hoverState = useState("cursorState");
  function onMouseOver() {
    hoverState.value = true;
  }
  function onMouseLeave() {
    hoverState.value = null;
  }

  if (typeof el !== "string") {
    els = [el];
  } else if (scope) {
    els = scope.querySelectorAll(el as string);
  } else {
    els = document.querySelectorAll(el as string);
  }

  for (const e of els) {
    e.addEventListener("mouseover", onMouseOver);
    e.addEventListener("mouseleave", onMouseLeave);
  }

  onUnmounted(() => {
    for (const e of els) {
      e.removeEventListener("mouseover", onMouseOver);
      e.removeEventListener("mouseleave", onMouseLeave);
    }
  });
}
