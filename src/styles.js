import styled from 'styled-components'
import './global.css'

export const Container = styled.div`
display: flex;

align-items: ${props => (props.isLoggedIn ? 'stretch' : 'center')};
justify-content: ${props => (props.isLoggedIn ? 'flex-start' : 'center')};
margin: 10px; 

height: 95vh;
width: ${props => (props.isLoggedIn ? 'auto' : '85vw')};

background-color: var(--secondary-color);

border-radius: 10px;
`;