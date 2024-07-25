
const github = new Github();
const ui = new UI();

const form = document.querySelector("form");
const clearBtn = document.querySelector("#clearBtn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const getInput = document.querySelector("#search-user").value;
    const originalName = getInput.split(' ').join('');

    if(originalName === ""){
        ui.showAlert("Fill the field " , "danger");
    } else {
        github.getUser(originalName)
        .then(data => {
                const profileShown = ui.showProfile(data);
                if(profileShown){
                    return github.getRepos(originalName);
                }else{
                    return null;
                }
               
        })
        .then(repos => {
            if (repos) {
                ui.showRepos(repos);
            }
        })
        .catch(err => console.log(err));

        document.querySelector("#search-user").value = "";
    }
});

clearBtn.addEventListener("click" , ()=>{
    ui.clearData();
    ui.showAlert("User Data Cleared successfully!" , "success")
});