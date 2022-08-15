import React from 'react'
import Layout from "@components/Layouts/MainLayout";
import { Carousel} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components"

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', blur);
window.addEventListener('scroll', revealText);

/* ------Reveals from the bottom when scrolling----- */
function reveal(){
    var reveals = document.querySelectorAll('.reveal', '.textBlur');

    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }

        else{
            reveals[i].classList.remove('active');
        }
    }
}
/* -----------Reveals blur when scrolling----------- */
function blur(){
    var reveals = document.querySelectorAll('.textBlur');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }

        else{
            reveals[i].classList.remove('active');
        }
    }
}

function revealText(){
    var reveals = document.querySelectorAll('.show-up');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }

        else{
            reveals[i].classList.remove('active');
        }
    }
}

function technology() {
  return (
    <Layout>
    
    {/* ------Title w/ Text Slide Down Effect HERO IMG----- */}
    <Title data-bs-spy="scroll" data-bs-target="#nav-sections" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" id="Top">
        <div className="content-wrapper" style={{height:'80vh'}}>
            <div className="text-wrapper">
                <div><h1 style={{fontSize:'5rem'}}><span id="text">Vngle</span><br/>TECH</h1></div>
                <div className="text-effect">
                    <div><span>Post</span></div>
                    <div><span>Verify</span></div>
                    <div><span>Record</span></div>
                </div>
            </div>
            <StaticImage style={{position:"absolute"}} src="../images/technology/headerTechPage.jpeg" className="backgroundImg"/>
        </div>
    </Title>
   
   {/* -------------------Navigation Bar ---------------------- */}
<Navbar id="nav-sections" className="navbar" style={{position:'sticky', top:'0'}}>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link" href="#Top">Top</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#section-1">Mobile App</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#section-2">CMS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#section-3">Blockchain</a>
            </li>
        </ul>
</Navbar>

<Scroll data-bs-spy="scroll" data-bs-target="#nav-sections" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
    
    
    {/* ------------------ Moble App ------------------ */}
    <Title id="section-1">
            <div className="content-wrapper" style={{height:"90vh"}}>
                <div className="text-wrapper">
                    <h1><span id="text">Introducing</span><br/>Vngle APP</h1>
                </div>
                <StaticImage style={{position:"absolute"}} src="../images/technology/Mobile.jpg" className="backgroundImg"/>
            </div>
    </Title>
    <Title>
        <div className="content-wrapper" style={{height:"90vh"}}>
            <div className="text-wrapper">
                    <p className="mobile-text reveal active" style={{padding:'3rem', margin: '8rem', fontStyle:'italic', fontSize:'1.25rem'}}>
                        Our Mobile Team has contributed in providing with a 
                        camera feature, gallery, & location as well as using blockchain.<br/>
                        This can be uploaded and reviewed by the CMS team which
                        will then be posted to the official website. <br/>
                    </p>
            </div>
            <StaticImage style={{position:"absolute"}} src="../images/technology/Record-2.jpeg" className="backgroundImg"/>
        </div>
    </Title>
    <Section style={{background:'#ab7f75'}}>
        <div className="container">
            <div className="cards" style={{display:"flex"}}>
                <div className="text-card" style={{background:'#60544b', borderRadius:'1rem'}}>
                    <h3>Camera</h3>
                    <p>
                        <br/>
                        The user will be asked for permission to use the camera.
                    </p>
                </div>
                <div className="text-card" style={{background:'#60544b', borderRadius:'1rem'}}>
                    <h3>Gallery</h3>
                    <p>
                        <br/>
                        Users will get access to their gallery to upload any content from videos to pictures
                    </p>
                </div>
                <div className="text-card" style={{background:'#60544b', borderRadius:'1rem'}}>
                    <h3>Location</h3>
                    <p>
                        <br/>
                        Users will be asked for permission to access their location to 
                        know where the content takes place
                    </p>
                </div>
            </div>
        </div>
    </Section>
    <Mobile>
            <div className="container reveal active">
                <div className="inner">
                    <h1 style={{fontFamily:'Inter, sans-serif'}}>Download the App Now !</h1>
                    <h4>
                        &<br/>Take Part of<br/>
                        Grassroots Community 
                    </h4>
                    <button className="btn btn-primary">Download</button>
                </div>
            </div>
    </Mobile>


{/* ---------- Content Management System ---------- */}

    <Title id="section-2">
        <div className="content-wrapper" style={{height:"90vh"}}>
        <h2 className="reveal active" id="title" style={{transition:'all 1s ease'}}>CMS</h2>
            <div className="text-wrapper" style={{letterSpacing:"7px"}}>
                <div className="blur-wrapper">
                        <h1 className="textBlur" style={{MozTransition:'4s'}}>Content</h1>
                        <h1 className="textBlur" style={{MozTransition:'5s'}}>Management</h1>
                        <h1 className="textBlur" style={{MozTransition:'6s'}}>System</h1>
                </div>
            </div>
            <StaticImage style={{position:"absolute"}} src="../images/technology/blur-code.jpeg" className="backgroundImg"/>
        </div>
    </Title>
    <Section>
        <div className="container">
            <h2 style={{textAlign:"center", paddingTop:"2rem"}}>Strapi</h2>
            <div className="cards" style={{display:"flex"}}>
                <div className="text-card" style={{borderRadius:'1rem'}}>
                    <h3>Registration & Login</h3>
                    <p>
                        <br/>
                        The CMS has produced a registration and login page using strapi. 
                    </p>
                </div>
                <div className="text-card" style={{borderRadius:'1rem'}}>
                    <h3>User Authentication</h3>
                    <p>
                    <br/>
                       The cms team is able to check for users authentication using strapi. 
                       Users can sign up with their google account or other emails to get access
                       to stories and other content.
                    </p>
                </div>
                <div className="text-card" style={{borderRadius:'1rem'}}>
                    <h3>Download Content</h3>
                    <p>
                        <br/>
                        Once you sign up, you're able to download any content. 
                        You also have the option to download from any media format! 
                    </p>
                </div>
            </div>
        </div>
    </Section>

    {/* -----------Carousel for CMS------------ */}
    <Cms style={{background:'#686a67'}}>
        <Carousel>
            <Carousel.Item>
                <p>Our CMS team recieves the content, which is then reviewed and edited</p>
                <StaticImage id="img"src="../images/technology/Step5.png"/>
            </Carousel.Item>

            <Carousel.Item>
                <p>Once it is Vngle-verified</p>
                <StaticImage id="img" src="../images/technology/Step6.png"/>
            </Carousel.Item>

            <Carousel.Item>
                <p>It is then sucessfully published</p>
                <StaticImage id="img" src="../images/technology/Step7.png"/>
            </Carousel.Item>
        </Carousel>
    </Cms>
    {/* -------------------Blockchain-------------------*/}

       <Title id="section-3">
        <div className="content-wrapper" style={{height:"70vh"}}>
            <div className="text-wrapper text-reveal">
                <h1 className="show-up" style={{zIndex:"10", letterSpacing:'4px'}}>Blockchain</h1>
            </div>
            <StaticImage style={{position:"absolute"}} src="../images/technology/Blockchain-orange.jpeg" className="backgroundImg"/>
        </div>
    </Title>

    {/*-----------Carousel for Blockchain-------------- */}
    <Cms>
        <Carousel>
            <Carousel.Item>
                <p>A reporter can capture a video using our app</p>
                <StaticImage id="img" src="../images/technology/Step1.png"/>
            </Carousel.Item>


            <Carousel.Item>
                <p>A ledger is created from content's metadata (Location & Time)</p>
                <StaticImage id="img" src="../images/technology/Step2.png"/>
            </Carousel.Item>


            <Carousel.Item>
                <p>A new block is created to contain the ledger</p>
                <StaticImage id="img" src="../images/technology/Step3.png"/>
            </Carousel.Item>


            <Carousel.Item>
                <p>It is then added to the existing blockchain</p>
                <StaticImage id="img" src="../images/technology/Step4.png"/>    
            </Carousel.Item>
        </Carousel>
    </Cms>
</Scroll>
</Layout>
  )
}

const Title = styled.div`
   .content-wrapper{
       display:flex;
       align-items:center;
       position: relative;
       color:white;
   }


   .text-effect{
       height:5.125rem;
       overflow:hidden;
       font-size:3.5rem;
       font-weight: 100;
       margin-left: 10rem;
       margin-bottom: 5rem;
       letter-spacing: 3px;
   }

   .text-effect > div span{
       padding: 0.3rem 1rem;
       height: 3.125rem;
       margin-bottom:1.875rem;
       display:block;
   }

   .text-effect div:first-child{
       animation: slide 7s linear infinite;
   }

@keyframes slide{
       0%{margin-top: -240px}
       5%{margin-top: -160px}
       35%{margin-top: -160px}
       40%{margin-top: -80px}
       65%{margin-top: -80px}
       70%{margin-top: 0px}
       99.99%{margin-top: 0px}
       100%{margin-top: -240px}
   }

   .backgroundImg{
       width:100%;
       height:100%;
       z-index:0; 
   }

   .text-wrapper{
       z-index:10;
       display:flex;
       align-items:center;
   }

   h1{
       font-family: Inter, sans-serif;
       padding:1rem;
       font-weight: 400;
       font-size: 4rem;
   }

   #text{
       font-size:3rem;
       font-weight: 100;
   }
//---------------------REVEAL TEXT BLUR --------------------------
   .textBlur{
       transition: 1s;
       -webkit-transition:1s;
       -moz-transition:1s;
       animation:reveal-blur 5s linear forwards;
       opacity: 0;
       filter: blur(5px);
   }

   .textBlur.active{
    opacity:1;
    filter:blur(0);
   }

   //---------------------REVEAL FROM BOTTOM --------------------------
   
   .reveal{
    position: relative;
    transform: translateY(150px);
    opacity:0;
    transition: all 1.5s ease;
    }

    .reveal.active{
    transform: translateY(0px);
    opacity:1;
    }
    //-----------------------------------------------------------------


    #title{
        z-index: 11;
        letter-spacing: 4rem;
        font-size: 5rem;
        font-weight: lighter;
        display:flex;
        justify-content:center;
        vertical-align:top;
    }

// ----------------------REVEAL LETTER BY LETTER FROM LEFT--------------------------

    .show-up{
        overflow:hidden;
        opacity:0;
    }

    .show-up.active:last-of-type{ animation: reveal-it 7s linear forwards;}

    @keyframes reveal-it{
        0%{ opacity: 0; width: 0px;}
        10%{ opacity: 0; width: 0px;}
        20%{ opacity: 0; width: 0px;}
        30%{ opacity: 1; width: 375px;}
        80%{ opacity: 1;}
        100% { opacity: 1; width: 375px;}
    }
`



const Cms = styled.div`
   
   display:flex;
   justify-content:center;
   text-align:center;
   height: 20rem;
   background-color:black;
   p{
       color:white;
       font-weight:300;
   }

   #img{
       padding: 0rem 4rem 0 4rem;
   }
`

const Mobile = styled.div`
   display:flex;
   justify-content:center;
   text-align:center;
   color:white;
   background-color:black;
   overflow:hidden;
   .container{
       padding: 70px 0;
   }

   .inner{
       overflow:hidden;
       padding:0.4rem;
   }

   .inner > h1{
       text-align:center;
       font-size:3.5em;
   }

   .inner > button{
       margin-top:3rem;
       padding: 1em 2.5em;
       font-size:1em;
       border-radius: 4em;
       border:none;
   }

   .reveal{
    position: relative;
    transform: translateY(150px);
    opacity:0;
    transition: all 1.5s ease;
    }

    .reveal.active{
    transform: translateY(0px);
    opacity:1;
    }
`

const Section = styled.div`
    background: #686a67;
    color: white;

    .cards{
        display:flex;
    }

    .cards .text-card{
        background: #4f5c6c;
        margin: 1.25rem;
        padding: 1.25rem;
    }

    @media (max-width: 46.25rem){
        h2{ font-size: 5rem;}

        .cards{flex-direction:column;}
    }
`

const Scroll = styled.div `
   
`

const Navbar = styled.div`
z-index: 15;
position: sticky;
background: #67646c;
//background-image: linear-gradient(to right, rgb(255, 231,122), rgb(255, 217,46), rgb(255, 231,122));
.nav-link{
    color: #e2ded8;
    font-size: 1rem;
    font-weight: 600;
}
`
export default technology