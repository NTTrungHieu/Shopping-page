import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor:pointer;
  border: ${props=>props.type==="filled"&&"none"};
  background-color: ${props=>props.type==="filled"?"black":"transparent"};
  color: ${props=>props.type==="filled"&&"white"};
`

const TopTexts = styled.div``

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex:3;
`
const Summary = styled.div`
  flex:1;

`

export const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>Giỏ hàng</Title>
        <Top>
          <TopButton>Tiếp tục mua hàng</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(0)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Thanh toán</TopButton>

        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src=""/>
                <Details>
                  <ProductName></ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail></PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}