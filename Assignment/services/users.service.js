const fs = require('fs');
const usersData = JSON.parse(fs.readFileSync('./data/fakeUsers.json', 'utf8'));

class UsersService{

    static findAll(){

        return users;
    }

   static findById(id){
       const user = users.find((user) =>{

            return user.id === parseInt(id);
        });

       return user;

    }

    static delete(id) {
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index > -1) {
            users.splice(index, 1);
            UsersService._saveToFile();
        }
    }

}

module.exports = UsersService;