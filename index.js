const express = require('express') // express 모듈을 가져온다.
const app = express() // 새로운 express 앱을 만든다.
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./model/User");

// application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해준다.
app.use(bodyParser.urlencoded({extended: true}));
// application/json 을 분석해서 가져올 수 있게 해준다.
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
 // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('유서누'))  // / 디렉토리에 오면 Hello World!를 출력한다.

app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    }) // 200은 성공했다는 표시
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // 5000번 포트에서 앱을 실행한다.