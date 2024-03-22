export function useNavbar() {
  let navbar: HTMLElement | null;
  onMounted(() => {
    navbar = document.querySelector("nav");
  });
  function setDarkMode(state: boolean = false) {
    if (state) {
      navbar!.classList.remove("bg-pampas-100");
      navbar!.classList.add("bg-neutral-900");
      navbar!.classList.remove("text-neutral-900");
      navbar!.classList.add("text-pampas-100");
    } else {
      navbar!.classList.remove("bg-neutral-900");
      navbar!.classList.add("bg-pampas-100");
      navbar!.classList.remove("text-pampas-100");
      navbar!.classList.add("text-neutral-900");
    }
  }
  return { setDarkMode };
}
