import styled from 'styled-components';
import './global.css';

export const Container = styled.div`
  display: flex;
  align-items: ${props => (props.isLoggedIn ? 'stretch' : 'center')};
  justify-content: ${props => (props.isLoggedIn ? 'flex-start' : 'center')};
  
  background-color: var(--secondary-color);
  
  height: 95vh;
  min-height: calc(100vh - 20px);
  width: ${props => (props.isLoggedIn ? 'auto' : 'clamp(300px, 85vw, 800px)')};
  
  border-radius: 0.625rem;
`;
