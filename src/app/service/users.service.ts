import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUser(token){
    return this.http.get('https://api.vk.com/method/users.get?v=5.122&access_token=' + token)
  }
}
