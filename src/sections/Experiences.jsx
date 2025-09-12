import { TimeLine } from '../components/TimeLine';
import {experiences} from "../constants"
const Experiences = () => {
  return (
    <div className=" relative w-full">
   <TimeLine data ={experiences}/>
    </div>
  )
}

export default Experiences;
