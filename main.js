
/*SIGN UP FORM FUNCTION*/ 
function signupFunc(e){
  event.preventDefault();

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var userName = document.getElementById('userName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var newUser = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    password: password,
  };

  var json = JSON.stringify(newUser);
  localStorage.setItem('newUser', json);
  alert('User added!');
};


/*LOG IN FORM FUNCTION*/ 
function loginFunc(e){
  event.preventDefault();

  var userName = document.getElementById('userName').value;
  var password = document.getElementById('password').value;

  var user = {
    userName: userName,
    password: password,
  };

  var user = localStorage.getItem(user);
  var data = JSON.parse(user);
  console.log(data);

  if(user == null){
    alert('Invalid username');
  } else if(userName == data.userName && password == data.password){
    alert('Log in successful!');
  } else{
    alert('Invalid password');
  }

};
