class UI{
    constructor(){
        this.profile=document.querySelector('#profile');
    }

    showProfile(user)
    {
        this.profile.innerHTML=`
            <div class="card card-body mb-3"> 
                <div class="row">
                    <div class="col-md-3">
                    <img class="img-fluid mb-3" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-danger btn-block mb-3">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary p-3" style="font-size:120%;"> Public Repo: ${user.public_repos}</span>
                        <span class="badge badge-secondary p-3" style="font-size:120%;"> Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success p-3 "style="font-size:120%;"> Followers: ${user.followers}</span>
                        <span class="badge badge-info p-3 "style="font-size:120%;"> Following: ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item"> Name: ${user.name}</li>
                            <li class="list-group-item"> Organisation: ${user.company}</li>
                            <li class="list-group-item"> Email: ${user.email}</li>
                            <li class="list-group-item"> Register Date: ${user.created_at}</li>
                            <li class="list-group-item"> Location: ${user.location}</li>
                        
                        </ul>
                    </div>
                </div>
            
            </div>
            <h3 class="pae-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    showRepo(repos)
    {
        let output=``;
        repos.forEach(function(repo){
            output+=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6"> 
                    
                    <a href="${repo.html_url}" style="font-size:1.3rem;" target="_blank">${repo.name}</a>
                    </div>

                    <div class="col-md-6">
                    <span class="badge badge-primary p-3" style="font-size:120%;"> Star: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary p-3" style="font-size:120%;"> Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success p-3 "style="font-size:120%;"> Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`;
        });


        document.querySelector('#repos').innerHTML=output;
    }

    showAlert(msg,className)
    {
        this.clearAlert();

        const div=document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.searchContainer');
        const search=document.querySelector('.search');

        container.insertBefore(div,search);

        //removing alert after 3 sec

        setTimeout(()=>{
            this.clearAlert()
        },3000);

    }
    clearAlert()
    {
        const alert=document.querySelector('.alert');
        if(alert)
        {
            alert.remove();
        }
    }

    clearProfile()
    {
        this.profile.innerHTML = ``;
    }
}