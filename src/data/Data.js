import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

/*

Fetch datas from backend NodeJS

*/

export default function GetUsersData() {
  const [data, setData] = useState()
  const userId = parseInt(useParams().id)

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((obj) => {
        setData(obj.data)
      })
  }, [userId])

  return data
}
