import axios from 'axios'

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['X-Auth-Token'] = token; // set token for headers request 
    } else {
        delete axios.defaults.headers.common['X-Auth-Token'] // del old header if have
    }
}

export default setAuthToken