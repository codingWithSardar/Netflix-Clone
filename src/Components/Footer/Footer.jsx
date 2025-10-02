import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={youtube_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={facebook_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Inverstor Relations</li>
                <li>Job</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Corporate Information</li>
                <li>Contact US</li>
            </ul>
            <p className="copyright-text">© 1998-2025 Netflix, Inc.</p>
        </div>
    )
}

export default Footer