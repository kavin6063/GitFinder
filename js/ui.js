

class UI {

    constructor() {
        this.profile = document.querySelector("#profile");
        this.repos = document.querySelector("#repos");
    }

    // Display the profile user

    showProfile(user) {
      this.profile.innerHTML = '';
        if (user.status === "404") {
            ui.showAlert("No user in this name" , "danger");
            return false;
        } else {
          ui.showAlert("User Data fetched Successfully" , "success");
            this.profile.innerHTML = `
         
          <div class="card card-body">

      <div class="row">
        <div class="col-md-3">
          <img width="100%" class="rounded" src=${user.avatar_url} alt="">
          <a href=${user.html_url} target="_blank" class="btn-blue text-decoration-none mt-3 mb-3">Visit Profile</a>
        </div>

        <div class="col-md-9">
          <span class="badge  bg-primary p-2">Public Repos : ${user.public_repos}</span>
          <span class="badge  bg-secondary p-2">Followers : ${user.followers}</span>
          <span class="badge  bg-info p-2">Following : ${user.following}</span>
         
          <br>
          <br>

          <ul class="list-group">
             <li class="list-group-item"><span class="fw-bold">Company :</span> ${user.company} </li>
             <li class="list-group-item"><span class="fw-bold">Blog :</span> ${user.blog} </li>
             <li class="list-group-item"><span class="fw-bold">Location :</span> ${user.location} </li>
          </ul>
        </div>
      </div>

    </div>
         `
         return true;
        }

    }

    showRepos(repos) {
      this.repos.innerHTML = '';

      const heading = document.createElement('h3');
      heading.className = `fw-bold`
      heading.innerText = 'Repositories';
      this.repos.appendChild(heading);
  
      repos.forEach(repo => {
          this.repos.innerHTML += `
              <div class="card card-body mb-2">
                  <div class="row">
                      <div class="col-md-12">
                          <a class="fw-bold blue" href="${repo.html_url}" style="text-decoration: none" target="_blank">${repo.name}</a>
                      </div>
                  </div>
              </div>
          `;
      });
  }

  showAlert(message ,type){
    this.clearAlert();
    const div = document.createElement("div")
    div.className = `alert alert-${type}`;
    div.innerText = message;
    document.querySelector(".show-alert").appendChild(div);
    setTimeout(() => {
        this.clearAlert();
      }, 2000);
}
clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearData = ()=>{
    this.profile.innerHTML = "";
    this.repos.innerHTML = "";
}

}