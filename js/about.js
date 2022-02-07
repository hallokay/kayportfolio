//  ==================== ABOUT ME =================
// const about = document.querySelector(".about");
// const aboutImg = document.querySelector(".about_img");


function shadow(e) {

  const aboutEft = document.querySelectorAll(".about_eft");
  aboutEft.forEach((el) => {
    const { x, y } = e;
    const rect = el.getBoundingClientRect();
    console.log(rect);

   const mouseX = ((x - rect.left - rect.width / 2) / rect.width) * 20;
   const mouseY = ((y - rect.top - rect.height / 2) / rect.height) * 20;

    el.style.boxShadow = `${mouseX}px ${-mouseY}px 0px rgb(255, 165, 0, 0.2),
                                         ${-mouseX}px ${mouseY}px 0px rgb(255, 35, 251, 0.2),
                                         ${mouseY}px ${-mouseX}px 0px rgb(255, 255, 73, 0.2),
                                         ${-mouseY}px ${mouseX}px 0px rgb(102, 249, 255, 0.2)`;




  });
}

window.addEventListener("mousemove", shadow);

// let x = 0,
//   y = 0,
//   mouseX = 0,
//   mouseY = 0,
//   angleX = 0,
//   angleY = 0,
//   fmouseX = 0,
//   fmouseY = 0;

// document.addEventListener("mousemove", function (e) {
//   x = e.pageX;
//   y = e.pageY;

//   // 마우스 x축 y축 최소값 -100 최대값 100 으로 설정
//   mouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - x));
//   mouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - y));

//   angleX = (20 * mouseX) / 100;
//   angleY = (20 * mouseY) / 100;
//   // 앵글 앞에 숫자가 클수록 움직이는 폭이 커짐

//   fmouseX += ((angleX - fmouseX) * 1) / 10;
//   // 1/10 나누는 숫자가 커질수록  1/1로하면 돌아가는 움직임이 적어지고 뒷면까지 뒤집어짐
//   fmouseY += ((angleY - fmouseY) * 1) / 10;

//   aboutImg.style.transform = `rotateX(0deg) rotateY(${-fmouseX}deg)`;
//   // aboutImg.style.transform = `rotateX(${fmouseY}deg) rotateY(0deg)`;
// });
