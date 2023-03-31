import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { GlobalState } from "./global/Context"
import Router from "./routes/Router"


const GlobalStyle = createGlobalStyle`
  body{
    background-color: rgba(21, 22, 38);
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
