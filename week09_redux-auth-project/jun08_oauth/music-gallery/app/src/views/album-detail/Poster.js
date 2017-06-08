import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 112px;
  border: 1px solid black;

  .header {
    background: black;
    height: 20px;
    padding-top: 2px;
    color: white;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
    overflow: hidden;
  }
  section {
    height: 175px;
    overflow: hidden;
    background: white;
    img { width: 100%; }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    overflow: hidden;
    background: white;
    padding: 2px;
    span {
      text-align: center;
      font-size: 10px;
    }
  }
`;

export default function Poster({ title, url, description }) {
  return (
    <Container>
      <div className="header">{title}</div>
      <section>
        <img src={url} alt={title}/>
      </section>
      <footer><span>{description}</span></footer>
    </Container>
  );
}