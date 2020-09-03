import { FriendsService } from './service/friends.service';
import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private friends: FriendsService){
    this.isLoggedIn = authService.isLoggedIn();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      this.loadFriends()
    }
  }

  public login(){
    this.authService.initLoginFlow();
  }

  private loadFriends(){
    this.friends.getFriends(this.authService.getToken()).subscribe(data => console.log(data))
  }

  public logout(){
    this.authService.logOut();
  }
}
