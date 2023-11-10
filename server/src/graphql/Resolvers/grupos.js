import Grupo from '../../models/Grupo.js'
import Usuario from '../../models/Usuario.js'
export const todosLosGrupos = async () => await Grupo.find().catch((err) => err.message)
export const crearGrupo = async (_, args) => {
  try {
    const { nombre, imagen, descripcion, juego, administrador } = args

    if (!nombre || !imagen || !descripcion || !juego || !administrador) {
      return 'faltan enviar propiedades'
    }

    const grupo = new Grupo({ nombre, imagen, descripcion, juego, administrador })

    await Usuario.findByIdAndUpdate(administrador, {
      $push: { grupos: grupo._id },
    })
    await grupo.save()

    return grupo
  } catch (error) {
    return error.message
  }
}
export const usuariosDelGrupo = async (parent) => {
  const promises = parent.usuarios.map((e) => Usuario.findById(e))

  return Promise.all(promises)
    .then((res) => res)
    .catch((err) => err.message)
}
export const agregarUsuarioAlGrupo = async (_, args) => {
  const { idUsuario, idGrupo } = args

  try {
    await Usuario.findByIdAndUpdate(idUsuario, {
      $push: { grupos: idGrupo },
    })
    await Grupo.findByIdAndUpdate(idGrupo, {
      $push: { usuarios: idUsuario },
    })

    return 'usuario agregado al grupo'
  } catch (error) {
    return error.message
  }
}
export const eliminarGrupo = (_, args) =>
  Grupo.findByIdAndUpdate(args.id, { estado: false }, { new: true }).catch((error) => error.message)
