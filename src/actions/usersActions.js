// import axios from 'axios';
import Swal from 'sweetalert2'


let HOST_URL = "http://localhost:3001/api/v1"

// const CREATE_USER = 'CREATE_USER'
// const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
// const CURRENT_USER = 'CURRENT_USER'

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
      dispatch({ type: 'CREATE_USER', payload: data.user })
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
          title: 'Unable to Login!',
          text: `${data.message}`,
          icon: 'error',
          confirmButtonText: 'Back'
        })
      } else {
        dispatch({ type: 'CURRENT_USER', payload: data.user })
        // dispatch(setCurrentUser(data.user))
        localStorage.setItem("jwt", data.jwt)
      }
    })
    .catch(err => console.log(err))
  }
}

// export const setCurrentUser = (users) => {
//   return {type: "CURRENT_USER", payload: users}
// }

export const signOut = () => {
  localStorage.removeItem('jwt')
  return {type: "SIGN_OUT", payload: []}
}

export const checkUser = () => {
  // return (dispatch) => {
  if (localStorage.getItem('jwt')){
    return (dispatch) => {
      fetch(`${HOST_URL}/profile`, {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(res => res.json())
      .then(user => {
        dispatch({type: 'CURRENT_USER', payload: user})
      })
    }
  }
}

// export const updateUser = (updatedUser) => {
//   return {type: "USER_UPDATED", payload: updatedUser}
// }

export const updateUser = (updatedUser) => {
  return (dispatch) => {
  fetch('http://localhost:3001/api/v1/user/edit', {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      user: {
        username: updatedUser.username,
        password: updatedUser.password,
        about: updatedUser.about,
        picture_profile: updatedUser.profile_picture
      }
    })
  })
  .then(resp => resp.json())
  .then(updatedProfile => {
    updateUser(updatedProfile)
    Swal.fire({
      title: 'Profile Updated',
      text: `Your profile has been updated!`,
      icon: 'success',
      confirmButtonText: 'Go to Profile',
    }).then(function () {
      window.history.back();
    })
  })
  .then(data => {
    dispatch({type: 'USER_UPDATED', payload: data.updatedUser})
    localStorage.setItem("jwt", data.jwt)
  })
  .catch(err => console.log(err))
 }
}

export const fetchUserPage = () => {
  fetch(`${HOST_URL}/user/${this.profileId}/info`)
  .then(resp => resp.json())
  .then( data => {
    this.setState({
      user: data.user_info,
      userMovies: data.userMovies,
      movieComments: data.comments
    })
  })
}

// export const userMovies = (user) => dispatch => {
//   axios.post(`${HOST_URL}/usermovies`)
//     .then(response =>
//       dispatch({ type: 'USER_MOVIES',payload: response.data })
//     )
//     .catch(err => console.log(err));
// };

export const userMovies = (user) => {
  return (dispatch) => {
    fetch(`${HOST_URL}/usermovies`)
    .then(resp => resp.json())
    .then(response => {
      dispatch({ type: 'USER_MOVIES', payload: response.data })
    })
    .catch(err => console.log(err))
  }
}
