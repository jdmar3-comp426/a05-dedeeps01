function createAccount() {
    const createAccountForm = document.forms["index"];
    const sendRequest = new XMLHttpRequest();
    const createAccountInfo = new URLSearchParams(new FormData(createAccountForm) );

    // Set up request
    sendRequest.open("POST", "http://localhost:5000/app/new/user");

    // Send request with data
    sendRequest.send(createAccountInfo);

    // Successful data submission
    sendRequest.addEventListener( "load", function( event ) {
      if( sendRequest.status == 201 ) {
        alert( "Account creation successful" );
      } else if( sendRequest.status == 409 ) {
        alert( "Username already exists, please try another username" );
      } else if( sendRequest.status == 404 ) {
        alert( "Invalid username / password, please try again" );
      }
    } );

    // Error with data submission
    sendRequest.addEventListener( "error", function( event ) {
      alert( "Submission unsuccessful, please try again" );
    } );
  }