import React,{useState} from 'react';
import swal from 'sweetalert';

import './app.css';
 function Message(){
    
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [message,setMessage]=useState("");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const saveFullname = (e) => {
		setFullname(e.target.value)
	
	  };

      const savePhone = (e) => {
		setPhone(e.target.value)
	
	  };

      
    const saveMessage = (e) => {
		setMessage(e.target.value)
	
	  };

      const uploadFile = async (e) => {
        if(fullname===""){
          swal("Upload!", "Please fill in your name", "success");
        }else if(phone===""){
          swal("Upload!", "Please fill in your phone", "success");
        }
        else if(message===""){
            swal("Upload!", "Please fill in your message", "success");
          }
        else{
            e.preventDefault();
            
            swal("Upload!", "Successfull", "success");
            
        
           
          const {fullname} = e.target.elements;
          const full= {fullname:fullname.value};
          const inputfullname=full.fullname;
     const {phone}=e.target.elements;
     const pho={phone:phone.value};
     const inputphone=pho.phone;
     const {message}=e.target.elements;
      const mess={message:message.value};
      const inputmessage=mess.message;

          var raw = JSON.stringify({
            "fullname":inputfullname,
           "phone":inputphone,
           "message":inputmessage
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/sendmessage/sendmessage", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));





e.target.reset();

        }
       
      }

    return <div>
<section className="w3l-mockup-form">
    <h1>Alert SMS</h1>
    <div className="container"/>
        
        <div className="workinghny-form-grid">
            <div className="main-mockup">
                <div className="alert-close">
                    <span className="fa fa-close"></span>
                </div>
                <div className="w3l_form align-self">
                    <div className="left_grid_info">
                        <img src="images/image.svg" alt=""/>
                    </div>
                </div>
                <div className="content-wthree">
                    <h2>Send Sms</h2>
                    <p>Keep in touch by sending sms to anyone...</p>
                    <form onSubmit={uploadFile}>
                        <input type="text" className="form-control"  id="fullname"  name="fullname" placeholder="Enter Your Name"   onChange={saveFullname} />
                        <input type="text" className="form-control" id="phone"   name="phone"  placeholder="Enter Your number"  onChange={savePhone}/>
                        <input type="text" className="form-control" id="message"  name="message" placeholder="Enter Your Text"  onChange={saveMessage}/>
                        <button className="btn" type="submit">Send Message</button>
                
                    <div className="social-icons w3layouts">
                        <ul>
                            <li>
                                <a href="#url" className="facebook"><span className="fab fa-facebook"></span> </a>
                            </li>
                            <li>
                                <a href="#url" className="twitter"><span className="fab fa-twitter"></span> </a>
                            </li>
                            <li>
                                <a href="#url" className="pinterest"><span className="fab fa-pinterest"></span> </a>
                            </li>
                        </ul>
                    </div>
                    </form>
                </div>
                
            </div>
        </div>
        
    
    
    <div className="copyright text-center">
        <p className="copy-footer-29">© 2020 Well Subscribe form. All rights reserved | Design by <a
                    href="https://w3layouts.com">W3layouts</a></p>
    </div>
   
</section>





    </div>



}

export default Message;