import logo from "../Media/logo.png";
import earnlogo from "../Media/earnlogo.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Details, Chevrolet, Fiat, Fort, Honda } from "./Details";
import { Sai, Vanshika, Rahul } from "./video";
import HomeNavbar from "../Components-Navbar/HostNavbar";
import Footer from "../Footer/Footer";

import styles from "./Host.module.css";
// import "./responsive.css";

import file from "../Media/file.png";
import car from "../Media/car.png";
import earn from "../Media/earn.jpeg";
import carcoverage from "../Media/carcoverage.jpeg";
import pocket from "../Media/pocket.jpeg";
import flexibility from "../Media/flexibility.jpeg";




let arr = [];
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner4.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner-1.png");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner2.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner3.jpg");



function Host() {

    const [detailsArrow, setDetailsArrow] = useState("https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png");
    
    const [value, setValue] = useState(15);
    const [total, setTotal] = useState(45000);
    const [video, setVideo] = useState(null);
    const [image, setImage] =useState(arr[0]);
    const [select, setSelect] = useState(<Chevrolet />);



useEffect(()=>{
    var Datanav = JSON.parse(localStorage.getItem("loggedInUser")) || { "name": "Signup/login" };
document.getElementById("sign").innerHTML=Datanav.name;

},[])




useEffect(()=>{
    let i = 1;
    setInterval(()=>{
        if (i === 4) {
            i = 0;
        }
        setImage(arr[i]);
       
      
        i++;

    }, 5000);


},[])

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value == "Chevrolet") {
            setSelect(<Chevrolet />);
            setTotal(45000)
        }
        else if (e.target.value == "Fiat") {
            setSelect(<Fiat />);
            setTotal(48000)
        }
        else if (e.target.value == "Fort") {
            setSelect(<Fort />)
            setTotal(51000)
        }
        else {
            setSelect(<Honda />)
            setTotal(60000)
        }

    }




    const handleArrow = () => {
        if (detailsArrow === "https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png") {
            setDetailsArrow("https://www.zoomcar.com/zap/subscribe/build/3c157e2ab203052562fc508f65ac5104.png");
        }
        else {
            setDetailsArrow("https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png");

        }
    }

    const handleVideo = () => {
        if (video == null) {

        }
        else {
            setVideo(null);
            document.getElementById("page").style.backgroundColor = "rgb(255, 255, 255)";
        }
    }







    return <>
        <div className={styles.page} id="page" onClick={handleVideo}>
        <div className={styles.navbar}>
        <div className={styles.logo}>
            <span className={styles.menu}>☰</span>
            
                <span className={styles.logoIcon}>
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                     </Link></span>
        
        </div>
        <div className={styles.rightbar}>
            <div>
                <p>FAQs</p>
            </div>
            <div>
                <p>Refer & Earn</p>
            </div>
            <div>
               <p > <Link  to={"/login"} id="sign" className={styles.sign}></Link></p>
            </div>
            <div>
               <button > <Link to={"/Earning"}>START EARNING</Link></button>
            </div>

 
        </div>
       
    </div>
            

            <div className={styles.earningContainer}>
                <div className={styles.box11}>
                    <div className={styles.box1} >
                        <p>How much could you earn by sharing your car?</p>
                        <div className={styles.select}>
                            <select name="" className={styles.select1} onChange={handleChange}>

                                <option value="Chevrolet">Chevrolet</option>
                                <option value="Fiat">Fiat</option>
                                <option value="Fort">Fort</option>
                                <option value="Honda">Honda</option>

                            </select>

                            <select name="" id="select2">
                                {select}

                            </select>
                        </div>

                        <p>Sharing days :</p>
                        <div className={styles.main}>

                            <input type="range" orient="vertical"  className={styles.range} min="0" max="30" step="1" value={value}   onTouchMove={(e)=>{setValue(e.target.value)}}  onChange={(e)=>{setValue(e.target.value)}}></input>
                            <p>{value} Days</p>
                            <div className={styles.line} ></div>

                        </div>


                        <p className={styles.font}>Your monthly earning upto</p>

                        <div className={styles.rupees}>
                            <p>₹{value * (total / 30)}</p>
                        </div>


                    </div>
                    <div className={styles.box2}>
                        <div>
                            <img src={earnlogo} alt="" />
                        </div>
                        <div >
                            <div><p className={styles.font}>Earn Joining Bonus of Upto</p></div>

                            <div className={styles.rupees} > <p>
                                ₹5000
                            </p>

                            </div>

                        </div>

                    </div>

                </div>
                <div className={styles.box22} id="box2">

                    <img className={styles.image} src={image} alt="" />
                    <div className={styles.transperentBox}>
                        <div className={styles.firstBox}>
                            <p className={styles.sharing_is_earning}>Sharing is Earning</p>
                            <p className={styles.share}>Share your car and earn upto ₹50000</p>
                            <button className={styles.button}><Link to={"/Earning"} style={{color:"white"}}>START EARNING</Link></button>
                        </div>

                        <div className={styles.emptyBox}>
                            <h1>jdckdcn</h1>
                            <h3>jncjkdcn</h3>

                        </div>
                    </div>

                </div>
            </div>
            <button className={styles.smallscreenButton}><Link to={"/Earning"} style={{color:"white"}}>START EARNING</Link></button>
            <div className={styles.steps}>
                <p>3 SIMPLE STEPS TO START SHARING AND EARNING</p>
                <hr  className={styles.hr}/>
                <div>

                    <div>
                        <div>
                            <img src={file} alt="" />

                        </div>
                        <p className={styles.font}>Tell us about yourself</p>
                        <p>Share your car details with us throuth this <a href="">form</a> and shedule a car inspection from our experts</p>

                    </div>
                    <div>
                        <div>
                            <img src={car} alt="" />
                        </div>
                        <p  className={styles.font}>Setup for sharing</p>
                        <p>Signup on the app and provide your PAN, Bank and Address details and you are now ready to share your car</p>

                    </div>
                    <div>
                        <div>
                            <img  className={styles.earn} src={earn} alt="" />
                        </div>

                        <p  className={styles.font}>Share and earn</p>
                        <p>Select the sharing dates for your car. Our experts will visit you to install the safty devices and you are ready to earn</p>

                    </div>




                </div>
            </div>
            <div  className={styles.whyShare}>
                <div  className={styles.why}><p>Why share your car with us?</p></div>
                <div>
                    <img src={carcoverage} alt="" />


                    <p  className={styles.font}>Major damage and repair coverage</p>


                    <p>We provide damage cover and handle repairs in case of damage during a booking</p>
                </div>
                <div>
                    <img src={pocket} alt="" />
                    <br />
                    <br />
                    <p  className={styles.font}>Earning from home</p>


                    <p>Our hosts earn upto Rs.50000 per month along with added bounces for sharing their cars</p>
                </div>
                <div>
                    <img src={flexibility} alt="" />
                    <br />
                    <br />
                    <p  className={styles.font}>Power of flexibility</p>


                    <p>Using our mobile app, you can share your convenience and shedule</p>
                </div>
                <div>
                    <img src={car} alt="" />
                    <br />
                    <br />
                    <p  className={styles.font}>Safe, secured and smoot</p>


                    <p>We install safety and keyless entry devices to make sharing your car a safe, secured and smoooth process</p>
                </div>
            </div>
           
            <div  className={styles.videos}>
                <p>HEAR FROM OUR HOSTS</p>
                <div>
                    <div>
                        <div  className={styles.video}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/SaiKrishna.png"></img>
                        </div>
                        <div  className={styles.play} onClick={() => { setVideo(<Sai />);document.getElementById("popup").style.visibility="visible" } }>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/play.png"  />
                        </div>

                        <div  className={styles.subBox}>
                            <p>Sai Krishna, Loan Officer, Hyderabad </p>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg"/>
                            <p  className={styles.font}>Passive income for me</p>
                            <p className={styles.hide}>Around 10-15 % of the amount I receive goes to EMI, rest of the amount is a passive income for me</p>


                        </div>
                    </div>
                    <div>
                        <div  className={styles.video}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/Vanshika.png"></img>
                        </div>
                        <div  className={styles.play} onClick={() => { setVideo(<Vanshika />);document.getElementById("popup").style.visibility="visible" }}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/play.png"  />
                        </div>

                        <div  className={styles.subBox}>
                            <p>Vanshika, HR, Mumbai</p>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg"  />
                            <p  className={styles.font}>Car is paying for itself</p>
                            <p className={styles.hide}>I am in love with this idea and enjoying my time with Zoomcar host. My car is paying for itself and that's great benefit</p>

                        </div>
                    </div>
                    <div>
                        <div  className={styles.video}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/Rahul.png"></img>
                        </div>
                        <div  className={styles.play} onClick={() => { setVideo(<Rahul />);document.getElementById("popup").style.visibility="visible" }}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" />
                        </div>

                        <div  className={styles.subBox}>
                            <p>Rahul, Banglore</p>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg"  />
                            <p  className={styles.font}>Great Return n investment</p>
                            <p className={styles.hide}>Average I earn ₹20-26k per month, that's a great return on investment on my car </p>

                        </div>
                    </div>

                </div>
            </div>

            <div  className={styles.gift}>
                <img src="https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/ZH_referral_banner_app_02.jpg" alt="" />
            </div>
            <div  className={styles.questions}>
                <p>STILL HAVE QUESTIONS?</p>
                <div>
                    <div>
                        <div  className={styles.question}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/renters-ico.svg" />
                            <p >Do I need to meet the guests of my car?</p>
                            <div  className={styles.arrow}><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div  className={styles.question}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/earn-ico.svg" />
                            <p >How much will I earn?</p>
                            <div className={styles.arrow}><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png"  /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div  className={styles.question}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/get-paid-ico.svg" />
                            <p >How will I get Paid?</p>
                            <div className={styles.arrow}><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div  className={styles.question}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/car-price-ico.svg" />
                            <p >How is the price of my car decided</p>
                            <div className={styles.arrow}><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div  className={styles.question}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/challans-ico.svg" />
                            <p >What happens if my car gets challans or traffic fines while my car is being shared?</p>
                            <div className={styles.arrow}><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div  className={styles.question}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/setting-ico.svg" />
                            <p >Why are safety devices installed?</p>
                            <div className={styles.arrow}><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div  className={styles.confused}>

                <p>Still confused? </p>
                <p>We are here to help</p>
                <p>FAQs</p>

                <div  className={styles.bottom}>

                    <img src="https://doav52ie4cv60.cloudfront.net/images/never-stop.svg" />

                </div>

            </div>
            <div  className={styles.More}>
                <p>More about zoomcar host</p>
                <img src={detailsArrow} onClick={handleArrow} className={styles.arrow} />
                {/* <img src="https://www.zoomcar.com/zap/subscribe/build/3c157e2ab203052562fc508f65ac5104.png" class="host-questions-accordion-block-header-arrow-container-image"> */}
            </div>
            <div>
                {detailsArrow === "https://www.zoomcar.com/zap/subscribe/build/3c157e2ab203052562fc508f65ac5104.png" ? <Details style={{}} /> : null}
            </div>
            <div>
                <div id="popup" className={styles.popup}  onClick={()=>{setVideo(null);document.getElementById("popup").style.visibility="hidden"}} >
                   
                </div>
                <div>
                    {video}
                    </div>
                  
               
            </div>

        </div>
        {/* <Footer /> */}



    </>
}

export default Host