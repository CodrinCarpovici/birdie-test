import React, {useState, useEffect} from 'react'
import BarChart from '../components/BarChart'
import { Container } from '../styled/CareRecipient'
import axios from 'axios'

const CareRecipient = () => {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://localhost:8000/post`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <Container>
    </Container>
  )
}

export default CareRecipient