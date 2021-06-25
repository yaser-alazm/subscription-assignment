import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Parameters from './screens/Parameters'
import Payment from './screens/Payment'
import Summary from './screens/Summary'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Container>
          <Route path='/parameters' component={Parameters} />
          <Route path='/payment' component={Payment} />
          <Route path='/summary' component={Summary} />
        </Container>
      </Router>
    </GlobalProvider>
  )
}

export default App
