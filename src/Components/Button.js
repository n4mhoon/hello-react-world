import styled from 'styled-components';

export const SideBtn = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  color: #303437;
  margin-bottom: 40px;
  text-decoration: unset;

  &:hover {
    color: #182351;
    font-weight: 400;
  }

  &:active {
    color: #182351;
    font-weight: 400;
  }
`;

export const HeadBtn = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  background: #ebe8e8;
  color: unset;
  border: none;
  padding: 4px 4px;
  border-radius: 2px;
  box-sizing: content-box;
  width: max-content;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background: rgba(24, 35, 81, 0.25);
    transition: 0.3s;
  }
`;
