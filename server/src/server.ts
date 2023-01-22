import Fastfy from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastfy()

/* 
* Métodos HTTP: Get(busca), Post(cria), Put(atualiza por completo), Patch(atualiza algo específico), Delete(deleta algum recurso) 
*/ 

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(() => {
  console.log('HTTP Server Running...')
})