 import { useState } from 'react';//import useState hook

   function Contact() {
    // initialize state for form data
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });
// handle input changes and update state
     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };
// handle form submission demonstrates state usage doesnt actually ubmits
     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
      console.log('Form Data:'formData);
     };

     return (
       <div style={{ padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button type="submit">Send Message</button>
         </form>
       </div>
     );
   }

export default Contact;
