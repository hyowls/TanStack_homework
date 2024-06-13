import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { login } from '../lib/auth'

const Container = styled.div`
  max-width : 400px;
  margin: 0 auto;
  padding :20px;
  background-color : #f9f0fa;
  border-radius:8px;
`
const InputGroup = styled.div`
  margin-bottom : 15px;
  label {
    display : block;
    margin-bottom:5px;
  }
  input {
    width : 100%;
    padding: 8px;
    box-sizing : border-box;
  }
`
const Button = styled.button`
  width:100%;
  padding:10px;
  background-color:#007bff;
  color:white;
  border:none;
  border-radius:4px;
  cursor: pointer;
  margin-bottom : 10px;

  &:disabled {
    background-color : #a0a0a0;
  }
`
const ToggleButton = styled.button`
  width:100%;
  padding:10px;
  background-color: #6c757d;
  color:white;
  border:none;
  border-radius:4px;
  cursor: pointer;
`

const SignIn = ({setUser}) => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignIn = async() => {
    const {userId, nickname, avatar} = await login({ id : id, password : password})
    setUser({userId, nickname, avatar})
  }

  return (
    <Container>
      <InputGroup>
        <label htmlFor='id'>아이디</label>
        <input type="text" minLength="4" maxLength="10" onChange={(e) => {
          setId(e.target.value)
        }} placeholder='아이디를 입력해주세요' />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <input type="password" minLength="4" maxLength="15" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder='비밀번호를 입력해주세요'/>
      </InputGroup>
      <Button onClick={handleSignIn}>
        로그인
      </Button>
      <ToggleButton onClick={() => {
        navigate('/sign_up')
      }}>
        회원가입
      </ToggleButton>
    </Container>
  )
}

export default SignIn