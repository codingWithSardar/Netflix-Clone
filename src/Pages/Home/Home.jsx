import React from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <div className="hero">
          <img src= {hero_banner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src = {hero_title} alt="" className='caption-img' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam eius ducimus, quia accusamus nihil suscipit dolorem cupiditate vitae neque?</p>

            <div className="hero-btns">
              <button className='btn'><img src= {play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src= {info_icon} alt="" />More info</button>
            </div>

            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={'Blockbuster Movies'} category={"top_rated"}/>
          <TitleCards title={'Only on Netfllix'} category={"popular"}/>
          <TitleCards title={'Upcoming'} category={"upcoming"}/>
          <TitleCards title={'Top Pics for You'} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home