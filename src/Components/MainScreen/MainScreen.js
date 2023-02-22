import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MainScreenStyle.css'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {FaStar, FaShareAlt, FaVolumeUp} from 'react-icons/fa'

const MainScreen = () => {
    const navigateToPickYourSideScreen = useNavigate();
  return (
    <div className='mainScreen'>
        <header className='label'>
            <div className='label-letter label-item'><span className='label-letter-item'>T</span></div>
            <div className='label-letter label-item'><span className='label-letter-item'>i</span></div>
            <div className='label-letter label-item'><span className='label-letter-item'>c</span></div>
            <div className='label-letter label-item'><span className='label-letter-item'>T</span></div>
            <div className='label-letter label-item'><span className='label-letter-item'>a</span></div>
            <div className='label-letter label-item'><span className='label-letter-item'>c</span></div>
            <div className='toe label-item'><span className='label-letter-item'>Toe</span></div>
        </header>

        <main onClick={()=> navigateToPickYourSideScreen('pickyourside')}>
            <AiOutlinePlayCircle size='120px' id='playButton'/>
        </main>

        <footer>
            <div className='footer-items'>
                <FaVolumeUp size='40px' className='footer-icons' id='volume'/>
            </div>
            <div className='footer-items'>
                <FaStar size='40px' className='footer-icons' id='rate'/>
            </div>
            <div className='footer-items'>
                <FaShareAlt size='40px' className='footer-icons' id='share'/>
            </div>
        </footer>
    </div>
  )
}

export default MainScreen
