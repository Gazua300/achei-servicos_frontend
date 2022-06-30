import styled from 'styled-components'

export const Container = styled.div`
	margin: auto;
	text-align: center;
    width: 30vw;
    margin-top: 20px;
    form{
        line-height: 40px;
    }
    input{
    	width: 250px;
    	height: 20px;
    	background: transparent;
    	color: whitesmoke;
    	font-size: 1rem;
    	border-radius: 10px;
        padding-left: 10px;
    }
    textarea{
        width: 24.5vw;
        background: transparent;
        font-size: 1rem;
        color: whitesmoke;
        margin-top: 10px;
        padding-left: 10px;
    }
    select{
        width: 24.5vw;
        background: transparent;
        font-size: 1rem;
        color: whitesmoke;
        padding-left: 10px;
        option{
            color: black;
        }        
    }
`
export const BtnCadastrar = styled.button`
    margin: 10px;
    height: 30px;
    width: 250px;
    border-radius: 30px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
`
export const BtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    margin-top: 30px;
`
