const gitHub = new Github();

const ui = new UI();


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const getInput = document.querySelector("#Search-user").value;
    if (getInput.trim() === "") {
        ui.Ownalert("Fill the Fields","danger");
    }
    else {
        gitHub.getUser(getInput)
            .then((data) => {
                ui.showProfile(data)
            })
            .catch((err) => console.log(err));
            // document.querySelector("#Search-user").value=" ";

    }
    

})