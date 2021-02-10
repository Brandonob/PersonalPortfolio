import React, { Component, } from 'react';
import emailjs, { init } from "emailjs-com";
init('user_a2eO6xZSmNLBjX2Day31P')

class Contact extends Component {
   state={
      subject: "",
      fromName: "",
      emailMessage: "",
      replyEmail: "",
   }

   handleForm = async (e) => {
      let {replyEmail, subject, fromName, emailMessage} = this.state

      e.preventDefault();
      emailjs.send(
        "service_xtyfwjz",
        "template_pgthcni",
        {
         subject: subject,
         from_name: fromName,
         message: emailMessage,
         from_email: replyEmail,
        },
        "user_a2eO6xZSmNLBjX2Day31P"
      ).then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
      
    };

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" id="contactForm" name="contactForm" onSubmit={this.handleForm}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={(e) => this.setState({fromName: e.target.value})}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={(e) => this.setState({replyEmail: e.target.value})}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={(e) => this.setState({subject: e.target.value})}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" defaultValue="" onChange={(e) => this.setState({emailMessage: e.target.value})}></textarea>
                  </div>

                  <div>
                     <button className="submit" type="submit" noValidate>Submit</button>
                     {/* <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span> */}
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
