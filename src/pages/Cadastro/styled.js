import styled from 'styled-components'

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
`
export const BtnCadastrar = styled.button`
    margin: 5px;
    height: 30px;
    width: 265px;
    border-radius: 30px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
`
export const BtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    margin-top: 10px;
`
