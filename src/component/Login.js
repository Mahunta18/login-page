import React from "react"
import '../component/Style.css'
import Group63 from '../images/Group 63.png'
import Group214 from '../images/Group 214.png'
import Group216 from '../images/Group 216.png'
import Rectangle from '../images/Rectangle 37.png'
import appStore from '../images/app-store-icon-png-14 1.png'
import logo from '../images/logo 1 (1).png'

function Login(props) {

    return(
       <div>
         <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-6">
                   <div className="card">
                       <div className="card-body">
                        
                       <div className="col-md-12 text-center">
                         <h3 className="display-6 mt-3 mb-4">Sign In</h3>
                         </div>
                         <hr></hr>
                         <h5 className="display-9">Sign into your account</h5>
                            <form>
                        <div className="form-group mt-4 mb-3">
                            <label htmlFor="username">Email ID</label>
                            <input type="email" name="username" id="username"  className="form-control" required placeholder="xxxxxxxxxx" />
                        </div>

                        <div className="form-group mt-2 mb-2">
                        <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"  className="form-control" required placeholder="xxxxxxxxxx" />
                        </div>

                        <div className="forgot mt-4">
                            <p>Forgot Password</p>
                        </div>

                        <div className="form-group mt-4 mb-2">
                        <input type="submit" value="Sign in" className="btn col-md-12" />
                        </div>
                    </form>
                    </div>
           
                <div className="lastLine">
                    <p>New to varja? <span>Sign Up Now</span></p>
                    
                </div>
            </div>
        </div>
    </div>
    

<div className="second">
<div className="row">
        <div className="col-md-6 offset-md-12">
            <div className="card" style={{backgroundColor : "#00459f", color : "white"}}>
                <div className="card-body">
                    <div className="col-md-12 text-center">
                         <p className="display-6 mb-2 mt-1">Features</p>
                    </div>
                        <div className="img1">
                            <img src={Group63} alt="group 63" width={60}/> 
                        <div className="text1">
                            <h4>Digitize</h4>
                            <p>A Bird view of the entire Biomedical Operations</p>
                
                        </div>
                            <img src={Group214} alt="" width={60}/>
                        <div className="text1">
                            <h4>Track</h4>
                             <p>Tarck the product life cycle and service history.</p>
                        </div>
                             <img src={Group216} alt="" width={60}/>
                        <div className="text1">
                             <h4>Biomedical Budget</h4>
                                <p>regular and save budget through analysis data and informed</p>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        <div className="app">
        <p>Download Our App <span> <img src={Rectangle} alt="reactangle" />
        </span> <span><img src={appStore} alt="" /></span></p>
        </div>

    <div className="footer">
        <img src={logo} alt="" width={70}/>
        <span className="space">@ 2020 VIZI, All Rights Reserved</span>
        <p className="right">Terms & conditions | FAQs </p>
    </div>
</div>

    )
}

export default Login