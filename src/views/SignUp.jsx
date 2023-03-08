import React,{useState} from 'react'
import '../css/sign-up.scss';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const Button = styled.button`
    padding:10px;
`

const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    z-index: 1;
    min-height: 100vh;
    width:100%;
    background-color: ${props => props.theme.lightBg};
    color:${props => props.theme.lightCr};
`

const StyledForm = styled.form`
    width: min(500px,100%);
    padding:20px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    gap:10px;

`

const StyledTitle = styled.h1`
    text-align:center;
    margin:0;
    font-size: 20px;
    margin-bottom: 30px;
`


const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    /* gap:10px; */
    position: relative;
    border:1px solid ${props => props.theme.lightCr};
    padding:10px;
    border-radius: 5px;
    & > span{
        position:absolute;
        top:20px;
        left:10px;
        background-color: ${props => props.theme.lightBg};
    }
    
`
const StyledInput = styled.input.attrs({type: props =>props.type})`
    width:100%;
    border:none;
    outline: none;
    border:1px solid red;
    padding:10px;
    &:focus + span{
        top:-20px;
    }
`

const SignUp = () => {
    const theme = useTheme();
    const [username,setUsername] = useState('');
   
  return (
    <Container theme={theme}>
        <StyledForm>
            <StyledTitle>SIGN UP FORM</StyledTitle>
            <StyledLabel theme={theme}>
                <StyledInput type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <span style={{top:username?'-20px':'20px'}}>Username</span>
            </StyledLabel>
            <StyledLabel theme={theme}>
                <StyledInput type="password" />
                <span>Password</span>
            </StyledLabel>
        </StyledForm>
    </Container>
  )
}

export default SignUp