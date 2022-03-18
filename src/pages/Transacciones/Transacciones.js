import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Plus from 'assets/icons_svg/Plus.svg'
import DownArrow from 'assets/icons_svg/DownArrow.svg'
import Favoritas from 'components/Contactos/Favoritas'
import Ultimas from 'components/Contactos/Favoritas'

import {
  TransaccionesGridLayout,
  TransaccionesCuenta,
  TransaccionesUltimas,
  CardContainer,
  CardWrapper,
  TitleH3,
  ContentContainer,
  PText,
  IconBg,
  Icon,
  Line,
} from './styles'

const userData = [
  {
    id: 1,
    date: '14-05-22',
    name: 'Sofia Gomez',
    bank: 'Banco Galicia',
    fav: true,
  },
  {
    id: 2,
    date: '14-05-21',
    name: 'Agustin Baez',
    bank: 'BBVA Frances',
    fav: false,
  },
  {
    id: 3,
    date: '14-05-20',
    name: 'Eva Matheo',
    bank: 'Mercado Pago',
    fav: true,
  },
  {
    id: 4,
    date: '14-05-19',
    name: 'Cynthia Perez',
    bank: 'Santander',
    fav: true,
  },
  {
    id: 5,
    date: '14-05-18',
    name: 'Jimena Suarez',
    bank: 'Banco Galicia',
    fav: false,
  },
]

const favList = []

const Transacciones = () => {
  const [data, setData] = useState(userData)
  const [addFavourite, setAddFavourite] = useState(favList)
  const [contacts, setContacts] = useState(true)
  const [favorites, setFavorites] = useState(false)

  useEffect(() => {
    data.map((item) => {
      if (item.fav) {
        setAddFavourite((oldArray) => [...oldArray, item])
      }

      return data
    })
  }, [])

  const handleContacts = (e) => {
    e.preventDefault()
    setContacts((contacts) => !contacts)

    // Change font
    // Change weight
  }

  const handleFavorites = (e) => {
    e.preventDefault()
    setFavorites((favorites) => !favorites)
    console.log(favorites)

    //update data and addFavourite
    // setData((prevData) => {
    //   return { ...prevData, fav: favorites };
    // });
    // console.log(data)
  }

  return (
    <TransaccionesGridLayout>
      <TransaccionesCuenta>
        <CardContainer>
          <TitleH3 margin="1.5rem 2rem">Elegi a que cuenta transferir</TitleH3>
          <Line border="1px solid rgba(0, 0, 0, 0.1)" />
          <ContentContainer flexAlignItems="center" margin="1rem 2rem">
            <Link to="/transactions">
              <IconBg backgroundColor="rgba(0,87,88, 0.1)">
                <Icon cursor="pointer" src={Plus} />
              </IconBg>
            </Link>
            <PText color="rgba(0,87,88, 1)" margin="0 1rem">
              Agregar Cuenta
            </PText>
          </ContentContainer>
        </CardContainer>
      </TransaccionesCuenta>
      <TransaccionesUltimas>
        <CardContainer>
          <CardWrapper>
            <ContentContainer flexJustify="space-evenly">
              <ContentContainer
                cursor="pointer"
                flexAlignItems="center"
                flexDirection="column"
                width="100%"
                onClick={handleContacts}
              >
                <PText color="rgba(0, 87, 88, 1)" margin="1rem 0" weight="600">
                  Ultimas
                </PText>
                <Line
                  border={
                    contacts ? '3px solid rgba(0, 87, 88, 1)' : '1px solid rgba(0, 0, 0, 0.1)'
                  }
                />
              </ContentContainer>
              <ContentContainer
                cursor="pointer"
                flexAlignItems="center"
                flexDirection="column"
                width="100%"
                onClick={handleContacts}
              >
                <PText margin="1rem 0">Favoritas</PText>
                <Line
                  border={
                    contacts ? '1px solid rgba(0, 0, 0, 0.1)' : '3px solid rgba(0, 87, 88, 1)'
                  }
                />
              </ContentContainer>
            </ContentContainer>
            {contacts ? (
              <Ultimas data={data} handleFav={handleFavorites} />
            ) : (
              <Favoritas data={addFavourite} handleFav={handleFavorites} />
            )}
            <ContentContainer flexJustify="flex-end" gap="0 0.5rem" margin="1rem 3.5rem">
              <PText color="#005758" cursor="pointer">
                Ver mas
              </PText>
              <Icon cursor="pointer" src={DownArrow} />
            </ContentContainer>
          </CardWrapper>
        </CardContainer>
      </TransaccionesUltimas>
    </TransaccionesGridLayout>
  )
}

export default Transacciones
