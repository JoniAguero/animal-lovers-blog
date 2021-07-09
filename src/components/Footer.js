import { Box } from "@chakra-ui/react"
import React from 'react'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Box bg="teal" w="100%" p={4} color="white" className="footer">
        Test performed with ChakraUI and react-table 💚 { year }
    </Box>
  )
}

export default Footer;