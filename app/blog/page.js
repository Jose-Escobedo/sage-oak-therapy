
import BlogSection from '@/components/BlogSection';
import PageHeading from '@/components/PageHeading';

export const metadata = {
  title: 'Blog | Sage Oak Family Therapy',
  description:
    'Explore helpful articles and resources on individual and family therapy, mental health guidance, and answers to your therapy questions.',
};

export default function GuidancePage() {
  return (
    <>
      <PageHeading
              title="Sage Oak Therapy Blog"
              description="Where you can learn more about mental health"
              bgColor="bg-bashbright"
              tubeColors={['#b1876e', '#7a5e42']}
            />
      <BlogSection />
    </>
  );
}