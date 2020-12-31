import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: SpoqaHanSans;
  color: #ffffff;
`

const Header = styled.div`
  padding: 0 2rem;
  height: 3.5rem;
  width: 100%;
  margin: auto;
  -webkit-box-pack: justify;
  max-width: 90rem;
  background-color: rgba(42, 42, 45, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const A = styled.a`
  width: 10rem;
  text-decoration: none;
  color: ${props => props.color ||  '#F7EF18'};
  font-size: ${props => props.fontsize || '28px'};
  font-family: ${props => props.font || 'Gothic A1'};
  max-width: calc(100% - 12.75rem);
    display: flex;
    -webkit-box-align: center;
    align-items: center;

`

function App() {
  return (
    <Div>
      <Header>
        <div>
          <A href="/" font="Ubuntu">KCru.dev</A>
        </div>
        <div>
          <A href="/" color="#ffffff" fontsize="16px">Share</A>
          <A href="/" color="#ffffff" fontsize="16px">About</A>
          {/* <A href="/" color="#ffffff" fontsize="16px">About</A> */}
        </div>
      </Header>
    </Div>
  );
}

export default App;