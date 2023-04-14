import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10vh;
    }

    fieldset{
        border: 1px solid;
        width: 30vw;
        box-shadow: 2px 2px 4px;
        border-radius: 10px;

        @media(max-width: 600px){
            width: 80vw;
        }
    }

    input[type='button']{
        width: 100px;
    }

    button{
        border-radius: 20px;
        height: 30px;
        background-color: transparent;
        border-color: whitesmoke;
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
export const BtnContainer = styled.div`
    margin: auto;
	display: flex;
	align-items: center;
    justify-content: space-between;
    width: 18vw;
    margin-top: 10px;
    @media(max-width: 600px){
        width: 80%;
        flex-direction: row;
        justify-content: space-between;
    }
`
