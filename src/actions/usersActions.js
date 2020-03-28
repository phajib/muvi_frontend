import axios from 'axios';
import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

// const CREATE_USER = 'CREATE_USER'
// const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
// const CURRENT_USER = 'CURRENT_USER'

//-----------USERS--------------------
export const signUp = (userInfo) => {
  return (dispatch) => {
    axios.get(`${HOST_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: userInfo.username,
          password: userInfo.password,
          about: userInfo.about,
          profile_picture: userInfo.avatar,
        }
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'CURRENT_USER', payload: data.user })
        localStorage.setItem("jwt", data.jwt)
      })
  }
}

// export const signUp = newUser => async (dispatch) => {
//   try {
//     dispatch({ type: 'CREATE_USER', ...newUser});

//     const response = await axios({
//       method: 'POST',
//       url: `${HOST_URL}/users`,
//       data: { user: newUser },
//       crossdomain: true
//     });
//     const { token } = response.data
//     localStorage.setItem('jwt', token);
//   } catch {
//     dispatch({ type: 'CREATE_USER_ERROR' });
//   }
// };

export const logIn = (userInfo) => {
  return (dispatch) => {
    axios.get(`${HOST_URL}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: userInfo.username,
          password: userInfo.password
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "INVALID: username or password") {
          Swal.fire({
            title: 'Unable to Login!',
            text: `${data.message}`,
            icon: 'error',
            confirmButtonText: 'Back'
          })
        } else {
          dispatch({ type: 'CURRENT_USER', payload: data.user })
          localStorage.setItem("jwt", data.jwt)
        }
      })
  }
}

export const signOut = () => {
  localStorage.removeItem('jwt')
  return {type: "SIGN_OUT", payload: []}
}

