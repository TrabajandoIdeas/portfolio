import debounce from "debounce";

const SCROLL_HEIGHT_TRIGGER = window.screen.availHeight * 0.4;

function checkScroll(isOpen:boolean, showOnScroll: HTMLElement, hideOnScroll: HTMLElement): boolean {
  if (document.body.scrollTop < SCROLL_HEIGHT_TRIGGER) {
    if (!isOpen) {
      showOnScroll.classList.add("-translate-y-[calc(100%+28px)]");
      showOnScroll.classList.remove("translate-y-0");

      hideOnScroll.classList.remove("-translate-y-full");
      hideOnScroll.classList.add( "translate-y-0");

      showOnScroll.querySelectorAll<HTMLElement>("[data-open]").forEach((menu) => {
        menu.dataset.open = "false"
      })
    }
    return true;
  } 
  if (isOpen) {
    showOnScroll.classList.remove("-translate-y-[calc(100%+28px)]");
    showOnScroll.classList.add("translate-y-0");

    hideOnScroll.classList.add( "-translate-y-full");
    hideOnScroll.classList.remove( "translate-y-0");
  }
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  let isOpen = false;
  const nav = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  
  if (!nav || !hero) return;

  isOpen = checkScroll(isOpen, nav, hero);

  document.body.addEventListener('scroll', debounce(() => {
    isOpen = checkScroll(isOpen, nav, hero);
  }, 70))
})