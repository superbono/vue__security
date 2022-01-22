// 회원가입, 로그인에 관한 API 정의
import { instance } from './index';

// 회원가입 api
function registerUser(userData) {
  return instance.post('register', userData);
}

// 로그인 api
function loginUser(userData) {
  return instance.post('login', userData);
}

export {
  registerUser,
  loginUser,
}