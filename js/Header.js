// ================ HEADER nav =================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  // console.log(window.scrollY);

  if (window.scrollY > 1) {
    header.classList.add("hd_active");
  } else {
    header.classList.remove("hd_active");
  }
});

// =========== MENU TOGGLE ============

const menuBtn = document.getElementById("menu_btn"),
  closeBtn = document.getElementById("nav_close"),
  navMenu = document.getElementById("nav_menu");

function toggleMenu() {
  navMenu.classList.toggle("menu_open");
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);


// ============== intro ====================

const txtSlow = document.querySelectorAll(".t_slow"),
  txtFast = document.querySelectorAll(".t_fast");
function mouseMove(e) {
  // console.log('hi');
  let positionSlow = (e.pageX - window.innerWidth / 2) * 0.05;
  let positionFast = (e.pageX - window.innerWidth / 2) * 0.1;
  // - (window.innerWidth / 2) 이걸 빼면 오른쪽으로만 움직임 포커스를 중간으로 하기 위해

  txtSlow.forEach((el) => {
    // console.log(el);
    el.style.transform = `translateX(${positionSlow}px)`;
  });
  txtFast.forEach((el) => {
    el.style.transform = `translateX(${positionFast}px)`;
  });
}

window.addEventListener("mousemove", mouseMove);

// const introLine1 = document.querySelector(".intro_line1"),
//   introLine2 = document.querySelector(".intro_line2");

// window.onscroll = () => {
//   const pos = window.scrollY;
//   const screenWidth = screen.width;

//   introLine1.style.left = `${400 + (pos * 2)}px`;
 //   introLine2.style.right = `${400 +( pos * 2)}px`;
// };
