import Fastify from 'fastify'

const app = Fastify()

app.get ( '/', ()=>{
  return 'Hello Panda Rodriguez'
})

app.listen ({
  port: 3333
})