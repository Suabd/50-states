import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/state').then( response => {
            return response.data
        } )
    },

    setVisited(stateName, visited) {
        //example URL api/states/Wisconsin
        let requestData = { visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    }
}