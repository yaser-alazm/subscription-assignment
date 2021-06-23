import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Parameters from './screens/Parameters'
import Payment from './screens/Payment'
import Summary from './screens/Summary'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/parameters' component={Parameters} />
        <Route path='/payment' component={Payment} />
        <Route path='/summary' component={Summary} />
      </Container>
    </Router>
  )
}

export default App
