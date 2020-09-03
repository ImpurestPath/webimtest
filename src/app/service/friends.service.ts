import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(token){
    return this.http.get('https://api.vk.com/method/friends.get?order=random&count=5&v=5.122&fields=domain&access_token=' + token)
  }
}
