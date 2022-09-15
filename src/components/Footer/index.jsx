import './style.scss'
import LogoWhite from '../../assets/logo_white.svg'



function Footer(){
    return (
        <footer className='footer'>
            <img className="logoWhite" src={LogoWhite} alt="logo kasa en blanc" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer