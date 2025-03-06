import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { styled } from 'styled-components'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Main = styled.main`
display: flex;
height:calc(100vh - 70px);
width:100%;
`

const Section = styled.section`
width:85%;
min-height:calc(100vh - 100px);
border:1px solid #000;
padding: 10px 20px;
overflow:auto;
gap:10px;
display:grid;
`

const Theme = () => {

  return (
    <>
    <Header/>
    <Main>
      <Sidebar/>
      <Section>
    <Outlet/>
      <Footer/>
      </Section>
    </Main>
    </>
  )
}

export default Theme