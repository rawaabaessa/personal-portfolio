import { Mail } from "lucide-react";
import Button from "./Button";
import ContactCard from "./ContactCard";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { useLang } from "../hooks/useLang";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { t } = useLang("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 md:px-10 bg-pink-50 dark:bg-dark-pink"
    >
      <Container>
        <div className="flex flex-col gap-15 ">
          <Heading title={t("contact.title")} isStillWhite />
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-4">
                  <Input
                    type={"text"}
                    name="name"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    type={"text"}
                    name="email"
                    value={formData.email}
                    placeholder={t("contact.email")}
                    onChange={handleChange}
                  />
                  <Input
                    type="textarea"
                    name="message"
                    placeholder={t("contact.message")}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4 text-white">
                  <ContactCard
                    type={"email"}
                    disc={"rawaabaessa@gmail.com"}
                    href={"mailto:rawaabaessa@gmail.com"}
                  >
                    <Mail size={24} />
                  </ContactCard>
                  <ContactCard
                    type={"whatsupp"}
                    disc={"967739665833+"}
                    href={"whatsapp://send?phone=+967739665833"}
                  >
                    <BsWhatsapp size={24} />
                  </ContactCard>
                  <ContactCard
                    type={"linkedin"}
                    disc={"linkedin.com/in/rawaa-baessa"}
                    href={"https://linkedin.com/in/rawaa-baessa"}
                  >
                    <CiLinkedin stroke="3" size={24} />
                  </ContactCard>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="filled" type="submit" disabled={loading}>
                  {" "}
                  {loading ? t("contact.sending") : t("contact.send")}
                </Button>
              </div>
              {status === "success" && (
                <p className="text-white text-sm mt-5">
                  {t("contact.statusSucc")}
                </p>
              )}

              {status === "error" && (
                <p className="text-white text-sm mt-5">
                  {t("contact.statusError")}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
