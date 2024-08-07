class Github{
    constructor(){
        this.client_id="Ov23lim5NmKAoMvM233p";
        this.client_secret="3e5f148a2929d1424bd3bc5723742c15873f0e95";
    }
    async getUser(user){
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
            const Profile =await profileResponse.json();
            return Profile;
    }
}