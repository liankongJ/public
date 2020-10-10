import { SourceMirror } from '@/assets/config/axiosApi'

export default {
  /** get */
  // login: params =>
  //   SourceMirror.get('user/user', {
  //     params: {
  //       ...params
  //     }
  //   })
  login: params =>
    SourceMirror.post('/login', {
      ...params
    })
}