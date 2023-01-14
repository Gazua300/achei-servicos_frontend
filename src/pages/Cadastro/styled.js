import styled from 'styled-components'


export const Head = styled.div`
  background-image: linear-gradient(#151626, lightblue);  
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  button {
    background-color: #151626;
    border-radius: 15px;
    color: whitesmoke;
    cursor: pointer;
    padding: 10px;
  }

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
    
    h2 {
        margin-top: 10vh;
    }
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10vh;
    }

    input{
    	width: 250px;
    	height: 20px;
    	background: transparent;
    	color: whitesmoke;
    	font-size: 1rem;
    	border-radius: 10px;
        padding-left: 10px;
        margin-bottom: 10px;
    }

    input::placeholder {
        color: whitesmoke;
    }

    textarea{
        width: 253px;
        border-radius: 10px;
        background: transparent;
        font-size: 1rem;
        color: whitesmoke;
        margin-bottom: 10px;
        padding-left: 10px;
    }

    textarea::placeholder {
        color: whitesmoke;
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
        textarea {
            width: 80%;
            height: 60px;
        }
    }
`
export const BtnCadastrar = styled.button`
    margin: 5px;
    height: 30px;
    width: 265px;
    border-radius: 30px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
    @media(max-width: 600px){
        width: 30%;
    }
`
export const BtnContainer = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    margin-top: 10px;
    @media(max-width: 600px){
        width: 80%;
        flex-direction: row;
        justify-content: space-between;
    }
`
