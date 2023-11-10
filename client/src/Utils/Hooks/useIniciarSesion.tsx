import { useQuery } from '@apollo/client'

import { INICIAR_SESSION } from '../../Graphql/Mutations/Usuarios/iniciarSesion'

const useIniciarSession = () => useQuery(INICIAR_SESSION)

export default useIniciarSession
