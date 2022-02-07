

// ===================== page info ===================

      window.addEventListener("mousemove", (e) => {
        document.querySelector(".clientX").innerHTML = e.clientX;
        document.querySelector(".clientY").innerHTML = e.clientY;
        document.querySelector(".offsetX").innerHTML = e.offsetX;
        document.querySelector(".offsetY").innerHTML = e.offsetY;
        document.querySelector(".screenY").innerHTML = e.screenY;
        document.querySelector(".screenX").innerHTML = e.screenX;
      });


// =========== CURSOR ============


window.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  
  let x = e.pageX - 30,
    y = e.pageY - 30;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

})







