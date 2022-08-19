import HomeIcon from './Icons/HomeIcon'
import Symptoms from './Icons/Symptoms';
import TestYourself from './Icons/TestYourself';
import Preventions from './Icons/Preventions';
import Hospital from './Icons/Hospital';
import Emergency from './Icons/Emergency';
import Journal from './Icons/Journal';
import Logo from './Icons/Logo'


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
           <div className="absolute flex flex-col justify-between py-8 h-screen bg-[#FFFFFF]">
            <div className='flex justify-center items-center'>
                <Logo />
            </div>
            <div className='flex flex-col'>
            {SideBarData.map((links) => (
                <div key={links.id} className = 'flex justify-evenly h-full px-4'>
                    <div className='flex flex-col items-center my-4 gap-1 text-purple text-[15px] font-semibold'>
                    <div>{links.src}</div>
                    <h1>{links.name}</h1>
                    </div>
                </div>
            ))}
            </div>
            <div>
                <p></p>
            </div>
           </div>
        </div>
    );
}


export default SideBar