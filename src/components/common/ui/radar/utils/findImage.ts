const mapper = {
  '15': 'url("/assets/radar-background/image-1.png")',
  '13-lab': 'url("/assets/radar-background/image-2.png")',
  '13-prak': 'url("/assets/radar-background/image-3.png")',
  '13-lab-prak': 'url("/assets/radar-background/image-4.png")',
  '11': 'url("/assets/radar-background/image-5.png")',
  '11-mobile': 'url("/assets/radar-background/mobile-11.png")',
  '13-mobile': 'url("/assets/radar-background/mobile-13.png")',
  '15-mobile': 'url("/assets/radar-background/mobile-15.png")',
};
const keyPhrases = {
  laborant: 'Відповідність лабораторних',
  practician: 'Відповідність практичних',
};

const getBackgroundImage = (labels, screen = 'desktop') => {
  if (screen === 'mobile') {
    if (labels.length === 11) {
      return mapper['11-mobile'];
    } else if (labels.length === 15) {
      return mapper['15-mobile'];
    } else {
      return mapper['13-mobile'];
    }
  }
  if (labels.length === 11) {
    return mapper['11'];
  } else if (labels.length === 15) {
    return mapper['15'];
  } else {
    if (keyPhrases.laborant in labels) {
      return mapper['13-lab'];
    } else if (keyPhrases.practician in labels) {
      return mapper['13-prak'];
    } else {
      return mapper['13-lab-prak'];
    }
  }
};

export default getBackgroundImage;
