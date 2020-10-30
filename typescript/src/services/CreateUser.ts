
interface ITechObject {
  title: string,
  experience: number
}

interface ICreateUserData {
  name?: string
  email: string
  passoword: string
  techs: Array<string | ITechObject >
}
export default function createUse({name, email , passoword}:ICreateUserData){
  const user ={
    name,
    email,
    passoword
  }

  return user
}