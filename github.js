class GitHub {
    constructor(){
        this.client_ID = '6031e0d559160618be74';
        this.client_secret = 'ecac0f6e3c0a0964f53d4022645ba4ea887f3d88';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user = 'anniks2010';
        this.apiUrl ='https://api.github.com/users/';
    }

    async getUserData(){
        //`` - backticks shift+ backspace kõrval olev nupp
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile); //ootame url vastust 
        const reposReponse = await fetch(urlRepos); //ootame url vastust 

        const profile = await profileResponse.json();
        const repos = await reposReponse.json();

        return{
            profile,
            repos
        }

    }

}