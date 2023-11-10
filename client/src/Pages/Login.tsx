import {
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Login() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  })
  const handleChange = ({ target }: any) => {
    const { name, value } = target

    setUsuario({ ...usuario, [name]: value })
  }

  return (
    <Center my={{ base: '5', md: '20' }} px={{ base: '4', md: '60' }} py={20}>
      <FormControl width={[300, 400]}>
        <Text fontSize="30px" fontWeight="bold" mb="10px" textAlign="center">
          Iniciar Sesión
        </Text>
        <Box my="20px">
          <FormLabel>Dirección de correo electrónico</FormLabel>
          <Input name="email" type="email" onChange={handleChange} />
          <FormHelperText> Email</FormHelperText>
        </Box>
        <Box my="20px">
          <FormLabel>Escriba su contraseña</FormLabel>
          <Input name="password" type="password" onChange={handleChange} />
          <FormHelperText>contraseña</FormHelperText>
        </Box>
        <Stack align="center" direction="row" spacing={2} w="100%">
          <Button colorScheme="purple" variant="solid" w="50%">
            Ingresar
          </Button>
          <Button
            colorScheme="purple"
            variant="outline"
            w="50%"
            onClick={() => {
              navigate('/register')
            }}
          >
            Registrarse
          </Button>
        </Stack>
      </FormControl>
    </Center>
  )
}

export default Login
