'use client';

export default function PageHeading({
  title,
  description = '',
  bgColor = 'bg-white',
  tubeColors = ['#b1876e', '#7a5e42'], 
}) {
  return (
    <section
      className={`${bgColor} relative mt-36 md:mt-40 flex flex-col items-center py-24 px-6 text-center overflow-hidden`}
      aria-label="Page Heading"
    >
      
      <div
        className="absolute left-[-200px] top-10 w-[330px] h-[190px] md:w-[800px] md:h-[150px] opacity-20 rounded-full z-0"
        style={{ backgroundColor: tubeColors[0] }}
      />
      <div
        className="absolute right-[-200px] top-32 w-[300px] h-[150px] md:w-[600px] md:h-[130px] opacity-20 rounded-full z-0"
        style={{ backgroundColor: tubeColors[1] }}
      />

     
      <h1 className="relative z-10 font-serif text-5xl md:text-7xl font-bold text-[#3d2f23] leading-tight max-w-4xl">
        {title}
      </h1>

      {description && (
        <p className="relative z-10 mt-6 max-w-2xl text-lg md:text-xl text-[#5a4a3b]">
          {description}
        </p>
      )}
    </section>
  );
}
