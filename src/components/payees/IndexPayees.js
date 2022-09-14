import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPayees } from '../../api/payee'
import messages from '../shared/AutoDismissAlert/messages'
import Table from 'react-bootstrap/Table'
//card container style





const IndexPayees = (props) => {
    const [payees, setPayees] = useState(null)
    const [error, setError] = useState(false)
  

    const { msgAlert, user } = props
    console.log('this is user index', user)

    //console.log('Props in BidIndex', props)

    useEffect(() => {

        getAllPayees(user)
            .then(res => setPayees(res))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting payee',
                    message: messages.getPayeeFailure,
                    variant: 'danger',
                })
                // console.log("here is get all bids", getAllCars())
                console.log(err)
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }


    const columns = [{  
        Header: 'Name',  
        accessor: 'name'  
       }]
console.log('this is payee', payees)
const data = [
    {name: 'Jaden'},
    {name: 'Jimmy'}
]

const people = payees.data.data.results.map((payee, index) => (
    <tr>
        <td>#</td>
        <td>{payee.name}</td>
    </tr>

)) 
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
       
        <tbody>
         {people}
        </tbody>
      </Table>

    )
}



export default IndexPayees