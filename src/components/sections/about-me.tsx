import Image from 'next/image';

import Headshot from '/public/images/headshot.jpg';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={Headshot}
              alt="Fullpose"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Hey! Let me introduce myself👋
          </Typography>
          <Typography>
            I'm Selassie. I recently graduated from the University of Pennsylvania with a BSE in Computer Science and a minor in Economics.
          </Typography>
          <Typography>
            I began my journey into programming in 2016, and immeadiately fell in love with the problem solving aspect of it immeadiately.
            After 8 years of coding, I have worked on a variety of projects, ranging from simple websites to complex sis.
          </Typography>
          <Typography>
            When I'm not in school or work, you can find watching or playing sports (mainly soccer, football, and tennis), playing poker,
            or religiously stalking and updating my{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LETTERBOXD}
            >
              Letterboxd{' '}
            </Link>
            and{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.BELI}
            >
              Beli
            </Link>
            .
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
