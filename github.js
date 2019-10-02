class GitHub
{
    constructor(){
        this.client_id=`a1a0114e73403a46aade`;
        this.client_secret=`81fc912ab998b580dadb9f5dcffde561dd4b49ae`;
        this.count_id=5;
        this.sort=`created:asc`;
    }

    async getUser(user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count_id}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();


        return {
            profile: profileData,
            repo: repoData

        }
    }
}