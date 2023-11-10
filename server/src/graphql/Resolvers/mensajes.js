import Grupo from '../../models/Grupo.js'
import Mensajes from '../../models/Mensajes.js'
import Usuario from '../../models/Usuario.js'

export const crearMensaje = async (_, args) => {
  try {
    const { contenido, media, usuario, destinatario } = args
    const mensaje = new Mensajes({
      contenido,
      media: media || null,
      Usuario: usuario,
      destinatario,
    })

    await mensaje.save()
    await Usuario.findByIdAndUpdate(usuario, {
      $push: { mensajes: mensaje._id },
    })
    await Grupo.findByIdAndUpdate(destinatario, {
      $push: { Mensajes: mensaje._id },
    })

    return mensaje
  } catch (error) {
    return error.message
  }
}
export const eliminarMensaje = (_, args) =>
  Mensajes.findByIdAndUpdate(args.id, { estado: false }, { new: true }).catch((err) => err.message)
