import styled from 'styled-components';

export const modaStyle = {
  content: {
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1050,
    position: 'relative',
    width: '448px',
    height: '188px',
    padding: '1.5rem',
    backgroundColor: '#3B4A54',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  overlay: {
    zIndex: 1040,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  background-color: #202C33;
  padding: 15px;
  border-radius: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${props => (props.buttonType === 'close' ? '#e63946' : '#4dabf7')};
  color: #ffffff;
  border: ${props => (props.buttonType === 'close' ? '1px solid #cc3c3c' : '1px solid #3a91cc')};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${props => (props.buttonType === 'close' ? '#ff4d4d' : '#5bc0de')};
    box-shadow: ${props => (props.buttonType === 'close' ? '0 0 10px rgba(255, 77, 77, 0.8)' : 'background-color: #3a91cc')};
  }
`;