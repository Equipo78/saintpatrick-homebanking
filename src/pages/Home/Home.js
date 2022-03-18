import React, { useState } from "react";
import {
  CardContainer,
  TitleH3,
  CardWrapper,
  ContentContainer,
  CardTopDecor,
  PText,
  IconBg,
  HomeGridLayout,
  Ul,
  Li,
  Icon,
  HomeInfo,
  HomeSaldo,
  HomeMovimientos,
  HomeAcciones,
  ALink
} from "./styles";
import TopDecor2 from "../../assets/background-main/TopDecor2.svg";
import Copy from "../../assets/icons_svg/Copy.svg";
import Visible from "../../assets/icons_svg/Visible.svg";
import Oculto from "../../assets/icons_svg/Oculto.svg";
import DownArrow from "../../assets/icons_svg/DownArrow.svg";
import Transferencia from "../../assets/icons_svg/Icon/Transferencia.svg";
import TransferenciaWhite from "../../assets/icons_svg/Icon/TransferenciaWhite.svg";
import Tarjetas from "../../assets/icons_svg/Icon/Tarjetas.svg";
import Comprobantes from "../../assets/icons_svg/Icon/Comprobantes.svg";

const Home = () => {

  const [visible, setVisible] = useState(false);
  const setVisibility = (e) => {
	e.preventDefault();
	setVisible(visible => !visible);
  }

  const handleCopyText = (entryText) => {
	navigator.clipboard.writeText(entryText);
	alert("El CBU fue copiado");
  };

  return (
	<HomeGridLayout>
	  <HomeInfo>
		<TitleH3>Tu cuenta</TitleH3>
		<ContentContainer width="100%" flexAlignItems="center" gap="0 1.5rem">
		  <PText margin="0.5rem 0">CBU: 00454545557879</PText>
		  <Icon src={Copy} cursor="pointer" onClick={() => handleCopyText("00454545557879")}/>
		</ContentContainer>
	  </HomeInfo>
	  <HomeSaldo>
		<CardContainer>
		  <CardTopDecor src={TopDecor2} />
		  <CardWrapper margin="2rem 3rem 0">
			<TitleH3>Saldo</TitleH3>
			<ContentContainer
			  width="100%"
			  flexDirection="row"
			  flexAlignItems="center"
			  gap="2rem"
			  margin="1rem 0"
			>
			  <PText size="32px">$ { visible ? "45.000" : "*****" }</PText>
			  <Icon src={visible ? Oculto : Visible} cursor="pointer" onClick={setVisibility}/>
			</ContentContainer>
		  </CardWrapper>
		</CardContainer>
	  </HomeSaldo>
	  <HomeAcciones>
		<CardContainer>
		  <Ul flexDirection="column" gap="2rem" padding="3rem">
			<ContentContainer
			  flexJustify="space-around"
			  flexAlignItems="center"
			  gap="0 3rem"
			>
			  <Li cursor="pointer">
				<ALink to="/transacciones">
				  <ContentContainer
					flexDirection="column"
					flexAlignItems="center"
					gap="0 3rem"
				  >
					<IconBg backgroundColor="#F7C548">
					  <Icon src={Transferencia} />
					</IconBg>
					<PText>Hacer Transferencia</PText>
				  </ContentContainer>
				</ALink>
			  </Li>
			  <Li cursor="pointer">
				<ALink to="/comprobantes">
				  <ContentContainer
					flexDirection="column"
					flexAlignItems="center"
					gap="0 3rem"
				  >
					<IconBg backgroundColor="#F7C548">
					  <Icon src={Comprobantes} />
					</IconBg>
					<PText>Ver Comprobantes</PText>
				  </ContentContainer>
				</ALink>
			  </Li>
			  <Li cursor="pointer">
			  <ALink to="/tarjetas">
				  <ContentContainer
					flexDirection="column"
					flexAlignItems="center"
					gap="0 3rem"
				  >
					<IconBg backgroundColor="#F7C548">
					  <Icon src={Tarjetas} />
					</IconBg>
					<PText>Agregar Tarjeta</PText>
				  </ContentContainer>
				</ALink>
			  </Li>
			</ContentContainer>
			<ContentContainer
			  flexJustify="space-around"
			  flexAlignItems="center"
			  gap="0 3rem"
			>
			  <Li cursor="pointer">
			  	<ALink to="/contactos">
					<ContentContainer
					flexDirection="column"
					flexAlignItems="center"
					gap="0 3rem"
					>
					<IconBg backgroundColor="#F7C548">
						<Icon src={Transferencia} />
					</IconBg>
					<PText>Agregar contacto</PText>
					</ContentContainer>
				</ALink>
			  </Li>
			  <Li cursor="pointer">
				<ALink to="/perfil">
					<ContentContainer
					flexDirection="column"
					flexAlignItems="center"
					gap="0 3rem"
					>
					<IconBg backgroundColor="#F7C548">
						<Icon src={Comprobantes} />
					</IconBg>
					<PText>Modificar Perfil</PText>
					</ContentContainer>
				</ALink>
			  </Li>
			  <Li cursor="pointer">
				<ALink to="/ayuda">
					<ContentContainer
					flexDirection="column"
					flexAlignItems="center"
					gap="0 3rem"
					>
					<IconBg backgroundColor="#F7C548">
						<Icon src={Tarjetas} />
					</IconBg>
					<PText>Necesito Ayuda</PText>
					</ContentContainer>
				</ALink>
			  </Li>
			</ContentContainer>
		  </Ul>
		</CardContainer>
	  </HomeAcciones>
	  <HomeMovimientos>
		<CardContainer>
		  <CardWrapper margin="2rem 3rem">
			<TitleH3>Ultimos movimientos</TitleH3>
			<ContentContainer margin="1.5rem 0">
			<Ul
			  flexDirection="column"
			  flexAlignItems="stretch"
			  padding="0"
			  gap="1.5rem"
			>
			  <Li>
				<ContentContainer
				  width="70%"
				  flexAlignItems="center"
				  gap="1rem"
				>
				  <IconBg backgroundColor="#005758">
					<Icon src={TransferenciaWhite} />
				  </IconBg>
				  <PText>Te transfirieron dinero</PText>
				</ContentContainer>
				<ContentContainer
				  width="30%"
				  flexDirection="column"
				  flexAlignItems="flex-end"
				  gap="0"
				>
				  <PText weight="600" margin="0 0 0.5rem">
					$2.000
				  </PText>
				  <PText size="12px" margin="0">
					12/01
				  </PText>
				</ContentContainer>
			  </Li>
			  <Li>
				<ContentContainer
				  width="70%"
				  flexAlignItems="center"
				  gap="1rem"
				>
				  <IconBg backgroundColor="#005758">
					<Icon src={TransferenciaWhite} />
				  </IconBg>
				  <PText>Transferiste dinero</PText>
				</ContentContainer>
				<ContentContainer
				  width="30%"
				  flexDirection="column"
				  flexAlignItems="flex-end"
				  gap="0"
				>
				  <PText weight="600" margin="0 0 0.5rem">
					$650
				  </PText>
				  <PText size="12px" margin="0">
					12/01
				  </PText>
				</ContentContainer>
			  </Li>
			  <Li>
				<ContentContainer
				  width="70%"
				  flexAlignItems="center"
				  gap="1rem"
				>
				  <IconBg backgroundColor="#005758">
					<Icon src={TransferenciaWhite} />
				  </IconBg>
				  <PText>Pago AFIP</PText>
				</ContentContainer>
				<ContentContainer
				  width="30%"
				  flexDirection="column"
				  flexAlignItems="flex-end"
				  gap="0"
				>
				  <PText weight="600" margin="0 0 0.5rem">
					$16.650
				  </PText>
				  <PText size="12px" margin="0">
					12/12
				  </PText>
				</ContentContainer>
			  </Li>
			  <Li>
				<ContentContainer
				  width="70%"
				  flexAlignItems="center"
				  gap="1rem"
				>
				  <IconBg backgroundColor="#005758">
					<Icon src={TransferenciaWhite} />
				  </IconBg>
				  <PText>Te transfirieron dinero</PText>
				</ContentContainer>
				<ContentContainer
				  width="30%"
				  flexDirection="column"
				  flexAlignItems="flex-end"
				  gap="0"
				>
				  <PText weight="600" margin="0 0 0.5rem">
					$650
				  </PText>
				  <PText size="12px" margin="0">
					05/12
				  </PText>
				</ContentContainer>
			  </Li>
			  <Li>
				<ContentContainer
				  width="70%"
				  flexAlignItems="center"
				  gap="1rem"
				>
				  <IconBg backgroundColor="#005758">
					<Icon src={TransferenciaWhite} />
				  </IconBg>
				  <PText>Transferiste dinero</PText>
				</ContentContainer>
				<ContentContainer
				  width="30%"
				  flexDirection="column"
				  flexAlignItems="flex-end"
				  gap="0"
				>
				  <PText weight="600" margin="0 0 0.5rem">
					$1.650
				  </PText>
				  <PText size="12px" margin="0">
					12/11
				  </PText>
				</ContentContainer>
			  </Li>
			</Ul>
			</ContentContainer>
			<ContentContainer width="100%" flexJustify="flex-end" gap="0 0.5rem" margin="1rem 0">
			  <PText color="#005758" cursor="pointer">Ver mas</PText>
			  <Icon src={DownArrow} cursor="pointer"/>
			</ContentContainer>
		  </CardWrapper>
		</CardContainer>
	  </HomeMovimientos>
	</HomeGridLayout>
  );
};

export default Home;
