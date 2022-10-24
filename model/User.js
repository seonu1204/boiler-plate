// 몽구스 모듈 가져오기
const mongoose = require('mongoose');

// 스키마 생성
const userSchema = mongoose.Schema({
  //필드 작성
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, //문자간 스페이스를 없애주는 역할을 하는게 trim
    unique: 1 // 똑같은 이메일은 쓰지 못하게, 1은 아마도 true
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: { //롤을 주는 이유는 어떤 유저가 관리자가 될 수도 있고 일반유저가 될 수도 있다. 관리자는 일반유저를 관리할 수 있다. 그래서 롤을 부여한다.
    type: Number,
    default: 0 // 만약 임의로 롤을 지정하지 않으면, 기본롤값을 0을 부여한다. 만약 유저가 0이면 관리자는 1 이런식으로 지정할 수 있다.
  },
  image: String, //꼭 Object 형태가 아니라 이렇게 바로 적을 수도 있다.
  token: { // 토큰을 이용해 나중에 유효성을 관리할 수 있다.
    type: String
  },
  tokenExp: { //token Expiration : 토큰의 유효기간
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }