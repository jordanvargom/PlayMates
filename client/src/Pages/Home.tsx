import { Text, Center, Stack, Image, useColorModeValue, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Home() {
  const oscuro = useColorModeValue('brand.primario', 'brand.secundario')
  const claro = useColorModeValue('brand.secundario', 'brand.primario')

  return (
    <Center my={20} px={{ base: '4', md: '60' }} py={20}>
      <Stack
        alignItems={'center'}
        color={claro}
        direction={{ base: 'column', md: 'row' }}
        ml={{ base: 0, md: 7 }}
      >
        <Stack
          alignItems={{ base: 'flex-start', md: 'center' }}
          order={{ base: 2, md: 1 }}
          spacing={'4'}
          w={{ base: '100%', md: '50%' }}
        >
          <Text fontSize="4xl" fontWeight={'bold'}>
            Play Mates
          </Text>
          <Text fontSize="xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptatum recusandae
            aperiam natus, libero quaerat? Culpa accusamus aliquid ad, quasi iste unde iure
            asperiores vel qui incidunt nobis vitae aperiam!
          </Text>
          <Stack w={'100%'}>
            <NavLink to={'/login'}>
              <Stack
                _active={{
                  transform: 'scale(0.95)',
                }}
                _hover={{
                  bg: oscuro,
                  color: claro,
                  border: '1px',
                  borderColor: claro,
                }}
                alignItems={'center'}
                bg={claro}
                color={oscuro}
                cursor={'pointer'}
                justifyItems={'center'}
                px={4}
                py={1}
                rounded={'md'}
                transition={'all 0.2s ease-in-out'}
                w={{ base: '100%', md: '50%' }}
              >
                <Text fontSize="md" fontWeight={'bold'}>
                  Comenzar ahora
                </Text>
              </Stack>
            </NavLink>
            <Stack direction="row" spacing={4}>
              <Button colorScheme="purple" rightIcon={<AiOutlineArrowRight />} variant="ghost">
                Call us
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          alignItems={'center'}
          order={{ base: 1, md: 2 }}
          overflow={'hidden'}
          rounded={'md'}
          w={{ base: '100%', md: '50%' }}
        >
          <Image
            alt="Segun Adebayo"
            boxSize="400px"
            justifySelf={'center'}
            objectFit="cover"
            rounded={'xl'}
            src="Logo.jpg"
          />
        </Stack>
      </Stack>
    </Center>
  )
}

export default Home
