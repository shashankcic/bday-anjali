import React from 'react';
import ModalWish from '../../components/ModalWish';
import Particle from '../../components/Particle';
import AnjaliWish from '../../components/AnjaliWish';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import initialImageData from '../../data/initialImageData';
import './styles.css';
import { CardColumns } from 'react-bootstrap';

function Home() {
  return (    
    <div style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute' }}>
        <Particle />
      </div>
      <div className="vh-100 dt w-100 App-header">
        <div className="top white">
          <AnjaliWish />
        </div>
      </div>
      <div className=' bg-light-gray images mb0 pb5'>
        <h1 className='tc garamond f-subheadline pa5 pb0'>Birthday Wishes</h1>
        <h1 className='pa4 pt0 f3 lh-copy'>These are some of the people who wished you on twitter, I didn't really ask for much but these people are really amazing. When I asked it (with dead reach becuase of inactivity), I thought noone would reply, but people RTed it, replied and everything. It just showed that howsoever much toxic the social or the real world can be, there will always be these nice humans who'll make it worth living.</h1>
        <h1 className='pa4 pt0 f3 lh-copy'>You are amazing Anjali, you've always been the best person, friend, everything I could've asked for. You deserve everything, I wish I could've done all this on your birthday (& especially before you received that book 😂), but was impossible without opening my laptop which I couldn't until yesterday (umar ho gayi 😂). If it weren't for these wishes toh I'd have waited for next bday, but these people matter, and you matter to every one of them.<br /><span className='b i'> Toh enjoy yeh year, Don't become predictable, Disappoint me in new ways. Baaki sab toh is Life.</span></h1>
        <CardColumns className=''>
          {initialImageData.map(data => <ScrollFadeIn key={data.name} data={data} />)}
        </CardColumns>
        <ScrollAnimation duration={2} animateIn='wobble' animateOut='fadeOut' initiallyVisible={true}>
          <h1 className='tc garamond f-subheadline pa3 pb2 mb0'>The End?</h1>
        </ScrollAnimation>
        <ScrollAnimation delay={2500} animateIn='tada' initiallyVisible={false}>
          <h1 className='tc garamond f-subheadline pa5 mt1 pt2 pb0 mb0 light-gray'>No, Abhi kaise?</h1>
          <ModalWish className='dim'/>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Home;
