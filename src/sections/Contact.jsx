import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/contact/ContactExperience.jsx";
import { about } from "../constants/index.js";

const acc_key = import.meta.env.VITE_APP_ACCESS_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(event.target);
    Object.keys(form).forEach((item) => {
      formData.append(item, form[item]);
    });
    formData.append("access_key", acc_key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
        setStatus({
          type: "success",
          message: "Message sent. I will get back to you soon.",
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Email me directly instead.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in touch — let’s connect"
          sub="💬 Have a role, product, or idea? Let’s talk"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-5 sm:p-8 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* <div className="flex flex-col gap-2 text-white-50 text-sm">
                  <a href={about.emailHref} className="hover:text-white transition-colors">
                    {about.email}
                  </a>
                  <a href={about.phoneHref} className="hover:text-white transition-colors">
                    {about.phone}
                  </a>
                </div> */}

                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {status.message && (
                  <p
                    className={
                      status.type === "success" ? "text-emerald-300" : "text-red-300"
                    }
                    role="status"
                  >
                    {status.message}
                  </p>
                )}

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? "Sending..." : "Send Message"}</p>
                    <div className="arrow-wrapper">
                      <img
                        src={`${import.meta.env.BASE_URL}images/arrow-down.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-72 md:min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
