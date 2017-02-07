export default function reducer(state={
  user: null,
  pass: null,
  staus: false,
  avatar: './utils/icons/user.png',
}, action) {
  switch (action.type) {
    case "login": {
      try{
        var dts = db.exec("SELECT * FROM login WHERE username='" + action.user + "'");
        var dbrow = dts[0].values[0];
        if(action.pass == dbrow[1]) {
          console.log('You have logged in');
          return {...state, user: action.user, pass: action.pass, status: 'Logged in'};
        }
        else {
          console.log('Incorrect Password')
        }
        // return {...state};
    }
    catch(e) {
        if (e == "TypeError: Cannot read property 'values' of undefined") {
            alert("User not found")
        }
        else {
            alert(e);
        }
        return {...state, user: null, pass: null, status: false};
    }
      return  {...state, user: null, pass: null, status: false};
    }
    case "logout": {
      return  {...state, user: null, pass: null, status: false};
    }
    case "chgAvatar": {
      return {... state, avatar: action.avatar};
    }
    default :
      return state;
  }
}
