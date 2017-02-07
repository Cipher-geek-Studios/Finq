export function loginUser(userIn, passIn) {
  return {
    type: "login",
    user: userIn,
    pass: passIn,
  }
}
export function logoutUser() {
  return {
    type: "logout",
  }
}
export function updateAvatar(imgLink) {
  return {
    type: "chgAvatar",
    avatar: imgLink,
  }
}
