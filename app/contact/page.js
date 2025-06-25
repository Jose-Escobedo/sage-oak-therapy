import ContactSection from '@/components/ContactSection';
import AppointmentForm from '@/components/AppointmentForm';
import PageHeading from '@/components/PageHeading';

export default function ContactPage() {


  return (
    <>
      <PageHeading
                    title="Contact Us"
                    description="Healing happens in safe, supportive spaces. We're honored to walk alongside you."
                    bgColor="bg-bashbright"
                    tubeColors={['#b1876e', '#7a5e42']}
                  />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <ContactSection />
        
      </main>
      <AppointmentForm contact={true}/>
    </>
  );
}