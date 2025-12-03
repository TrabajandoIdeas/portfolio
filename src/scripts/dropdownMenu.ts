function stopPropagation(e: Event) {
  e.stopPropagation();
}


interface ClientPos {
  x: number;
  y: number;
}

interface CallbackReferences {
  mouseUp: MouseEventCallback | undefined,
  mouseDown: MouseEventCallback | undefined,
}

type MouseEventCallback = (e: MouseEvent) => any;

function clickInside(element: HTMLElement, client: ClientPos) {
  const rect = element.getBoundingClientRect();

  return (
    client.x > rect.left &&
    client.x < rect.right &&
    client.y > rect.top &&
    client.y < rect.bottom
  );
}

function isHTMLElement(element: Element): element is HTMLElement {
  return !!element;
}

document.addEventListener("DOMContentLoaded", () => {

  const menus: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>("[data-open]");
  
  menus.forEach((container) => {
    const [button, content] = container.children
    if (!isHTMLElement(button) || !isHTMLElement(content)) return;

    (button as HTMLBaseElement).addEventListener("click", () => {
      container.dataset.open = "true";
      const callbackReference: CallbackReferences = {
        mouseUp: undefined,
        mouseDown: undefined
      };

      const removeMouseUpEvent = () => {
        if (callbackReference.mouseUp === undefined) return;
        document.removeEventListener("mouseup", callbackReference.mouseUp);
      };

      const callbackUp: MouseEventCallback = (e) => {
        e.stopPropagation()
        if (
          clickInside(content, {
            x: e.clientX,
            y: e.clientY,
          })
        )
          return;

        removeMouseUpEvent();
        container.dataset.open = "false";
      };
      const callbackDown: MouseEventCallback = (e) => {
        
        if (
          clickInside(content, {
            x: e.clientX,
            y: e.clientY,
          })
        )
          return;

        removeMouseUpEvent();
        callbackReference.mouseUp = callbackUp;
        document.addEventListener("mouseup", callbackUp);
      };
      document.addEventListener("mousedown", callbackDown);
    })
  })
})