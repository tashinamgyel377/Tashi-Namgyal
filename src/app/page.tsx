import AboutMe from "@/component/About";
import Profile from "@/component/Profile";
import ServicesPage from "./services/page";
import ContactForm from "@/component/Contact";


export default function Home() {
  return (
    <main>
      <Profile/>
      <AboutMe/>
      <ServicesPage/>
      <ContactForm/>
    </main>
  )
}
