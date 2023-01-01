{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich, któr zy tutaj zaglądają!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".theme__name");

        body.classList.toggle("section--dark");
        themeName.innerText = body.classList.contains("section--dark") ? "jasny" : "ciemny";
    };


    const init = () => {
        const changeBackgroundButton = document.querySelector(".theme__button");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}
