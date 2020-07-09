import React from "react"
import styled from 'styled-components'
import theme from '../assets/themes/main.js'
import { rem } from 'polished'

const Contact = styled.div`
  margin-top: ${rem(48)};
  width: 100vw;
  display: flex;
  justify-content: center;
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.cWhite};
  font-size: 1.5vw;
  line-height: 1.44rem;
  text-align: center;
  z-index: 1;

  a {
    display: inline-block;
    color: ${props => props.theme.cWhite};
    margin-left: ${rem(16)};
    margin-right: ${rem(16)};
    text-decoration: none;
    opacity: 0.5;
  }

  a:hover {
    opacity: 1;
    cursor: pointer;
  }

  .contacts-info {
    @media ${props => props.theme.md} {
        font-size: 3vw;
    }

    @media ${props => props.theme.sm} {
        display: flex;
        flex-direction: column;
        font-size: 4.5vw;

        a {
            margin-bottom: 3.5vw;
        }
    }
  }
`

const Contacts = (props) => {
    return (
      <Contact theme={theme}>
        {props.children}
      </Contact>
    )
  }

  export default Contacts