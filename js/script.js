const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".first"));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated")[2].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
        }
    })
})

observer2.observe(document.querySelector(".second"));

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated")[4].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[5].classList.add("fadeInRight");
        }
    })
})

observer3.observe(document.querySelector(".third"));

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated")[6].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[7].classList.add("fadeInRight");
        }
    })
})

observer4.observe(document.querySelector(".fourth"));


/*let buttonChange = document.querySelector(".change");
let paragraph = document.querySelector(".pl");



buttonChange.addEventListener("click", () => {
    paragraph.classList.toggle("pl");

    if (paragraph.classList.contains("pl")) {
        paragraph.innerText = "This is english";
        buttonChange.innerText = "Change language";
    } else {
        paragraph.innerText = "To jest polski";
        buttonChange.innerText = "Zmień język" }
});*/