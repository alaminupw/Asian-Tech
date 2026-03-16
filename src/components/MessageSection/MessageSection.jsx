import React from "react";
import './MessageSection.css';
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";

const MessageSection = () => {
    return(
        <div className="MessageSection">
           <div className="container">
                <div className="row g-2 g-md-5">  {/* এটা ঠিক আছে */}
                    <div className="col-12 col-sm-6 col-md-7 col-lg-7 col-xl-7 pt-5 pb-5">
                        <div className="bg-white shadow p-3 border rounded-2">  {/* inner div-এ bg + padding */}
                            <h2 className="text-center mb-5 mt-3 contact-title">Ask Us Anything Here</h2>
                            <form>
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <label>Name:</label>
                                        <input type="text" class=" custom-input"/>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <label>Email:</label>
                                        <input type="email" class=" custom-input"/>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label>Phone number:</label>
                                        <input type="text" class=" custom-input"/>
                                    </div>
                                    <div class="col-md-12 mb-4">
                                        <label>Message:</label>
                                        <textarea class=" custom-input message-box"></textarea>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <button class="send-btn">SEND NOW</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5 pt-5 pb-5">
                    <div className="p-3 ">
                        <div className="row call-us align-items-center">
                            <div className="col-2 mb-5 text-center">
                                <span className="text-muted"><BiPhoneCall size={55} /></span> 
                            </div>
                            <div className="col-10 mb-5">
                                <div><h5>Call for help now!</h5></div>
                                <div><h2 className="fw-bold">+880 1234 56789</h2></div>
                            </div>
                            <div className="col-2 mb-5 text-center">
                                <span className="text-muted"><TfiEmail size={50} /></span> 
                            </div>
                            <div className="col-10 mb-5">
                                <div><h6>Say hello</h6></div>
                                <div><h4 className=""> hello@arome.com</h4></div>
                            </div>
                            <div className="col-2 mb-5 text-center">
                                <span className="text-muted"><SlLocationPin size={50}/></span> 
                            </div>
                            <div className="col-10 mb-5">
                                <div><h6>Address</h6></div>
                                <div><h5 className="">House-18, (2nd Floor), Road-03, <br></br>Sector:04, Uttara, Dhaka-1230</h5></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageSection;