import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Introduce } from './Introduce';
import { HeaderIntroduce, HeaderWorks, HeaderInterest } from './Header';
import { Interest } from './Interest';
import { Works } from './Works';

export const Content = () => {
  return (
    <ContentTotal>
      <Switch>
        <Route path={['/', '/introduce']} exact component={HeaderIntroduce} />
        <Route path="/interest" exact component={HeaderInterest} />
        <Route path="/works" exact component={HeaderWorks} />
        <Redirect path="*" to="/" />
      </Switch>
      <Switch>
        <ContentMain>
          <Route path={['/', '/introduce']} exact component={Introduce} />
          <Route path="/interest" exact component={Interest} />
          <Route path="/works" exact component={Works} />
        </ContentMain>
      </Switch>
    </ContentTotal>
  );
};

const ContentTotal = styled.div`
  width: calc(100% - 160px);
  background: #ebe8e8;
  overflow-x: hidden;
  overflow-y: scroll;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 64px;
  padding-right: 64px;

  @media only screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const ContentMain = styled.div``;

//   background: ${(props) => (props.isRed ? 'red' : 'blue')}; ebe8e8
