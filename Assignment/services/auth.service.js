class AuthenticationService{

    static authenticate(username,password){
        let isAuthenticated = true;

        if (username == "username" && password == "password")
        {
            isAuthenticated = true;
        }
       else {
             isAuthenticate = false;
       }
        
       return isAuthenticated;

    }
}

module.exports = AuthenticationService;