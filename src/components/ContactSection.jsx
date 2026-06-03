import { Mail } from "lucide-react";
import Button from "./Button";
import ContactCard from "./ContactCard";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { useLang } from "../hooks/useLang";

const ContactSection = () => {
  const { t } = useLang("home");
  return (
    <section className="px-6 py-16 md:px-10 bg-pink-50 dark:bg-dark-pink">
      <Container>
        <div className="flex flex-col gap-15 ">
          <Heading title={t("contact.title")} isStillWhite />
          <div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-4">
                <Input type="text" placeholder={t("contact.name")} />
                <Input type="text" placeholder={t("contact.email")} />
                <Input type="textarea" placeholder={t("contact.message")} />
              </div>
              <div className="flex-1 flex flex-col gap-4 text-white">
                <ContactCard type={"email"} disc={"rawaabaessa@gmail.com"}>
                  <Mail size={24} />
                </ContactCard>
                <ContactCard type={"whatsupp"} disc={"+967739665833"}>
                  <BsWhatsapp size={24} />
                </ContactCard>
                <ContactCard
                  type={"linkedin"}
                  disc={"linkedin.com/in/rawa-abaessa/"}
                >
                  <CiLinkedin stroke="3" size={24} />
                </ContactCard>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="filled"> {t("contact.send")} </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
