import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const spaceID = "3h5hf97v6hjf"
const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceID}`
const query = `
{
  jobCollection {
    items {
      company
    }
  }
}
`
const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_KEY)
  const [jobs, setJobs] = useState({})
  useEffect(() =>  {
    fetch(
      contentfulUrl,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_KEY}`
        },
        body: JSON.stringify({
          query
        })
      }
    ).then(res => res.json())
    .then(response => {
      console.log(response)
      setJobs(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className={styles.container}>
      <h1>Caden Chabot</h1>
    </div>
  )
}

export default Home
