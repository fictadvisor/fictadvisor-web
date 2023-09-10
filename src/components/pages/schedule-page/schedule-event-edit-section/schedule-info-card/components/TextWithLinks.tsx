import React, { FC } from 'react';
import { Box } from '@mui/material';

import Link from '@/components/common/ui/custom-link/CustomLink';
import theme from '@/styles/theme';

interface EventDisciplineLinkProps {
  infoText?: string;
  defaultText: string;
}

const TextWithLinks: FC<EventDisciplineLinkProps> = ({
  infoText,
  defaultText,
}) => {
  const linkifyText = (inputText: string) => {
    const linkRegex = /(\bhttps?:\/\/\S+\b)/gi;
    const parts = inputText.split(linkRegex);

    return parts.map((part, index) => {
      if (part.match(linkRegex)) {
        return <Link key={index} href={part} text={part} />;
      } else {
        return part;
      }
    });
  };

  return (
    <Box sx={{ typography: theme.typography.body1 }}>
      {infoText ? linkifyText(infoText) : defaultText}
    </Box>
  );
};

export default TextWithLinks;
