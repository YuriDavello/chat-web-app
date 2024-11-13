import { Container, Content, Infos } from './styles.js'
import { BiCheck, BiCheckDouble } from "react-icons/bi";

const messages = [
  {
    id: 1,
    content: 'Opa bom dia Yuri. Tudo bem com você mano?',
    sender: 'me',
    date: new Date().toISOString(),
    status: 'sent'
  },
  {
    id: 2,
    content: 'Opa bom dia Yuri. Tudo bem com você mano?',
    sender: 'me',
    date: new Date().toISOString(),
    status: 'delivered'
  },
  {
    id: 3,
    content: 'Opa bom dia Yuri. Tudo bem com você mano?',
    sender: 'me',
    date: new Date().toISOString(),
    status: 'read'
  },
  {
    id: 4,
    content: 'Opa bom dia Yuri. Tudo bem com você mano?',
    sender: 'friend',
    date: new Date().toISOString(),
    status: 'sent'
  },
  {
    id: 5,
    content: 'Opa bom dia Yuri. Tudo bem com você mano?',
    sender: 'friend',
    date: new Date().toISOString(),
    status: 'delivered'
  },
  {
    id: 6,
    content: 'Opa bom dia Yuri. Tudo bem com você mano000000000000000000000000000000000000000000000000000000000000000000000000000000000000000?',
    sender: 'friend',
    date: new Date().toISOString(),
    status: 'read'
  }
];

const formatDate = (isoString) => {
  const date = new Date(isoString);

  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date);

  return formattedDate.replace(',', '');
}

const getStatusIcon = (status) => {
  let statusIcon;

  switch (status) {
    case 'delivered':
      statusIcon = <BiCheckDouble size={22} color="#888"/>;
      break;

    case 'read':
      statusIcon = <BiCheckDouble size={22} color="#25D366"/>;
      break;
  
    default:
      statusIcon = <BiCheck size={22} color="#888"/>;
      break;
  }

  return statusIcon;
}


function Message() {
  return (
    messages.map(message => {
      return (
        <Container key={message.id} sender={message.sender}>
          <Content sender={message.sender}>
            <p>{message.content}</p>
          </Content>
          <Infos>
            <span>{formatDate(message.date)}</span>
            {message.sender === 'me'&& getStatusIcon(message.status)}
          </Infos>
        </Container>
      );
    })
  );
}

export default Message;