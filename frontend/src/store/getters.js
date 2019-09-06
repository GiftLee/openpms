const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  group: state => state.user.group,
  userinfo: state => state.user.userinfo
}
export default getters
