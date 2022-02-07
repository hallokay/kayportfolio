(
    document.onload = () => {
     const progress = document.querySelector(".progress"),
       progressText = progress.querySelector(".progress_text");

       let i = 0;
       setInterval(() => {
        if(i< 100){
            i++;
            // console.log(i);
            progressText.innerText = `${i}%`;
            return
        }
        progress.classList.add("fade_out");
    }, 80);

    setTimeout(()=> {
        progress.style.display = "none";
        console.log("hi!");
    }, 12000);
    }


    // ================= for 문으로 하는 방법 ===========
//     let i;

// setTimeout(()=> {
//     for(i = 0; i <= 100; i++){
//             progressText.innerText = `${i}%`;
//     }
// }, i * 100);

)();
