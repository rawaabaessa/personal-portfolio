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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schema";

const ContactSection = () => {
  const { t } = useLang("home");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });
  const [status, setStatus] = useState(null); // success | error | null

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-4">
                  <Input
                    type={"text"}
                    name="name"
                    placeholder={t("contact.name")}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                  <Input
                    type={"text"}
                    name="email"
                    placeholder={t("contact.email")}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                  <Input
                    type="textarea"
                    name="message"
                    placeholder={t("contact.message")}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                  <div className="mt-4">
                    <Button
                      variant="filled"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>{t("contact.sending")}</span>
                        </div>
                      ) : (
                        t("contact.send")
                      )}
                    </Button>
                  </div>
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
