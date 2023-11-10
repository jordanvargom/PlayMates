export interface userStoreType {
  userLogin: any
  // | {
  //   id: string
  //   email: string
  //   fechaNacimiento: string
  //   nombre: ''
  //   __typename: ''
  // }
  // | undefined
  register: (user: any) => void
}
// email
// :
// "hola2@gmail.com"
// fechaNacimiento
// :
// "1689379200000"
// id
// :
// "64a6207c60e957a6a47d99fc"
// nombre
// :
// "holaaa"
// __typename
// :
// "Usuario"
