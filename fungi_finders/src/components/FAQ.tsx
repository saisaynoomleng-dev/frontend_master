import Image from 'next/image';
import Bounded from './Bounded';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import Title from './Title';

const FAQ = () => {
  return (
    <Bounded width="wide" className="space-y-3 bg-brown-900">
      <Title as="h2" size="sm" className="lg:col-span-full">
        Frequently Asked Questions
      </Title>

      <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-5">
        <div className="lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-2 bg-brown-600 rounded-lg p-4 pb-0 space-y-3">
          <div>
            <Image
              src="/start-foraging-1.png"
              width={500}
              height={300}
              priority
              alt="mushrooms in the basket"
              className="object-cover min-w-full rounded-sm"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Subtitle>What do i need to start mushroom foraging?</Subtitle>
            <Paragraph className="text-fs-300 text-justify">
              You&apos;ll need a local field guide, a sharp knife or scissors, a
              basket or mesh bag for collecting, and paper bags for separating
              specimens. Bring a small brush for cleaning, wear sturdy boots,
              and carry a GPS device or compass to track your location. A camera
              is also helpful to document your finds.
            </Paragraph>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-2 bg-brown-600 rounded-lg p-4 space-y-3">
          <div className="flex flex-col gap-3">
            <Subtitle>How can I identify edible mushrooms?</Subtitle>
            <Paragraph className="text-fs-300 text-justify">
              Learn from experienced foragers and reliable guidebooks – never
              rely on apps alone. Study each mushroom&apos;s specific features
              like cap shape, gill structure, stem characteristics, and spore
              prints. Start with easily identifiable species that have no
              poisonous lookalikes, and never eat anything unless you&apos;re
              completely certain of its identification.
            </Paragraph>
          </div>

          <Image
            src="/identify-mushrooms-1.png"
            width={500}
            height={300}
            priority
            alt="comparing mushroom describing in the textbook"
            className="object-cover min-w-full rounded-sm"
          />
        </div>

        <div className="lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-full bg-brown-600 rounded-lg p-4 space-y-3">
          <Image
            src="/best-seasons-1.png"
            width={500}
            height={300}
            priority
            alt="mushrooms growing on the ground with leaves around it"
            className="object-cover min-w-full rounded-sm"
          />

          <div className="flex flex-col gap-3">
            <Subtitle>
              What are the best seasons for mushroom foraging?
            </Subtitle>
            <Paragraph className="text-fs-300 text-justify">
              Spring is ideal for morels, late summer brings chanterelles and
              boletes, and fall is peak season for most mushrooms including
              oysters and hen of the woods. Some species can even be found in
              winter, especially in milder climates. Each season offers
              different varieties, so year-round foraging is possible.
            </Paragraph>
          </div>
        </div>

        <div className="lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-full bg-brown-600 rounded-lg p-4 space-y-3">
          <Image
            src="/best-seasons-1.png"
            width={500}
            height={300}
            priority
            alt="mushrooms growing on the ground with leaves around it"
            className="object-cover min-w-full rounded-sm"
          />

          <div className="flex flex-col gap-3">
            <Subtitle>
              What are the best seasons for mushroom foraging?
            </Subtitle>
            <Paragraph className="text-fs-300 text-justify">
              Spring is ideal for morels, late summer brings chanterelles and
              boletes, and fall is peak season for most mushrooms including
              oysters and hen of the woods. Some species can even be found in
              winter, especially in milder climates. Each season offers
              different varieties, so year-round foraging is possible.
            </Paragraph>
          </div>
        </div>

        <div className="lg:col-start-1 lg:row-start-3 lg:col-span-2 lg:row-span-1 bg-brown-600 rounded-lg p-4 flex gap-3 lg:flex-row flex-col">
          <div className="flex-1">
            <Image
              src="/mushrooms.png"
              width={500}
              height={300}
              priority
              alt="mushrooms growing on the ground with leaves around it"
              className="object-cover min-w-full rounded-sm "
            />
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <Subtitle>Where can I find foraging spots?</Subtitle>
            <Paragraph className="text-fs-300 text-justify">
              Look in deciduous forests, especially near oak and maple trees,
              and in damp, shaded areas. Fallen logs and dead trees are often
              productive spots. Only forage on public lands where it&apos;s
              allowed, and always check local regulations. Remember to get
              permission for private property and keep your best locations
              private to prevent over-harvesting.
            </Paragraph>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default FAQ;
