import { Request, Response} from 'express'
import createUse from './services/CreateUser'

export function HelloWord(request:Request,response: Response){

  const user = createUse({
    email:'Higor@hmtech.com.br',
    passoword: '123456',
    techs:[ 
      'Node.JS', 
      'ReactJS', 
      'React Native',
      { title:'JavaScript', experience: 100}
    ]
  })

  return response.json({menssage: 'Hello Word'})
}