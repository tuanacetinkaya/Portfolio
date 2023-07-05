import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // TODO: migrate to use an actual backend form
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {}

  const handleSubmit = e => {}

  return <div>Contact</div>;
};

export default Contact;
