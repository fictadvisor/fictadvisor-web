import { Mobile11 } from '@/components/common/ui/radar/utils/radar-background/11-mobile';
import { Mobile12 } from '@/components/common/ui/radar/utils/radar-background/12-mobile';
import { Mobile13 } from '@/components/common/ui/radar/utils/radar-background/13-mobile';
import { Mobile15 } from '@/components/common/ui/radar/utils/radar-background/15-mobile';
import { Lab12Desktop } from '@/components/common/ui/radar/utils/radar-background/lab-12-desktop';
import { Lect11Desktop } from '@/components/common/ui/radar/utils/radar-background/lect-11-desktop';
import { LectLab13Desktop } from '@/components/common/ui/radar/utils/radar-background/lect-lab-13-desktop';
import { LectPract13Desktop } from '@/components/common/ui/radar/utils/radar-background/lect-pract-13-desktop';
import { LectPractLab15Desktop } from '@/components/common/ui/radar/utils/radar-background/lect-pract-lab-15-desktop';
import { Pract12Desktop } from '@/components/common/ui/radar/utils/radar-background/pract-12-desktop';

const getBackgroundImage = (
  labels: string[],
  isMobile: boolean,
  tags: string[],
) => {
  if (isMobile)
    switch (labels.length) {
      case 11:
        return <Mobile11 />;
      case 12:
        return <Mobile12 />;
      case 13:
        return <Mobile13 />;
      case 15:
        return <Mobile15 />;
    }
  else
    switch (labels.length) {
      case 11:
        return <Lect11Desktop />;
      case 12:
        if ('Laborant' in tags) {
          return <Lab12Desktop />;
        }
        return <Pract12Desktop />;
      case 13:
        if ('Laborant' in tags) {
          return <LectLab13Desktop />;
        }
        return <LectPract13Desktop />;
      case 15:
        return <LectPractLab15Desktop />;
    }
};

export default getBackgroundImage;
