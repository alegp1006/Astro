import { useEffect, useState } from "react";

//import emailjs from "@emailjs/browser";
//import { sendmail } from "../services/mail";

export function useForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useEffect(() => {
  //   emailjs.init({
  //     publicKey: `${import.meta.env.VITE_EMAILJS_USER_ID}`,
  //   });
  // }, []);

  const handleChangeForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const payload = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_ID,
      template_params: {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      },
    };
    //sendmail({ payload });
  };

  return { formData, setFormData, handleChangeForm, handleSendEmail };
}
