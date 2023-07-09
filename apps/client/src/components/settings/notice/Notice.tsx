'use client';

import { IconButton, styleToken, Typography, ArrowDown, ArrowUp } from '@oseek/ui';
import { Container } from '../../layout';
import * as S from './Notice.css';

type Props = {
  id: number;
  title: string;
  date: string;
  content: string;
  open: boolean;
  onClick: (id: number) => void;
};

export const Notice = ({ id, title, date, content, open, onClick }: Props) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className={S.Container}>
      <section className={S.Title} onClick={handleClick}>
        <Container padding="0 10px 0 0">
          <p className={S.Date}>{date}</p>
          <Typography variant="B2" style={{ marginTop: 4 }}>
            {title}
          </Typography>
        </Container>
        <NoticeIconButton open={open} />
      </section>
      <NoticeDescription open={open} content={content} />
    </div>
  );
};

const NoticeIconButton = ({ open }: Pick<Props, 'open'>) => (
  <IconButton icon={open ? <ArrowUp color={styleToken.color.black} /> : <ArrowDown color={styleToken.color.gray1} />} size="24px" />
);

const NoticeDescription = ({ open, content }: Pick<Props, 'open' | 'content'>) => {
  if (!open) {
    return null;
  }

  return (
    <Typography className={S.Description} variant="B2">
      {content}
    </Typography>
  );
};
