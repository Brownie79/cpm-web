import {Component,NgZone} from "@angular/core";

// Google's login API namespace
declare var gapi:any;

@Component({
    moduleId: module.id,
    selector: "gSignIn",
    templateUrl: "googlesignin.html"
})
export class GoogleSignIn {
  googleLoginButtonId = "google-login-button";
  googleUser: any;
  user: User = {
      googleID: "",
      fName: "",
      lName: "",
      email: "",
      proPic: ""
    };
  isLoggedIn: boolean = false;

  constructor(private _zone: NgZone) {
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
      console.log(this.user)
      this.googleUser = User;
      this.user.googleID = User.getAuthResponse().id_token;
      
      let basicProfile = User.getBasicProfile();
      this.user.fName = basicProfile.getGivenName();
      this.user.lName = basicProfile.getFamilyName();
      this.user.proPic = basicProfile.getImageUrl();
      this.user.email = basicProfile.getEmail();
      this.isLoggedIn = true;
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
}

interface User{
  googleID: string;
  fName: string;
  lName: string;
  proPic: string;
  email: string;
}