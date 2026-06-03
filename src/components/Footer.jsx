import Container from "./Container";
import { FaGithub, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import SocialBtn from "./SocialBtn";
import { Mail } from "lucide-react";
import { useLang } from "../hooks/useLang";

const Footer = () => {
  const { t } = useLang("home");
  return (
    <footer className="px-6 pt-16 pb-6 md:px-10">
      <Container>
        <div className="bg-mid-pink text-white flex flex-col md:flex-row items-center justify-between gap-2 px-5 py-6 rounded-3xl">
          <p className="text-sm">{t("footer.built")}</p>
          <div className="flex items-center gap-3">
            <SocialBtn href={"https://github.com/rawaabaessa"}>
              <FaGithub size={20} />
            </SocialBtn>
            <SocialBtn href={"rawaabaessa@gmail.com"}>
              <Mail size={20} />
            </SocialBtn>
            <SocialBtn href={"whatsapp://send?phone=+967739665833"}>
              <FaWhatsapp size={20} />
            </SocialBtn>
            <SocialBtn href={"https://www.linkedin.com/in/rawaabaessa/"}>
              <FaLinkedin size={20} />
            </SocialBtn>
            <SocialBtn href={"https://www.tiktok.com/@rawaabaessa"}>
              <FaTiktok size={20} />
            </SocialBtn>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
