//asynchronously load the SDK into your pages. The async load means that it does not block loading other elements of your page.
window.fbAsyncInit = function() {
    FB.init({
      appId      : '906907983144933', //my app ID on the facebook dev page
      cookie     : true,
      xfbml      : true,
      version    : 'v7.0' //replaced with version of API I am using
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


//checks if the person is still logged into Facebook and triggers a call to facebook
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


//The response object that's provided to your callback contains a number of fields:
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

/*status specifies the login status of the person using the app. The status can be one of the following:
    -connected - the person is logged into Facebook, and has logged into your app.
    -not_authorized - the person is logged into Facebook, but has not logged into your app.
    -unknown - the person is not logged into Facebook, so you don't know if they've logged into your app or FB.logout() was called before and therefore, it cannot connect to Facebook.

authResponse is included if the status is connected and is made up of the following:
    -accessToken - contains an access token for the person using the app.
    -expiresIn - indicates the UNIX time when the token expires and needs to be renewed.
    -signedRequest - a signed parameter that contains information about the person using the app.
    -userID - the ID of the person using the app.
    -Once your app knows the login status of the person using it, it can do one of the following:
    -If the person is logged into Facebook and your app, redirect them to your app's logged in experience.
    -If the person isn't logged into your app, or isn't logged into Facebook, prompt them with the Login dialog with FB.login() or show them the Login Button.
*/