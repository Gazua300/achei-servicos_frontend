import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { GlobalState } from "./global/Context"
import Router from "./routes/Router"
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body{
    background-color: #151626;
    margin: 0;
    padding: 0;
    width: 100vw;
    color: whitesmoke;
  }
`


const App = ()=> {

    return (
      <BrowserRouter>
        <GlobalState>
          <GlobalStyle/>
            <Router/>
        </GlobalState>
      </BrowserRouter>
    )
}
export default App
