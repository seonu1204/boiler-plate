const express = require('express') // express 모듈을 가져온다.
const app = express() // 새로운 express 앱을 만든다.
const port = 5000

const mysql = require('mysql')
app.get('/', (req, res)=> res.send('Hello World!'))  // / 디렉토리에 오면 Hello World!를 출력한다.

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // 5000번 포트에서 앱을 실행한다.