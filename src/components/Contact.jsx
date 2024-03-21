import React from 'react'
import '../styles/Contact.css';
import msg from '../assets/msg.png';
import loc from '../assets/loc.jpg';
import phone from '../assets/phone.png';
import mail from '../assets/mail.jpg';


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "900c1b9f-c1e7-4b1f-90c5-18a30d8362ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
       <div className='contact-col'>
        <h3>Send us message <img src={msg} /></h3>
        <p>feel free to reach out through contact form or find our contact information below</p>
        <ul>
          <li><img src={mail} />hafsahussein1221@gmail.com</li>
          <li><img src={phone} />+251940027172</li>
          <li><img src={loc} />atobistera mesalemia</li>
          
        </ul>
       </div>
       <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name'placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your phone number' required />
          <label>Write Your Message here</label>
          <textarea name='message' rows="6" placeholder='enter your text' required />
          <button type='submit' className='btn dark-btn'>Submit</button>
        </form>
        <span>{result}</span>
       </div>

    </div>
  )
}

export default Contact