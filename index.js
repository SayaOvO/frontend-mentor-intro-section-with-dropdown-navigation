document.addEventListener("DOMContentLoaded", () => {
  const openDrawer = document.querySelector(".open-drawer");
  const closeDrawer = document.querySelector(".close-drawer");
  const drawerOverlay = document.querySelector(".drawer-overlay");
  const drawer = document.querySelector(".drawer");

  openDrawer.addEventListener("click", () => {
    drawerOverlay.style.display = "block";
    drawer.animate(
      [
        {
          transform: "translateX(200px)",
        },
        {
          transform: "translateX(0px)",
        },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );
  });
  closeDrawer.addEventListener("click", () => {
    const drawerAnimation = drawer.animate(
      [
        {
          transform: "translateX(0px)",
        },
        {
          transform: "translateX(200px)",
        },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );
    drawerAnimation.finished.then(() => {
      drawerOverlay.style.display = "none";
    });
  });
});
