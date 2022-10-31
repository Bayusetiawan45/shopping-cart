export const userLogin = () => {
  const isLogin = localStorage.getItem('user_login')
  if (isLogin === 'isLoggin') {
    return true
  } else return false
}
