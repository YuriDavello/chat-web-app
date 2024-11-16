import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isSenderCurrentUser === true ? 'end' : 'start')};
`;

export const Content = styled.div`
  max-width: 60%;
  padding: 15px;
  border-radius: 15px;
  overflow-wrap: break-word;
  background-color: ${props => (props.isSenderCurrentUser === true ? '#005C4B' : '#202C33')};
`;

export const Infos = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;