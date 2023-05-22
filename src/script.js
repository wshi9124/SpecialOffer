submitForm = document.querySelector("#background-change-form");

let idSwitch = 0;

const changeID = () => {
    if (idSwitch === 0){
        document.querySelector("#background-image").setAttribute("id", "new-image");
        idSwitch = 1;
    } else {
        document.querySelector("#new-image").setAttribute("id", "background-image");
        idSwitch = 0;
    };
};

submitForm.addEventListener("submit", (event) => {
    event.preventDefault()
    changeID()
});
