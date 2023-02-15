import './About_us.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchData = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const data = response.data
        setData(data)

      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchData()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchData()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
      <div className="description">
        <h1>About Us</h1>
        <img src={data.image} alt="Headshot" className="headshot" />
        <p>
          {data.text}         
        </p>
      </div>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
