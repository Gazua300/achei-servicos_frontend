import styled from 'styled-components'


export const Container = styled.div`
    text-align: center;
    padding-top: 5vh;
`
export const Cartao = styled.div`
    width: 25%;
    display: inline-block;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    box-shadow: 2px 2px 4px #918bcb; 
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    &:hover{
    transform: scale(1.1);
    transition: 1s;
    }

    .card-content {
        text-align: left;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: whitesmoke;
        background-color: #151626;
        padding: 7px;
        border-radius: 20px;
        box-shadow: 2px 2px 4px black;
    }
`
export const Nome = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`
