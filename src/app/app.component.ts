import { FriendsService } from './service/friends.service';
import { AuthService } from './service/auth.service';
import { UsersService} from './service/users.service'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean;
  name: string;
  friendsList: any[];
  constructor(private authService: AuthService, private friends: FriendsService, private users: UsersService){
    this.isLoggedIn = authService.isLoggedIn();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      this.loadFriends();
      this.loadUser();
    }
  }

  public login(){
    this.authService.initLoginFlow();
  }

  private loadFriends(){
    this.friends.getFriends(this.authService.getToken()).subscribe((data : any) => {
      console.log(data.response);
      this.friendsList = data.response.items;
    })
  }

  private loadUser(){
    this.users.getUser(this.authService.getToken()).subscribe((data : any) => {
      console.log(data.response[0]);
      this.name = data.response[0].first_name;
    })
  }

  public logout(){
    this.authService.logOut();
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
