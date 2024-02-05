import { useState,useEffect } from "react";
import { FaEnvelope, FaPhoneAlt,FaAngleRight } from "react-icons/fa";
import { FaLocationDot,FaEarthAmericas } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const[sendMeassege,setSendMessage]=useState(true)
  const [formErrors, setFormErrors] = useState({});
  const contactInfo = [
    {
      id: 1,
      name: "Location",
      icon: <FaLocationDot />,
      text: ["Behind Gokul Estate, Shed No. B/49, Govardhan Bus Hub, Kathwada-Singarva Rd, Ahmedabad, Gujarat 382430"],
      color: "bg-[#EA1E00]",
    },
    {
      id: 2,
      name: "Make a Call",
      icon: <FaPhoneAlt />,
      text: ["+91 9702395641", "+91 8320668223"],
      color: "bg-[#000671]",
    },
    {
      id: 3,
      name: "Our Email",
      icon: <FaEnvelope />,
      text: ["matoshreemetal2022@gmail.com", "kkmodi5641@Gmail.Com"],
      color: "bg-[#0077B5]",
    },
  ];
  const handleEmailClick = () => {

    let email="alloysrajesh@gmail.com"
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = (phone) => {
  let  phoneNumber="+916351709542"
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };


  const initialFormData = {
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be a number";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }



    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setSendMessage(false)
    
       // Perform form submission logic here, e.g., sending data to the server
       emailjs.send('service_iszhlaw', 'template_3kpsgau', formData, 'PltsC3u7FAloZ9D2f')
       .then(response => {
   
         alert('Sent Message Successfully to Matoshree metal & alloys!', response)
       
         setSendMessage(true)
         setFormData(initialFormData);
         setFormErrors({});
       }, error => {
        
         alert('FAILED...',error)
         console.log("error",error)
       });
     }
  };
 

     const contactData = [
       {
         id: 1,
         heading: "Phone Number",
         value: ["+91 6351709542","+91 7340402970"],
         icon: <FaPhoneAlt />,
         event:handlePhoneClick
       },
       {
         id: 2,
         heading: "EMAIL",
         value: ["alloysrajesh@gmail.com "],
         icon: <FaEnvelope/>,
         event:handleEmailClick
       },
       {
         id: 3,
         heading: "Website",
         value: ["www.rajeshalloys.com"],
         icon: <FaEarthAmericas />,

       },
       {
         id: 4,
         heading: "Address",
         value: [
           "D-88, GOPAL CHARAN INDUSTRIAL GLOBE , NEAR ROAD NO.5, GIDC-KATHWADA, AHMEDABAD, Ahmedabad, Gujarat, 382430",
         ],
         icon: <FaLocationDot />,
       },
     ];

    
  return (
    <div className="w-full bg-[#EEF3F9] border px-[5%] mt-7 py-[5%] mb-7">
      <div className=" flex items-center place-items-center flex-wrap md:flex-nowrap">
        <div className=" h-auto md:h-screen flex-[100%] md:flex-[40%]  pt-5 ">
          <h3 className="text-[2.3rem] md:text-[3rem] font-semibold font-Roboto">Get In Touch</h3>
          <p className="text-1.3rem mt-3 mb-3 font-poppins">
          We've got answers! If you have any questions, feedback, or inquiries, feel free to get in touch with us using the Contact Info. Our team will get back to you as soon as possible.
          </p>
          <hr />

          <div className="mt-7">
   <div className=" font-poppins text-[15px] font-medium">
   <h3 className="text-[18px] font-Roboto font-semibold">Ahmedabad Office</h3>

   <div className="flex justify-start items-center gap-2 mt-2">
   <FaLocationDot className="text-[20px] w-[30px]" />
   <p className="pr-2">Behind Gokul Estate, Shed No. B/49, Govardhan Bus Hub, Kathwada-Singarva Rd, Ahmedabad, Gujarat 382430</p>
   </div>
   <div className="flex justify-start items-center gap-2 mt-2">
   <FaPhoneAlt className="text-[20px] " />
   <p className="">
   Kamlesh Modi: +91 9702395641 / 8320668223
   </p>
   </div>
   <div  className="flex justify-start items-center gap-2 mt-2">
   <FaEnvelope className="text-[20px] " />
   <div className="">
   <p className="">matoshreemetal2022@gmail.com</p>
   <p className="mt-1">kkmodi5641@Gmail.com</p>
   </div>
   </div>
   </div>
   <div className=" font-poppins text-[15px] font-medium mt-3">
   <h3 className="text-[18px] font-Roboto font-semibold">Mumbai Office</h3>

   <div className="flex justify-start items-center gap-2 mt-2">
   <FaLocationDot className="text-[20px] w-[30px]" />
   <p className="pr-2">
   B14,B Wing,Ground Floor, Shivam Building, Kamathipura 11Th Lane. Mumbai Center, Mumbai 400008</p>
   </div>
   <div className="flex justify-start items-center gap-2 mt-2">
   <FaPhoneAlt className="text-[20px] " />
   <div className="">
   <p className="">
   Prabhuram Modi: +91 9323646347
   </p>
   <p className="mt-1">
   Hitesh Modi: +91 7425007638
   </p>
   </div>
   
   </div>
   <div  className="flex justify-start items-center gap-2 mt-2">
   <FaEnvelope className="text-[20px] " />
   <div className="">
   <p className="">matoshree1979@gmail.com</p>
   </div>
   </div>
   </div>

         

           {/* {contactInfo.map((item) => {
              return (
                <div className="flex items-start gap-6 mb-7 h-[100px]">
                  <div
                    className={`text-[1.5rem] p-4 rounded ${item.color} text-white `}
                  >
                    {item.icon}
                  </div>
                  <div className="self-start w-full">
                    <h3 className="text-[1.3rem] leading-none mb-2 font-poppins font-semibold">
                      {item.name}
                    </h3>
                    {item.text.map((item) => {
                      return <p className="text-[#666] mb-1 w-[100%]  md:w-[80%] font-Oswald">{item}</p>;
                    })}
                  </div>
                </div>
              );
            })}*/}
          </div>
        </div>
        <div className="flex-[100%] md:flex-[60%] bg-white h-full rounded-[10px] ml-2 px-[5%] py-[6%]">
          <h3 className="text-[2rem] md:text-[2.4rem] font-bold text-[#232323]">
            Send us a message
          </h3>
          <p className="text-[#666] mt-4">
          Contact us using the form below,and we'll be happy to assist you.
          </p>
          <div className="mt-10">
            <form className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                  <div className="mb-4">
                    <input
                      className={`h-[50px] w-full hover:border-mainRed hover:border bg-[#EEF3F9] border-0 focus:outline-0 focus:border focus:border-mainRed rounded pl-2 ${
                        formErrors.fullName ? "border-red-500" : ""
                      }`}
                      placeholder="Your Full Name*"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500">{formErrors.fullName}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      className={`h-[50px] w-full hover:border-mainRed hover:border bg-[#EEF3F9] border-0 focus:outline-0 focus:border focus:border-mainRed rounded pl-2 ${
                        formErrors.phoneNumber ? "border-red-500" : ""
                      }`}
                      placeholder="Phone Number*"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {formErrors.phoneNumber && (
                      <p className="text-red-500">{formErrors.phoneNumber}</p>
                    )}
                  </div>
                  <div className="">
                    <input
                      className={`h-[50px] w-full hover:border-mainRed hover:border bg-[#EEF3F9] border-0 focus:outline-0 focus:border focus:border-mainRed rounded pl-2 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Your Email Address*"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <p className="text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="h-full">
                    <textarea
                      className={`h-full w-full hover:border-mainRed hover:border bg-[#EEF3F9] border-0 focus:outline-0 focus:border focus:border-mainRed rounded pl-2 ${
                        formErrors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Your Message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Additional form field validation for "Message" can be added here if needed */}
                </div>
              </div>
              <div className="flex items-center justify-between mt-8 flex-wrap ">
              
                <div className="contact-sub-btn">
                  <button
                    className="bg-[#EA1E00] px-3 py-3 text-white flex whitespace-nowrap items-center text-[1.3rem] rounded"
                    type="submit"
                    onClick={handleSubmit}
                  >
                  {
                    sendMeassege?<span className="flex items-center gap-2">
                    Send Message <FaAngleRight />
                    </span>:'Sending...'
                  }
                  
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs