import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import HomeLink from './components/HomeLink'
import Parameters from './screens/Parameters'
import Payment from './screens/Payment'
import Summary from './screens/Summary'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Container>
          <Route path='/' exact component={HomeLink} />
          <Route path='/parameters' exact component={Parameters} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/summary' exact component={Summary} />
        </Container>
      </Router>
    </GlobalProvider>
  )
}

export default App
