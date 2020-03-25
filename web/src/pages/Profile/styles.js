import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
      font-weight: bold;
    }

    img {
      height: 64px;
    }

    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }

    a + button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #DCDCDC;
      background: transparent;
      margin-left: 16px;
      margin-top: 15px;
      transition: border-color 0.2s;

      &:hover {
        border-color: #999;
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #E02041;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: #FFF;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: background 0.2s;

  

  &:hover {
    background: ${darken(0.07, '#E02041')};
  }
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: #FFF;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;

      &:hover{
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414D;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;