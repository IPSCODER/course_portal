import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { styled } from 'styled-components'

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
width:100%;
`

const Theme = () => {

  return (
    <>
    <Header/>
    <Main>
    <Outlet/>
    </Main>
    <Footer/>
    </>
  )
}

export default Theme