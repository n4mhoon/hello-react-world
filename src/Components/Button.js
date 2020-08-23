import styled from 'styled-components';

export const SideBtn = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  color: #303437;
  margin-bottom: 40px;

  &:hover {
    color: #182351;
    font-weight: 400;
  }
`;

export const HeadBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #303437;
  padding: 4px 4px;
  border-radius: 4px;
  box-sizing: content-box;
  width: max-content;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background: #c4c4c4;
  }
`;
