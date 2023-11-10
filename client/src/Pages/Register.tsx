import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormHelperText,
  Stack,
  Button,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { userStore } from '../Store/userStore'
import useNuevoUsuario from '../Utils/Hooks/useNuevoUsuario'

function Register() {
  const { register } = userStore()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  // { loading, data, error }
  const [registrarse] = useNuevoUsuario()
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    imagen: '',
    fechaNacimiento: '',
  })
  const handleClick = () => {
    setShow(!show)
  }
  const handleChange = ({ target }: any) => {
    const { name, value } = target

    setUsuario({ ...usuario, [name]: value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    registrarse({
      variables: {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
        imagen: '#',
        fechaNacimiento: usuario.fechaNacimiento,
      },
    })
      .then((res) => {
        register(res.data.nuevoUsuario)
      })
      .then(() => {
        navigate('/playMates')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <Center my={{ base: '5', md: '20' }} px={{ base: '4', md: '60' }}>
        <form onSubmit={handleSubmit}>
          <FormControl width={[300, 400]}>
            <Text fontSize="30px" fontWeight="bold" mb="10px" textAlign="center">
              Registrarse
            </Text>
            <Box my="20px">
              <FormLabel>Dirección de correo electrónico</FormLabel>
              <Input name="email" type="email" onChange={handleChange} />
              <FormHelperText> Email</FormHelperText>
            </Box>
            <Box my="20px">
              <FormLabel>Nombre de Usuario</FormLabel>
              <Input name="nombre" type="text" onChange={handleChange} />
              <FormHelperText>Ingresa un nombre de Usuario</FormHelperText>
            </Box>
            <Box my="20px">
              <FormLabel>Escriba su contraseña</FormLabel>
              <InputGroup size="md">
                <Input
                  name="password"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    colorScheme="purple"
                    h="1.75rem"
                    size="sm"
                    variant="outline"
                    onClick={handleClick}
                  >
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>contraseña</FormHelperText>
            </Box>
            <FormLabel>Fecha de nacimiento </FormLabel>
            <Box my="20px">
              <Input name="fechaNacimiento" type="date" onChange={handleChange} />
              <FormHelperText>ingrese su fecha de nacimiento</FormHelperText>
            </Box>
            <Stack align="center" direction="row" spacing={2} w="100%">
              <Button colorScheme="purple" type="submit" variant="solid" w="50%">
                Registrarse
              </Button>
              <Button
                colorScheme="purple"
                variant="outline"
                w="50%"
                onClick={() => {
                  navigate('/login')
                }}
              >
                Ingresar
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Center>
    </>
  )
}

export default Register
