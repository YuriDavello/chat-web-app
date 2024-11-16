import { useSelector } from 'react-redux';
import { Container, Content, Infos } from './styles.js'
import { getStatusIcon } from '../../../Utils/getStatusIcon.jsx'


const formatDate = (date) => {
  const dateToFormat = new Date(date);

  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(dateToFormat);

  return formattedDate.replace(',', '');
}

function Message({ message }) {
  const { currentUser } = useSelector(state => state.authenticate);

  const isSenderCurrentUser = message.sender === currentUser.id ? true : false;

  return (
    <Container key={message.createdAt} isSenderCurrentUser={isSenderCurrentUser}>
      <Content isSenderCurrentUser={isSenderCurrentUser}>
        <p>{message.content}</p>
      </Content>
      <Infos>
        <span>{formatDate(message.createdAt)}</span>
        {isSenderCurrentUser && getStatusIcon(message.status)}
      </Infos>
    </Container>
  );
}

export default Message;