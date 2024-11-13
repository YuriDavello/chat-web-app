import { Container } from './styles.js'
import List from './components/List'
import Chat from './components/Chat'

function App() {

  return (
    <Container>
      <List isOneToOne/>
      <Chat />
      <List />
    </Container>
  )
}

export default App
