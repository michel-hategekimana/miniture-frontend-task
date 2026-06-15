import ContactMap from "../components/ContactMap";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";

export default function Contact() {
  return (
    <main className="mx-auto w-[92%] py-20">
      <ContactHero />
      <ContactMap />
      <ContactForm />
    </main>
  );
}
