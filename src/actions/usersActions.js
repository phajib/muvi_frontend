// import axios from 'axios';
import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

//-----------USERS--------------------
export const signUp = (userInfo) => {
  console.log("sign up", userInfo)
  return (dispatch) => {
    fetch(`${HOST_URL}/users`, {
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
          profile_picture: userInfo.profile_picture,
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'CREATE_USER', payload: data })
      localStorage.setItem("jwt", data.jwt)
    })
    .catch(err => console.log(err));
  // }
  }
}

export const logIn = (userInfo) => {
  // debugger
  return (dispatch) => {
    fetch(`${HOST_URL}/login`, {
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
      console.log(data)
      if (data.message === "Invalid username or password") {
        Swal.fire({
          title: 'Login ERROR!',
          text: `${data.message}`,
          icon: 'error',
          confirmButtonText: 'Back'
        })
      } else {
        dispatch({ type: 'CURRENT_USER', payload: data.user })
        // dispatch(setCurrentUser(data.users))
        localStorage.setItem("jwt", data.jwt)
      }
    })
    .catch(err => console.log(err))
  }
}

// export const setCurrentUser = (user) => {
//   return {type: "CURRENT_USER", payload: user}
// }

export const signOut = () => {
  localStorage.removeItem('jwt')
  return {type: "SIGN_OUT", payload: []}
}

export const checkUser = () => {
  if (localStorage.getItem('jwt')){
    return (dispatch) => {
      fetch(`${HOST_URL}/profile`, {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(res => res.json())
      .then(user => {
        dispatch({type: 'CURRENT_USER', payload: user.user}) //added user
      })
    }
  }
}

// export const fetchUserMovies = (user) => dispatch => {
//   fetch(`${HOST_URL}/usermovies`, {
//     headers: {
//       "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
//       "User": user,
//     }
//   })
//   .then(resp => resp.json())
//   .then(userMovieList => {
//     dispatch({ type: 'USER_MOVIES', payload: userMovieList })
//     // localStorage.setItem("jwt", userMovieList.jwt)
//   })
//   .catch(err => console.log(err))
// }

export const userUpdate = (updatedUser) => {
  return {type: "USER_UPDATED", payload: updatedUser}
}

export const userData = () => {
  return (dispatch) => {
      fetch(`${HOST_URL}/user/all_info`,{
          headers: {
              "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
          }
      })
      .then(resp => resp.json())
      .then(data => {
          dispatch({type: 'USER_MOVIES', payload: data.savedMovies})
      })
      .catch(err => console.log(err))
  }
}
