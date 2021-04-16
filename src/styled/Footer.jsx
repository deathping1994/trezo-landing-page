import styled from 'styled-components'

export const Footer = styled('footer')`
  padding: 28px 20px 0px 6px;
  line-height: 14px;
  display: flex;
  flex-wrap: wrap;
  background-color: #182a34;
  color: white;
  font-family: "Montserrat", sans-serif;
    margin-top:100px;
  .footer-main-links {
    line-height: 1.8rem;
    margin-right:-100px;
  }
  ul li {
    list-style: none;
    font-weight: 400;
    letter-spacing: 0.6px;
    cursor: pointer;
  }
  ul li a {
    list-style: none;
    text-decoration: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  ul {
    line-height: 1.4rem;
  }
  .col {
    display: flex;
  }
  .col div {
    flex: 1;
  }
  .about-trezo {
    display: flex;
    flex-direction: column;
  }
  .about-trezo p {
    font-size: 10px;
    letter-spacing: 0px;
    line-height: 1rem;
  }
  .footer-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .footer-links a {
    margin: 0px 14px 0px 14px;
  }
  .footer-links-mg {
    margin-left: 40px;
  }
  @media screen and (min-width: 768px) {
    padding:40px;
    justify-content:space-between;
    .about-trezo p {
      font-size: 12px;
      letter-spacing: 0px;
      line-height: 1rem;
    }
    .col div {
    
  }
  }
`
