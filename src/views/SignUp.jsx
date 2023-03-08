import React,{useEffect, useState} from 'react'
import '../css/sign-up.scss';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { getUsers } from '../api/loginApi';

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
    gap:20px;

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
        top:-20px;
        left:10px;
        background-color: #fff;
        padding:5px;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    
`
const StyledInput = styled.input.attrs(props => ({type: props.type,autoComplete:"off"}))`
    width:100%;
    border:none;
    outline: none;
    background-color: inherit;
    padding:10px;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    &:focus + span{
        top:-20px !important;
    }
`
const ButtonContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SubmitButton = styled.button`
    padding: 13px 30px;
    border-radius: 5px;
    background-color: #811eb8;
    color:#fff;
    border:1px solid #811eb8;
    transition: all 5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover{
        color:#811eb8;
        background-color: #fff;
    }
    width: 200px;
    

`



const SignUp = () => {
    const theme = useTheme();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const clearForm = ()=>{
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }

    const submitForm = async (e)=>{
        e.preventDefault();
        if(password != confirmPassword){
            alert("password must be equal");
            return false;
        }
        let method = "POST",url="login",id="",body={password,username};
        if(window.navigator.onLine){
            try{
                let result = await getUsers([url,id,method,body]);
                console.log(result);
                alert("Registeration successful")
                clearForm();
            }
            catch(e){
                alert("Registeration was not successful")
            }

        }
        else alert("Please check your network connectivity");
        
        
        

    }
   
  return (
    <Container theme={theme}>
        <StyledForm  onSubmit={(event)=>submitForm(event)} >
            <StyledTitle>SIGN UP FORM</StyledTitle>
            <StyledLabel theme={theme}>
                <StyledInput type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required label="Enter username"/>
                <span style={{top:username?'-20px':'8px'}}>Username</span>
            </StyledLabel>
            <StyledLabel theme={theme}>
                <StyledInput type="password" label="Enter Password"
                onChange={(e)=>setPassword(e.target.value)} value={password} required />
                <span style={{top:password?'-20px':'8px'}}>Password</span>
            </StyledLabel>
            <StyledLabel theme={theme}>
                <StyledInput type="password" label="Confirm Password"
                onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} required />
                <span style={{top:confirmPassword?'-20px':'8px'}}>Confirm Password</span>
            </StyledLabel>
            <ButtonContainer>
                <SubmitButton>Sign-Up</SubmitButton>
            </ButtonContainer>
        </StyledForm>
    </Container>
  )
}

export default SignUp