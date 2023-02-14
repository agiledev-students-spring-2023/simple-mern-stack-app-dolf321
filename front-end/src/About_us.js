import { Link } from 'react-router-dom'
import './About_us.css'
import dp from './headshot.jpg'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <div className='description'>
        <h1>About Us</h1>
        <img src={dp} alt="Headshot" className="headshot"/> 
        <p>
          Hello I am a Class of 2024 Computer Engineering student at New York
          University Abu Dhabi(NYUAD) focused on creating novel solutions with
          technology to improve ineffecient industries in the MENA region.
        </p>
      </div>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
