import styled from 'styled-components'

export const Form = styled.form`
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px;
    -webkit-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.2);
    box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.2);
    border-radius: 15px;
`
export const Input = styled.input`
    margin: 10px 0px;
    padding: 5px;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
`
export const Title = styled.h2`
    text-align: center;
    color: #5D5C5C;
    margin-bottom: 20px;
`
export const Error = styled.span`
    border: 3px solid #ffa23d;
    background: #FFBE79;
    text-align: center;
    padding: 5px 15px;
    width: 100%;
    color: #fff;
    border-radius: 5px;
    flex-wrap: wrap;
    margin-top: 15px;
`
export const Spinner = styled.div`
   @keyframes spin {
     0% {
       transform: rotate(0deg);
     }
   
     100% {
       transform: rotate(360deg);
     }
    
  }
   
  border: 3px solid rgba(0,0,0,0.1);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-left-color: #FFBE79;
  margin: auto;
  -webkit-animation: spin 1s ease infinite;
  animation: spin 1s ease infinite;
`
