class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
    }
    showProfile(user) {
        if (user.status === "404") {
            this.Ownalert("User Not Found", "danger");
            // console.log(this);
        } else {
            this.profile.innerHTML = `<div class="card card-body">
                 <div class="row">
                 <div class="col-md-3">
                 <img width=100% src="${user.avatar_url}">
                 <a href="${user.html_url}" class="btn btn-success my-4 mx-2" target="_blank">Vist profile</a>
             </div>
             <div class="col-md-9">
                 <span class="badge bg-primary p-2">Public Repos: ${user.public_repos}  </span>
                 <span class="badge bg-secondary p-2">Followers: ${user.followers}  </span>
                 <span class="badge bg-info p-2">Following: ${user.following}  </span>
            
             <br>
             <br>
             <ul class="list-group">
                 <li class="list-group-item">Company: ${user.company}</li>
                 <li class="list-group-item">Email: ${user.email}</li>
                 <li class="list-group-item">Blog: ${user.blog}</li>
                 <li class="list-group-item">Location: ${user.location}</li>
             </ul>
             </div>
                 </div>
           </div>`
           this.clearInput();
        }
        // console.log(user.status);
        // this.clearInput();
    }
    Ownalert(msg, state) {
        const container = document.querySelector(".alert");
        const para = document.createElement("h1");
        para.className = `btn btn-${state} p-2 fw-semibold`;
        para.innerHTML = `${msg}`;
        if (container.children.length == 0) {
            container.append(para);

            setTimeout(() => {
                container.removeChild(para);
            }, 3000);
        }
        // console.log();
    }
    clearInput(){
        document.querySelector("#Search-user").value="";

    }
}
