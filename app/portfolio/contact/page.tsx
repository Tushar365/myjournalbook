import ContactScroll from '../components/ContactScroll';
import MagicalHeader from '../components/MagicalHeader';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8 pb-20 min-h-screen flex flex-col">
      <MagicalHeader />
      
      <div className="flex-1 flex items-center justify-center animate-fade-in-up">
        <ContactScroll />
      </div>
    </main>
  );
}
