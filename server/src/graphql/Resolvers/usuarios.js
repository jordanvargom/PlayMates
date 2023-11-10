import Grupo from '../../models/Grupo.js'
import Mensajes from '../../models/Mensajes.js'
import Usuario from '../../models/Usuario.js'

export const usuarios = async () => {
  const usuarios = await Usuario.find()

  return usuarios
}
export const iniciarSesion = async (_, args) => {
  const { email, password } = args

  const usuario = await Usuario.findOne({ email })

  if (!usuario) throw new Error('No hay un usuario registrado con ese email')

  if (usuario.password !== password) throw new Error('La contraseña es incorrecta')

  return usuario
}
export const todosUsuarios = async () => {
  const usuarios = await Usuario.find()

  return usuarios.length
}

export const nuevoUsuario = async (_, args) => {
  const { nombre, email, password, imagen, fechaNacimiento } = args
  const verificación = await Usuario.findOne({ email })

  if (verificación) throw new Error('El usuario ya existe')
  const usuarioCreado = new Usuario({
    nombre,
    email,
    password,
    imagen,
    fechaNacimiento,
  })

  await usuarioCreado.save()

  return usuarioCreado
}

export const eliminarUsuario = async (_, args) =>
  Usuario.findByIdAndUpdate(args.id, { estado: false }, { new: true })
export const detallesUsuario = async (_, args) => {
  const { id } = args
  const usuario = await Usuario.findById(id)

  return usuario
}

export const editarUsuario = async (_, args) => {
  const { id } = args

  try {
    const news = await Usuario.findByIdAndUpdate(id, { $set: args }, { new: true })

    return news
  } catch (err) {
    return err.message
  }
}
export const gruposDelUsuario = async (parent) => {
  const promises = parent.grupos.map((e) => Grupo.findById(e))

  return Promise.all(promises)
    .then((res) => res)
    .catch((err) => err.message)
}
export const mensajesDelGrupo = (parent) => {
  const promises = parent.mensajes.map((e) => Mensajes.findById(e))

  return Promise.all(promises)
    .then((res) => res)
    .catch((err) => err.message)
}
