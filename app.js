
const github = new GitHub;
const ui=new UI;


const searchUser=document.querySelector('#searchUser');


//Add the Event Parameter

searchUser.addEventListener('keyup', (e) => {

    const userText= e.target.value;


    if(userText!=='')
    {
        //make HTTP call
        github.getUser(userText).then(data => {
           if(data.profile.message==='Not Found')
           {
               //show alert
               console.log(data);
               ui.showAlert('Profile does not found', 'alert alert-danger');
               ui.clearProfile();
           }
           else
           {
               //show profile
               
                ui.showProfile(data.profile);
                ui.showRepo(data.repo);
           }
        })
    }
    else
    {
        //clear profile
        ui.clearProfile();
    }

});