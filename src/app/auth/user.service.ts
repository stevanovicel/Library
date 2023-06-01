import { Injectable } from "@angular/core";


export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

@Injectable()
export class UserService {

    isUserLoggedIn: boolean = false;
    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> = [
        {
            id: 0,
            name: "Admin",
            surname: "Admin",
            email: "admin@mail.com",
            password: "12345678"
        },
        {
            id: 1,
            name: "Admin1",
            surname: "Admin2",
            email: "admin1@mail.com",
            password: "123456789"
        }
    ];

    getUserName(user: User): string {
        return user.name;
    }

    getUserById(id: number) : User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
        // return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;

        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind => 
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(name: string, surname: string, email: string, password: string) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if(maxId < user.id) {
                maxId = user.id;
            }
        })

        var id = ++maxId;

        var user: User = {
            id,
            name,
            surname,
            email,
            password
        }

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }
    
    getCurrentUserId(): number {
        return this.currentUser.id;
      }
    
      getIsUserLoggedIn() : boolean {
        return this.isUserLoggedIn;
      }
    
      setIsUserLoggedIn(status: boolean) {
        this.isUserLoggedIn = status;
      }
    
      setCurrentUser(user : User) {
        this.currentUser = user;
      }
    

}