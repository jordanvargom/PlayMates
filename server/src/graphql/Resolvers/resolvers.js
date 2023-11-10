import Usuario from '../../models/Usuario.js'
import Publicacion from '../../models/Publicacion.js'
import Comentario from '../../models/Comentarios.js'
import {
  crearPublicacion,
  todasLasPublicaciones,
  eliminarPublicacion,
} from '../Resolvers/publicaciones.js'

import { crearMensaje, eliminarMensaje } from './mensajes.js'
import {
  todosLosGrupos,
  usuariosDelGrupo,
  crearGrupo,
  agregarUsuarioAlGrupo,
  eliminarGrupo,
} from './grupos.js'
import { crearComentario, todosLosComentarios, eliminarComentario } from './comentarios.js'
import {
  usuarios,
  todosUsuarios,
  nuevoUsuario,
  eliminarUsuario,
  detallesUsuario,
  editarUsuario,
  gruposDelUsuario,
  mensajesDelGrupo,
  iniciarSesion,
} from './usuarios.js'
export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    usuarios,
    todosUsuarios,
    detallesUsuario,
    todasLasPublicaciones,
    todosLosComentarios,
    todosLosGrupos,
    iniciarSesion,
  },
  Mutation: {
    nuevoUsuario,
    eliminarUsuario,
    editarUsuario,
    crearPublicacion,
    eliminarPublicacion,
    crearComentario,
    eliminarComentario,
    crearGrupo,
    agregarUsuarioAlGrupo,
    eliminarGrupo,
    crearMensaje,
    eliminarMensaje,
  },
  Publicacion: {
    usuario: async (parent) => await Usuario.findById(parent.usuario).catch((err) => err.message),
    comentarios: async (parent) =>
      await Comentario.find({ publicacion: parent._id }).catch((err) => err.message),
  },
  Usuario: {
    publicaciones: async (parent) =>
      await Publicacion.find({ usuario: parent._id }).catch((err) => err.message),
    comentarios: async (parent) =>
      await Comentario.find({ usuario: parent._id }).catch((err) => err.message),
    grupos: gruposDelUsuario,
    mensajes: mensajesDelGrupo,
  },
  Comentario: {
    usuario: async (parent) => await Usuario.findById(parent.usuario).catch((err) => err.message),
    publicacion: async (parent) =>
      await Publicacion.findById(parent.publicacion).catch((err) => err.message),
  },
  Grupo: {
    administrador: async (parent) =>
      await Usuario.findById(parent.administrador).catch((err) => err.message),
    usuarios: usuariosDelGrupo,
    Mensajes: mensajesDelGrupo,
  },
}
