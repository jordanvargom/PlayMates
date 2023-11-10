import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'

import Routes from './Routes/Routes'
import theme from './Theme/theme'
import { client } from './Graphql/Client/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <RouterProvider router={Routes} />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
