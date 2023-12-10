class AuthenticationService {
  static authenticate(username, password) {
   if (username === "admin" && password === "password"){
    return {isAuthenticated: true};
   }
   else{
    return  {isAuthenticated: false};
   }
  }
}

module.exports = AuthenticationService;
