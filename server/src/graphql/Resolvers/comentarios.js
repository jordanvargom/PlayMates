import Comentario from '../../models/Comentarios.js'
import Publicacion from '../../models/Publicacion.js'
import Usuario from '../../models/Usuario.js'
export const crearComentario = async (_, args) => {
  const { contenido, usuario, publicacion, media } = args

  if (!contenido || !usuario || !publicacion || !media) return 'faltan enviar propiedades'
  const comentario = new Comentario({ contenido, usuario, publicacion, media })

  await Usuario.findByIdAndUpdate(usuario, {
    $push: { comentarios: comentario._id },
  }).catch((err) => err.message)

  await Publicacion.findByIdAndUpdate(publicacion, {
    $push: { comentarios: comentario._id },
  }).catch((err) => err.message)
  await comentario.save()

  return comentario
}
export const todosLosComentarios = () => Comentario.find().catch((err) => err.message)
export const eliminarComentario = (_, args) =>
  Comentario.findByIdAndUpdate(args._id, { estado: false }, { new: true }).catch(
    (err) => err.message,
  )
