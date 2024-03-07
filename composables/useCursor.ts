export function useCursor(el: Element | string, scope?: Element) {
  let els: Element[] | NodeListOf<Element>;
  const hoverState = useState("cursorState");
  function onMouseOver() {
    hoverState.value = true;
  }
  function onMouseLeave() {
    hoverState.value = null;
  }

  if (el instanceof Element) {
    els = [el];
  } else {
    if (scope) {
      els = scope.querySelectorAll(el);
    } else {
      els = document.querySelectorAll(el);
    }
    for (const e of els) {
      e.addEventListener("mouseover", onMouseOver);
      e.addEventListener("mouseleave", onMouseLeave);
    }
  }

  onUnmounted(() => {
    for (const e of els) {
      e.removeEventListener("mouseover", onMouseOver);
      e.removeEventListener("mouseleave", onMouseLeave);
    }
  });
}
