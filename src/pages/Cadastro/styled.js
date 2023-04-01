import styled from 'styled-components'


export const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    text-align: center;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10vh;
    }

    input{
    	width: 250px;
    	height: 30px;
    	background: transparent;
        border-color: whitesmoke;
    	color: whitesmoke;
    	font-size: 1rem;
    	border-radius: 20px;
        padding-left: 10px;
        margin: 10px;
    }

    textarea{
        width: 253px;
        border-radius: 10px;
        background: transparent;
        border-color: whitesmoke;
        font-size: 1rem;
        color: whitesmoke;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
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
    margin: 8px;
    height: 30px;
    width: 120px;
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
    flex-direction: row;
	align-items: center;
    margin-top: 10px;
    @media(max-width: 600px){
        width: 80%;
        flex-direction: row;
        justify-content: space-between;
    }
`
