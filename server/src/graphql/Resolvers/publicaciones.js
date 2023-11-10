import Publicacion from '../../models/Publicacion.js'
import Usuario from '../../models/Usuario.js'
export const todasLasPublicaciones = async () =>
  await Publicacion.find().catch((err) => err.message)

export const eliminarPublicacion = (_, args) =>
  Publicacion.findByIdAndUpdate(args._id, { estado: false }, { new: true }).catch(
    (err) => err.message,
  )

export const crearPublicacion = async (_, args) => {
  const { contenido, media, usuario } = args

  try {
    const publicacion = new Publicacion({ contenido, media, usuario })

    await Usuario.findByIdAndUpdate(usuario, {
      $push: { publicaciones: usuario },
    }).catch((err) => err.message)

    await publicacion.save()

    return publicacion
  } catch (err) {
    return err.message
  }
}
