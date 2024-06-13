import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getUserInfo } from '../lib/auth'

const Navbar = styled.div`
  background-color : #333;
  color:white;
  padding: 10px 20px;
  display:flex;
  justify-content : space-between;
  align-items:center;
  position : fixed;
  width: calc(100% - 2rem);
  top : 0;
  z-index : 1000;
  max-width : 1240px;
`
const NavItems = styled.div`
  display:flex;
  align-items:center;
`
const NavItem = styled(Link)`
  color:white;
  margin:0 10px;
  text-decoration:none;
  &:hover {
    text-decoration : underline;
  }
`
const UserProfile = styled.div`
  display:flex;
  align-items:center;
`
const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right:10px;
`
const UserName = styled.span`
  color:white;
  margin-right : 20px;
`
const LogoutButton = styled.button`
  padding:8px 12px;
  background-color:#ff4d4d;
  color:white;
  border:none;
  border-radius:4px;
  cursor: pointer;

  &:hover {
    background-color : #cc0000;
  }
`
const PageContainer = styled.div`
  padding: 6rem 2rem;
`
const Layout = ({user, setUser}) => {
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo().then((res) => {
      if(res) {
        setUser({
          userId : res.id,
          nickname : res.nickname,
          avatar: res.avatar,
        })
      } else {
        handleLogout()
      }
    })
  },[])
  const handleLogout = () => {
    setUser(null)
    navigate('/sign_in')
    localStorage.clear()
  }
  return (
    <div>
      <Navbar>
        <NavItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/profile">마이페이지</NavItem>
        </NavItems>
        <UserProfile>
          {
            user && (
              <>
                <UserAvatar src={user.avatar} alt="User Avatar"/>
                <UserName>{user.nickname}</UserName>
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              </>
            )
          }
        </UserProfile>
      </Navbar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  )
}

export default Layout
