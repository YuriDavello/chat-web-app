import styled from 'styled-components';
import '../../../global.css'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: var(--primary-color);

  height: auto;
  padding: 8px;

  cursor: pointer;

  &:hover {
    background-color: #3B4640;
  }

  &:active {
  background-color: #4A5A54;
}
`;

export const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;
`;