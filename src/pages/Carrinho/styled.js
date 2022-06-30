import styled from 'styled-components'




export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const QuadroCarro = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    width: 80vw;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    
    div{
        display: flex;
        justify-content: space-between;
    }
`
export const QuadroFinal = styled.div`
    border: 1px solid;
    width: 50vw;
    margin: 5px;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`
export const Remove = styled.button`
    margin: 5px;
    border-radius: 30px;
    background-color: #151626;
    color: whitesmoke;
    cursor: pointer;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15vw;
  margin-top: 10px;
`
