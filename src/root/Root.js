import React, { useEffect } from 'react'
import Routes from './Routes'

import axios from 'axios'
import { API_URL } from '../constants/appConstants'

import 'moment/locale/ko'
import { BrowserRouter as Router } from 'react-router-dom'

// export default class Root extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes />
//       </Router>
//     )
//   }
// }

const Root = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default Root
