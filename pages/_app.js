import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./components/layouts/main"
import { AnimatePresence, motion } from 'framer-motion'
import Fonts from './components/fonts'

{/* <AnimatePresence initial={true} mode={"wait"} key={router.pathname}> */}
function MyApp({ Component, pageProps, router }) {
  return (
  <ChakraProvider>
    <Fonts />
    <Layout router={router}>
          <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}
{/* </AnimatePresence> */}

export default MyApp
