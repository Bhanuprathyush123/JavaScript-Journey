const user = {
     username: "hitesh",
     loginCount: 8,
     signedIn: true,
 
     getUserDetails: function(){
         //console.log("Got user details from database");
     //     console.log(`Username: ${this.username}`);
     //     console.log(this);
     }
 
}

// console.log(user.getUserDetails());

function userDetails(userName,loginCount,signedIn) {
     this.userName = userName
     this.loginCount = loginCount
     this.signedIn = signedIn

     this.greetings = function () {
          console.log(`Welcome : ${this.userName}`);
     }
}

let oldUser = new userDetails('SaiRam', 10, true)
console.log(oldUser);
console.log(`---------- Printing Constructor --------`);
console.log(oldUser.constructor);
let newUser = new userDetails('Lokesh', 12, false)
console.log(newUser);
console.log(`---------- Printing Constructor --------`);
console.log(newUser.constructor);