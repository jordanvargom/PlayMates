import { useMutation } from '@apollo/client'

import { NUEVO_USUARIO } from '../../Graphql/Mutations/Usuarios/crearUsuarios'

const useNuevoUsuario = () => useMutation(NUEVO_USUARIO)

export default useNuevoUsuario
