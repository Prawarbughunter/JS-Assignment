class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.coins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    

}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
    }
    addCoin(user, coin){
        user.coins +=coin;
        console.log(`${user.name} and ${user.coins}`)
        return this;
    }
    removeCoin(user, coin){
        user.coins -=coin;
        console.log(`${user.name} and ${user.coins}`)
        return this;
    }
  
    

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
}


let user1 = new User('Pooja',25,'Pooja@gmail.com')
let user2 = new User('Prathamesh',23,'Prathamesh@gmail.com')
let mod = new Moderator('Shubhangi',35,'shubhangi@gmail.com');
 let admin = new Admin('suhasini',25,'suhasini@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});


admin.addCourse(user1,'Javascript');
 admin.addCourse(user2,'Python');



user1.login()
 mod.addCoin(user1,1);
 mod.addCoin(user1,1);
 mod.removeCoin(user1,1);

user1.logout()

admin.deleteUser(user1);
console.log(users);
