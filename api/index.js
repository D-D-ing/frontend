import axios from 'axios'

export default {
  auth: {
    my_user: () => axios.get('my_user'),
    login: data => axios.post('sign_in_with_password', data)
  }
}
