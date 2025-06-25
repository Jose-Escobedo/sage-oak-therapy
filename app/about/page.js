import PageHeading from '@/components/PageHeading';
import AboutPageSection from '@/components/AboutPageSection';
import Link from 'next/link';

export default function Specialties() {
  return (
    <>
      <PageHeading
        title="About Us"
        description="I'm a culturally attuned therapist dedicated to helping you feel truly seen, deeply understood, and empowered to thrive in every area of your life."
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />
<AboutPageSection />
    </>
  );
}
