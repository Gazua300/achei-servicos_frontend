import styled from 'styled-components'


export const Head = styled.div`
  background-color: #151626;  
  font-size: 2rem;
  text-align: center;
  padding: 10px;

  @media(max-width: 600px){
    font-size: 20px;
    padding: 10px;
    button {
        padding: 7px;
    }
  }
`
export const Container = styled.div`
    text-align: center;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10vh;
    }

    fieldset{
        padding: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 4px;
    }

    input{
    	height: 25px;
    	background: transparent;
    	color: whitesmoke;
    	font-size: 1rem;
    	border-radius: 20px;
        padding-left: 10px;
        margin: 10px;
    }

    input::placeholder {
        color: rgb(255, 255, 255, 0.3);
    }

    @media(max-width: 600px){
        font-size: 10px;
        h2 {
            margin-top: 5vh;
        }
        input {
            width: 80%;
            height: 30px;
        }
    }
`
export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media(max-width: 600px){
        width: 80%;
        flex-direction: row;
        justify-content: space-between;
    }
`
export const BtnCadastrar = styled.input`
    margin: 5px;
    height: 30px;
    width: 100px;
    border-radius: 30px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
    @media(max-width: 600px){
        width: 30%;
    }
`
