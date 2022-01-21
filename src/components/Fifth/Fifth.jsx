import React from 'react';
import './Fifth.css';
import PeopleSection from '../../assets/footerPic.png'
function Fifth() {
    return (
        <div id='FithContainer'>
            <p id='fifthP1'>Supported by real people</p>
            <p id='fifthP2'>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
            <div  id='FithContainerImg'>
                <img src={PeopleSection}  id='FithContainerImage' data-aos="zoom-in" data-aos-duration="3000"  data-aos-offset="200"
    data-aos-delay="50"/>
            </div>
        </div>
    )
}

export default Fifth
