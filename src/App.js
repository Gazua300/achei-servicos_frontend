import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { GlobalState } from "./global/Context"
import Router from "./routes/Router"


const GlobalStyle = createGlobalStyle`
  body{
    background-image: url(https://lh3.googleusercontent.com/0FXgVBEwauQiEEDm6IsoKk_hI7dkOxUQ3RCh5jqq3GA_48IiXHa98kGnYx9yFfF_alzQqeusy_vYvrRxkm9NfjtZi4Y5DDMZ4ebTSUc);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
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
