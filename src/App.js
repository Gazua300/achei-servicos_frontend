import { BrowserRouter, Link } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { GlobalState } from "./global/Context"
import Router from "./routes/Router"
import Background from './img/ninjaWallpaper.jpg'
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body{
    background-image: url(${Background});
    background-size: cover;
    margin: 0;
    padding: 0;
    width: 100vw;
    color: #918bcb;
  }
`
const Head = styled.div`    
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: -15px;        
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
              <Head>
                <h1>LabeNinjas</h1>
                <div>
                  <Link to={'/'}><BtnHead>Home</BtnHead></Link>
                  <Link to={'/carrinho'}><BtnHead>Carrinho</BtnHead></Link>
                </div>
              </Head>
              <hr/>
            <Router/>
        </GlobalState>
      </BrowserRouter>
    )
}
export default App
