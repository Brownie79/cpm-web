import {Component,NgZone} from "@angular/core";
import {ServerService, User} from '../../services/server.service';

// Google's login API namespace
declare var gapi:any;

@Component({
    moduleId: module.id,
    selector: "gSignIn",
    templateUrl: "googlesignin.html",
})

export class GoogleSignIn {
  googleLoginButtonId = "google-login-button";
  googleUser: any;
  /*user: User = {
      googleID: "",
      fName: "",
      lName: "",
      email: "",
      proPic: "",
      conferences: ""
    };*/
  isLoggedIn: number = 0;
  userFirstName: string;

  constructor(private _zone: NgZone, public server: ServerService) {
    //console.log(this);
  }
  

  // Angular hook that allows for interaction with elements inserted by the
  // rendering of a view.
  ngAfterViewInit() {
    this.renderGButton();
  }

  // Triggered after a user successfully logs in using the Google external
  // login provider.
  onGoogleLoginSuccess = (User:any) => {
    //console.log(User);
    this._zone.run(() => {
      //console.log(User.getAuthResponse().id_token);
      this.googleUser = User;
      this.isLoggedIn = 1;
      this.userFirstName = User.getBasicProfile().getGivenName();
      this.server.login({
        googleID: User.getAuthResponse().id_token,
        fName: User.getBasicProfile().getGivenName(),
        lName: User.getBasicProfile().getFamilyName(),
        proPic: User.getBasicProfile().getImageUrl(),
        email: User.getBasicProfile().getEmail(),
        conferences: "",
      });
    });
  }

  renderGButton(){
    // Converts the Google login button stub to an actual button.
    gapi.signin2.render(
      this.googleLoginButtonId,
      {
        "onSuccess": this.onGoogleLoginSuccess,
        "scope": "profile",
        "theme": "dark"
      });
  }

  signOut() {
    this.googleUser.disconnect().then(function(){});    
  }

  refreshPage(){
    window.location.reload();
  }
}
