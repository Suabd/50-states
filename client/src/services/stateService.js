import axios from 'axios'

export default { // get all the states
    getAllStates() {
        return axios.get('/api/states').then( response => { // list of states
            return response.data
        } )
    },
    // to show names of the stated visited
    setVisited(stateName, visited) {
        //example URL api/states/Wisconsin
        let requestData = { visited: visited}
        return axios.patch('/api/state/' + stateName, requestData).then( response => { // one state
            return response.data
        })
    }
}