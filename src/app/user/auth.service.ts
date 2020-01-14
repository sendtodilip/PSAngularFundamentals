import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: HttpClient) { }

    loginUser(userName: string, password: string) {

        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders({ 'Content-Type': 'applicaiton/json' }) };

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            // .pipe(catchError(err => {
            //     return of(false);
            // }))
            
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'John',
        //     lastName: 'Papa'
        // };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}