import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { GlobalState } from "./global/Context"
import Router from "./routes/Router"
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body{
    /* background-image: linear-gradient(to left, #151626, lightblue); */
    background-color: #151626;
    margin: 0;
    padding: 0;
    width: 100vw;
    color: whitesmoke;
  }
`
const Head = styled.div`  
  text-align: center;
  padding: 5px;
`
const BtnHead = styled.button`
  margin: 5px;
  height: 40px;
  width: 90px;
  border-radius: 30px;
  background-color: #151626;
  color: whitesmoke;
  opacity: 0.7; 
  font-size: 14pt;
  cursor: pointer;       
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
