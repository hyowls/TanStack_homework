import React, { useState } from 'react'
import styled from 'styled-components'

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

const SignIn = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <InputGroup>
        <label htmlFor='id'>아이디</label>
        <input type="text" onChange={(e) => {
          setId(e.target.value)
        }} placeholder='아이디를 입력해주세요' />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder='비밀번호를 입력해주세요'/>
      </InputGroup>
      <Button onChange={(e) => {
        
      }}>
        로그인
      </Button>
      <ToggleButton onChange={(e) => {
        
      }}>
        회원가입
      </ToggleButton>
    </Container>
  )
}

export default SignIn