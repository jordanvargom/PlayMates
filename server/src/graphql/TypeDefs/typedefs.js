import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    hello: String
    usuarios: [Usuario]
    todosUsuarios: Int
    detallesUsuario(id: String): Usuario
    todasLasPublicaciones: [Publicacion]
    todosLosComentarios: [Comentario]
    todosLosGrupos: [Grupo]
    iniciarSesion(email: String, password: String): Usuario
  }
  type Mutation {
    nuevoUsuario(
      nombre: String!
      email: String!
      password: String!
      imagen: String!
      fechaNacimiento: String!
    ): Usuario
    eliminarUsuario(id: String): Usuario
    editarUsuario(
      id: String!
      nombre: String!
      email: String!
      password: String!
      imagen: String!
      fechaNacimiento: String!
    ): Usuario
    crearPublicacion(contenido: String!, media: String, usuario: String!): Publicacion
    eliminarPublicacion(_id: ID!): Publicacion
    crearComentario(contenido: String!, usuario: ID!, publicacion: ID!, media: String): Comentario
    eliminarComentario(_id: String!): Comentario
    crearGrupo(
      nombre: String!
      imagen: String!
      descripcion: String!
      juego: String!
      administrador: String!
    ): Grupo
    agregarUsuarioAlGrupo(idUsuario: ID!, idGrupo: ID!): String
    eliminarGrupo(id: ID!): Grupo
    crearMensaje(contenido: String!, media: String, usuario: ID!, destinatario: ID!): Mensajes
    eliminarMensaje(id: ID!): Mensajes
  }
  type Usuario {
    id: String!
    nombre: String!
    email: String!
    password: String!
    imagen: String!
    fechaNacimiento: String!
    publicaciones: [Publicacion]
    comentarios: [Comentario]
    grupos: [Grupo]
    estado: Boolean
    mensajes: [Mensajes]
  }
  type Publicacion {
    id: String!
    contenido: String!
    media: String
    usuario: Usuario!
    comentarios: [Comentario]
    estado: Boolean
  }
  type Comentario {
    id: ID!
    contenido: String!
    usuario: Usuario!
    media: String
    estado: Boolean
    publicacion: Publicacion!
  }
  type Grupo {
    id: ID
    nombre: String
    imagen: String
    descripcion: String
    juego: String
    administrador: Usuario
    usuarios: [Usuario]
    Valoraciones: [Usuario]
    estado: Boolean
    Mensajes: [Mensajes]
  }
  type Mensajes {
    id: ID
    contenido: String
    media: String
    Usuario: Usuario
    estado: Boolean
    destinatario: Grupo
  }
`
