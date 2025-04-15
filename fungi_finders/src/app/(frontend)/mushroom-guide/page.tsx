import Bounded from '@/components/Bounded';
import FAQ from '@/components/FAQ';
import MushroomType from '@/components/MushroomType';
import Paragraph from '@/components/Paragraph';
import SeasonType from '@/components/SeasonType';
import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { MUSHROOMS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const MushroomGuide = async () => {
  const { data: mushrooms } = await sanityFetch({ query: MUSHROOMS_QUERY });

  return (
    <div>
      <Bounded className="text-center hero-bg">
        <Title as="h1" size="lg">
          Quick reference{' '}
          <span className="block text-brand-500">Mushroom Guide</span>
        </Title>
      </Bounded>

      <Bounded className="bg-green-600 p-10 min-w-full grid md:grid-cols-2 gap-3">
        <Image
          src="/connect.jpg"
          alt="a tiny mushroom growing in the green forest floor"
          priority
          width={500}
          height={500}
          className="object-cover min-w-full rounded-sm"
        />
        <div className="flex flex-col gap-3">
          <Title as="h2">Where to look</Title>
          <Paragraph>
            Different species grow in different types of environments.
          </Paragraph>
          <Paragraph>
            Forests are always a good starting place, though, with a wide range
            of species that grow in them.
          </Paragraph>
          <Paragraph>
            If you&apos;re after something specific, you can use our reference
            guide below to help you out.
          </Paragraph>
        </div>
      </Bounded>

      <Bounded className="bg-brown-900">
        <Title as="h2" size="sm">
          Get to know your mushrooms
        </Title>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {mushrooms.map((m) => (
            <div
              key={m.slug?.current}
              className="p-3 bg-brown-700 rounded-lg flex flex-col gap-2"
            >
              <Subtitle className="text-fs-400">{m.name}</Subtitle>

              <div className="flex gap-2">
                {m.season && (
                  <SeasonType season={m?.season}>{m?.season}</SeasonType>
                )}
                {m.type && (
                  <MushroomType type={m?.type}>{m?.type}</MushroomType>
                )}
              </div>

              <Paragraph>{m.description}</Paragraph>

              <div className="bg-brown-500 p-2 rounded-lg text-fs-300">
                <span className="font-semibold">Important Note: </span>
                {m.note}
              </div>
            </div>
          ))}
        </div>
      </Bounded>

      <FAQ />
    </div>
  );
};

export default MushroomGuide;
