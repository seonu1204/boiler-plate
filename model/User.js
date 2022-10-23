const mysql = require('mysql');

const userSchema = mysql.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // 혹시 모를 공백 제거
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: { // 유저가 관리자가 될 수도 있고 일반 유저가 될 수도 있어서(관리자가 일반 유저를 관리해야되니까)
    type: Number,
    default: 0 // role을 지정하지 않았을 때, 0으로 준다
  },
  image: String,
  token: { // 유효성
    type: String
  },
  tokenExp: { // 유효기간
    type: Number
  }
})

const User = mysql.model('User', userSchema)

module.exports = { User } // 이 모델을 다른 파일에서도 쓰기위해