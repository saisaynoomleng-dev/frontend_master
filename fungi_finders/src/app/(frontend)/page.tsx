import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';
import Paragraph from '@/components/Paragraph';
import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { INFO_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: INFO_QUERY });

  return (
    <section>
      {/* hero */}
      <Bounded width="wide" className="text-center hero-bg">
        <Title size="lg" as="h1">
          Discover the World of{' '}
          <span className="text-brand-500 block">Mushroom Foraging</span>
        </Title>
        <Paragraph>
          Mushroom foraging is the art and science of identifying and collecting
          wild mushrooms.{' '}
        </Paragraph>
        <Paragraph>
          It&apos;s a practice that combines outdoor exploration, botanical
          knowledge, and culinary adventure. Foragers venture into forests,
          fields, and even urban green spaces to discover these hidden
          treasures.{' '}
        </Paragraph>
        <Paragraph>
          But beware - this hobby requires careful study and respect for nature,
          as some mushrooms can be dangerous if misidentified.
        </Paragraph>
      </Bounded>

      <Bounded width="wide" className="bg-brown-900">
        <Title as="h2" size="sm">
          The joys of mushroom foraging
        </Title>
        <Paragraph>
          Foraging for mushrooms can be a rewarding experience for many reasons.
          People may venture off into the woods to forage for mushrooms because
          it allows them to connect with nature, enjoy the thrill of the hunt,
          and savor the satisfaction of finding a hidden culinary treasure.{' '}
        </Paragraph>

        <div className="grid md:grid-cols-3 gap-5">
          {posts?.infos?.map((info) => (
            <div
              key={info.title}
              className="p-5 bg-brown-500 flex flex-col gap-2"
            >
              {info.mainImage?.asset?.url && (
                <Image
                  src={urlFor(info.mainImage.asset.url)
                    .width(1000)
                    .height(1000)
                    .auto('format')
                    .url()}
                  width={200}
                  height={200}
                  alt={info.mainImage.alt || ''}
                  priority
                  className="rounded-sm object-cover min-w-full mx-auto"
                />
              )}

              <Subtitle className="text-brand-500">{info.title}</Subtitle>

              <Paragraph className="text-fs-300 text-justify">
                {info.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Bounded>

      <Bounded width="small" className="bg-green-600 text-center min-w-full">
        <Title as="h2" size="lg">
          Start your <span className="text-brand-500">Foraging Adventure!</span>
        </Title>
        <Paragraph>
          Whether you&apos;re seeking a deeper connection with nature, a new
          outdoor hobby, or simply love the idea of finding your own food,
          mushroom foraging offers a uniquely rewarding experience.
        </Paragraph>
      </Bounded>

      <Bounded width="wide" className="grid md:grid-cols-2 bg-brown-900 gap-3">
        <div className="flex flex-col gap-3">
          <Image
            src={`/get-to-know.jpg`}
            width={600}
            height={600}
            priority
            alt="a man on his knees harvesting a mushroom in the forest"
            className="object-cover min-w-full mx-auto flex-1"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Subtitle>Get to Know Your Mushrooms</Subtitle>
          <Paragraph>
            Successful and safe mushroom foraging begins with a deep
            understanding of the species you&apos;ll encounter in the wild - not
            just what the edible ones look like, but their toxic look-alikes,
            seasonal patterns, and preferred habitats.
          </Paragraph>
          <Paragraph>
            It can feel like a big task, but we&apos;ve got a handy reference
            guide to help you out!
          </Paragraph>
          <CallToAction href="/mushroom-guide" className="place-self-start">
            <span className="sr-only">
              Learn more about foraging mushrooms from our
            </span>{' '}
            Reference Guide
          </CallToAction>
        </div>
      </Bounded>

      <Bounded width="wide" className="grid md:grid-cols-2 gap-3 ">
        <div className="flex flex-col gap-3 flex-1 w-full">
          <Subtitle>Connect with Nature</Subtitle>
          <Paragraph>
            Experience the beauty of the great outdoors while foraging for
            mushrooms with fellow enthusiasts.
          </Paragraph>

          <CallToAction href="/mushroom-guide" className="place-self-start">
            Learn More
            <span className="sr-only">
              about our foraging mushrooms from our reference guide
            </span>{' '}
          </CallToAction>
        </div>

        <div>
          <Image
            src={`/connect.jpg`}
            width={600}
            height={600}
            priority
            alt="a man on his knees harvesting a mushroom in the forest"
            className="object-cover min-w-full mx-auto flex-1"
          />
        </div>
      </Bounded>
    </section>
  );
}
