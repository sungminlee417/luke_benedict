export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Get the height of the navbar
    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0;
    // Calculate the offset position
    const offsetPosition = element.offsetTop - navbarHeight;

    // Scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
