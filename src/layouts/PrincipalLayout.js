import React from "react";
import { Container } from "@chakra-ui/react"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrincipalLayout(props) {

  const { children } = props;

  return (
  <>
      <Header />
      <Container  maxW="container.xl">
          {children}
      </Container>
      <Footer />
    </>
  );
}