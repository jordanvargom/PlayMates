import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
const Layout = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      gap={16}
      h="100%"
      justifyContent="space-between"
      maxWidth="container"
      paddingX={0}
    >
      <Outlet />
    </Container>
  )
}

export default Layout
