import React, { useState, Suspense, lazy } from "react";
import ConfirmacionLoading from "components/Confirmacion/ConfirmacionLoading";
import {
  ConfirmacionGridLayout,
  ConfirmacionCard,
  ConfirmacionBtns,
  CardContainer,
  ContentContainer,
  PText,
  ALink,
} from "./styles";

const ConfirmacionSuccess = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../../components/Confirmacion/ConfirmacionSuccess")), 1200);
  });
});

const Confirmacion = () => {

  return (
    <ConfirmacionGridLayout>
      <ConfirmacionCard>
        <Suspense fallback={<ConfirmacionLoading />}>
          <ConfirmacionSuccess />
        </Suspense>
      </ConfirmacionCard>
      <ConfirmacionBtns>
        <ContentContainer flexJustify="flex-end" gap="1rem" flexAlignItems="center">
          <ALink to="/">
            <PText weight="600" color="#005758" cursor="pointer">
              Volver al Inicio
            </PText>
          </ALink>
          <ContentContainer flexAlignItems="center" flexJustify="center" cursor="pointer">
            <CardContainer backgroundColor="#005758">
              <PText color="#fff" margin="1rem">
                VER COMPROBANTE
              </PText>
            </CardContainer>
          </ContentContainer>
        </ContentContainer>
      </ConfirmacionBtns>
    </ConfirmacionGridLayout>
  );
};

export default Confirmacion;
