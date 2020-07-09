import React from "react"
import styled from 'styled-components'
import theme from '../assets/themes/main.js'

const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.cWhite};

  h1 {
    font-size: 4vw;
    z-index: 1;
    line-height: 1.44em;
  }

  @media ${props => props.theme.md} {
    h1 {
      font-size: 8vw;
    }
  }
`

const Layout = (props) => {
  return (
    <MainContent theme={theme}>
      {props.children}
    </MainContent>
  )
}

export default Layout
