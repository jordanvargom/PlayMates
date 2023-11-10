import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primario: '#000000',
      secundario: '#F6F1F1',
      terciario: '#146C94',
      cuarto: '#19A7CE',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('brand.primario', 'brand.secundario')(props),
        color: mode('brand.secundario', 'brand.primario')(props),
        height: '100vh',
        margin: '0',
        padding: '0',
        fontFamily: 'sans-serif',
      },
      '#root': {
        height: '100%',
      },
    }),
  },
})

export default theme
