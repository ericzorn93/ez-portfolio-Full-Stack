import React from 'react';
import '../../assets/css/home.css';
import LazyHero from 'react-lazy-hero';
import MainImg from '../../assets/img/main-bg.jpg';
import Navigation from '../sub-components/Navigation';
import {
    Link
} from 'react-router-dom';

const Home = (props) => {
    return (
    <React.Fragment >
        <LazyHero imageSrc={MainImg} color = { "#1f1f1f"} opacity = {0.7} minHeight = {"100vh"}>
            <Navigation sidebarMarginTop={-340} />
            <div className="hero-text" >
                <h1 className={"home-intro"} > I'm Eric Zorn</h1>
                <h3 className={"home-about"}> Full - Stack Web Developer &amp; UX / UI Designer </h3>
                <button className={"intro-btn"}> <Link to={'/about'}> Learn More About Me </Link></button>
            </div>
        </LazyHero>
    </React.Fragment>
    )
};

export default Home;
