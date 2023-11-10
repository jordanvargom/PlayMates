import { gql } from '@apollo/client'

export const NUEVO_USUARIO = gql`
  mutation Mutation(
    $nombre: String!
    $email: String!
    $password: String!
    $imagen: String!
    $fechaNacimiento: String!
  ) {
    nuevoUsuario(
      nombre: $nombre
      email: $email
      password: $password
      imagen: $imagen
      fechaNacimiento: $fechaNacimiento
    ) {
      id
      nombre
      email
      fechaNacimiento
    }
  }
`
