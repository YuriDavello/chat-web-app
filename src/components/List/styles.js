import styled from 'styled-components'
import '../../global.css'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--bg-color);
  height: 59px;
  padding-right: 20px;
  padding-left: 25px;

  >div {
    display: flex;
    gap: 10px;
  }
`;