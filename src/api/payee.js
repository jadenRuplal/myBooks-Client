import apiUrl from '../apiConfig'
import axios from 'axios'


export const getAllPayees = (user) => {
    return axios({
        url: `${apiUrl}/api/payee?filters[search]=&orderby=name&sortby=asc`,
        method: 'GET',
        headers: {
            sid: `${user.sessions[0].id}`,
			'api-key': `Ml29vjhslk2873!`,
		},
    })
}