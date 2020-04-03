// import axios from 'axios';
import Swal from 'sweetalert2'


let HOST_URL = "http://localhost:3001/api/v1"

// const CREATE_USER = 'CREATE_USER'
// const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
// const CURRENT_USER = 'CURRENT_USER'

//-----------USERS--------------------
export const signUp = (userInfo) => {//dispatch => {
  console.log("sign up", userInfo)
  return (dispatch) => {
    // axios.post(`${HOST_URL}/users`, {userInfo})
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
      // console.log(data)
      // dispatch(setCurrentUser(data.user))
      // dispatch({ type: 'CURRENT_USER', payload: data.user })
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
    // axios.post(`${HOST_URL}/login`, {userInfo})
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
        // dispatch(setCurrentUser(data.user))
        dispatch({ type: 'CURRENT_USER', payload: data.user })
        localStorage.setItem("jwt", data.jwt)
      }
    })
    .catch(err => console.log(err))
  }
}

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

export const fetchUserPage = () => {
  fetch(`${HOST_URL}/user/${this.props.profileId}/info`)
  .then(resp => resp.json())
  .then( data => {
    this.setState({
      user: data.user_info,
      userMovies: data.userMovies,
      comments: data.comments
    })
  })
}
