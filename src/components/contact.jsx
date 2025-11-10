import './css/contact.css'
function Contact(){
    return(
        <section className="contact">
            <h2 className="heading"data-aos="zoom-out-down">Contact <span>Me</span></h2>
            <form action="https://formsubmit.co/svsundhara2004@gmail.com" method="POST">
                <div className="input-box">
                    <div className="input-field" data-aos="fade-right">
                        <input type="text" name='name' placeholder="Full Name" required />
                        <span className="focus"></span>
                    </div>
                     <div className="input-field"data-aos="fade-left">
                        <input type="email" name='email' placeholder="Email Address" required />
                        <span className="focus"></span>
                    </div>
                </div>
                 <div className="input-box">
                    <div className="input-field" data-aos="fade-right">
                        <input type="number" name='number' placeholder="Mobile Number" required />
                        <span className="focus"></span>
                    </div>
                     <div className="input-field"data-aos="fade-left">
                        <input type="text" name='subject' placeholder="Email Subject" required />
                        <span className="focus"></span>
                    </div>
                </div>
                 <div className="textarea-field"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                       <textarea name="message" id="" cols={30} rows={10} placeholder="Your Message" required></textarea>
                       <span className="focus"></span>
                    </div>
                    <div className="btns">
                        <button type="submit" className='sub'>Submit</button>
                            

                    </div>

                  
            </form>
            <div className="social">
                    <a href="tel:+917305851354"><img src="phn.jpg" alt="email icon" className='media phn'/>Phn no: 73058 51354</a>
                       <a href="https://wa.me/7305851354" target="_blank"><img src="wtp.jpg" alt="email icon" className='media'/>Whatsapp</a>
                       <a href="https://www.instagram.com/im_sundhara_/" target="_blank"><img src="indeed.jpg" alt="email icon" className='media'/>Indeed</a>
                       <a href="https://www.linkedin.com/in/sundharavathana0608" target="_blank"><img src="in.png" alt="email icon" className='media'/>Linked-in</a>
            </div>
                  
            
        </section>
    )
}
export default Contact;