import HomeIcon from './Icons/HomeIcon'
import Symptoms from './Icons/Symptoms';
import TestYourself from './Icons/TestYourself';
import Preventions from './Icons/Preventions';
import Hospital from './Icons/Hospital';
import Emergency from './Icons/Emergency';
import Journal from './Icons/Journal';




const SideBar = () => {

    const SideBarData = [
        {id : 1 , name : 'Overview' , src : <HomeIcon />},
        {id : 2 , name : "Symptoms" , src : <Symptoms />},
        {id : 3 , name : "Test Yourself" , src : <TestYourself />},
        {id : 4 , name : "Preventions" , src : <Preventions />},
        {id : 5 , name : "Hospital" , src : <Hospital />},
        {id : 6 , name : "Emergency" , src : <Emergency />},
        {id : 7 , name : "Journal" , src : <Journal />}
    ]
    return (
        <div>
           <div className="w-24 h-screen fixed bg-blue-500">
            <h1 className="">Dashboard</h1>
           </div>
        </div>
    );
}


export default SideBar