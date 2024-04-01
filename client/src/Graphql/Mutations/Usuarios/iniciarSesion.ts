import { gql } from '@apollo/client'

export const INICIAR_SESSION = gql`
  query IniciarSesion($email: String, $password: String) {
    iniciarSesion(email: $email, password: $password) {
      email
      id
      nombre
      fechaNacimiento
    }
  }
`
