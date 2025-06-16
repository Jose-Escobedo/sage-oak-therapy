import PageHeading from '@/components/PageHeading';
import TherapySliderSection from '@/components/TherapySliderSection';
import Link from 'next/link';

export default function Specialties() {
  return (
    <>
      <PageHeading
        title="Specialties"
        description="Explore the range of therapy services we offer to support your well-being."
        bgColor="bg-bashbright"
        tubeColors={['#b1876e', '#7a5e42']}
      />

     <TherapySliderSection showBackgroundCircle={false} />
    </>
  );
}
