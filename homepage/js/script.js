let buttonChange = document.querySelector(".change");
let paragraph = document.querySelector(".pl");



buttonChange.addEventListener("click", () => {
    paragraph.classList.toggle("pl");

    if (paragraph.classList.contains("pl")) {
        paragraph.innerText = "This is english";
        buttonChange.innerText = "Change language";
    } else { 
        paragraph.innerText = "To jest polski";
        buttonChange.innerText = "Zmień język" }
});