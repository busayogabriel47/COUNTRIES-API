import {BsMoon} from 'react-icons/bs';



const Navbar = () => {
    
    const moon = document.querySelector(".mood");
if(moon){
    moon.addEventListener('click', function(){
        document.body.classList.toggle('light-theme')
    })
}
   

    return (
        <>
            <div className="header">
                <div className="where">
                    <h3>Where in the world?</h3>
                </div>
                <div className="dark-mode">
                <BsMoon className='mood'/><span>Dark Mode</span>
                </div>
            </div>
        </>
    )
}

export default Navbar;