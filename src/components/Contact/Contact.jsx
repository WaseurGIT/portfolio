import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        (res) => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Email sent successfully!",
            showConfirmButton: false,
            timer: 2000,
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again later.",
          });
        },
      );
  };

  const handleGithubClick = () => {
    window.open("https://github.com/WaseurGIT", "_blank");
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1DDT6vsN5t", "_blank");
  };
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/md-waseur-rahman-bb5752298/",
      "_blank",
    );
  };
  const handleTwitterClick = () => {
    window.open("https://twitter.com/WaseurRahman31", "_blank");
  };

  useGSAP(() => {
    gsap.fromTo(
      "#get_in_touch",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      ".contact_description",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      },
    );
    gsap.fromTo(
      "#email",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      "#social",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      },
    );
    gsap.fromTo(
      form.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      },
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center --bg-primary px-4 py-10 mb-12">
      <div className="w-full max-w-6xl --bg-secondary shadow-xl rounded-lg p-8 md:p-16 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1
            id="get_in_touch"
            className="text-4xl md:text-5xl font-serif --text-primary"
          >
            Get in Touch
          </h1>

          <p className="--text-secondary font-medium contact_description">
            I’d like to hear from you!
          </p>

          <p className="--text-secondary max-w-sm contact_description">
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>

          {/* Email */}
          <div
            id="email"
            className="flex items-center gap-3 pt-6 --text-secondary"
          >
            <FiMail className="text-xl" />
            <span className="cursor-pointer">waseurrahman31@gmail.com</span>
          </div>

          {/* Social Icons */}
          <div
            id="social"
            className="flex items-center gap-4 pt-4 --text-secondary"
          >
            <FaFacebookF
              onClick={handleFacebookClick}
              className="cursor-pointer hover:text-[#8b3f1f]"
            />
            <FaInstagram className="cursor-pointer hover:text-[#8b3f1f]" />
            <FaGithub
              onClick={handleGithubClick}
              className="cursor-pointer hover:text-[#8b3f1f]"
            />
            <FaLinkedinIn
              onClick={handleLinkedinClick}
              className="cursor-pointer hover:text-[#8b3f1f]"
            />
            <FaXTwitter
              onClick={handleTwitterClick}
              className="cursor-pointer hover:text-[#8b3f1f]"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm --text-secondary">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full border border-gray-400 bg-transparent p-2 mt-1 focus:outline-none focus:border-[#8b3f1f]"
              />
            </div>

            <div>
              <label className="text-sm --text-secondary">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full border border-gray-400 bg-transparent p-2 mt-1 focus:outline-none focus:border-[#8b3f1f]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm --text-secondary">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-400 bg-transparent p-2 mt-1 focus:outline-none focus:border-[#8b3f1f]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm --text-secondary">Message</label>
            <textarea
              rows="5"
              name="message"
              required
              className="w-full border border-gray-400 bg-transparent p-2 mt-1 focus:outline-none focus:border-[#8b3f1f]"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#8b3f1f] text-white px-8 py-2 hover:bg-[#6e2f16] transition cursor-pointer hover:rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
