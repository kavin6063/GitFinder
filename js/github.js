

class Github{

    constructor(){
        this.client_id = "Ov23liLuEGKojJkRgwCj";
        this.client_secret = "ac808c73ae6cb78b743383d6feeb95e4e5c086e2";
        
    }

    // https://api.github.com/users/jaganjavid

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return profile;
        
    }

    async getRepos(user) {
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();
        return repos;
    }

}