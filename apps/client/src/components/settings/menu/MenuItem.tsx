import { useRouter } from 'next/navigation';
import { ArrowRight, IconButton, styleToken, Typography } from '@oseek/ui';
import * as S from './MenuItem.css';

type Props = {
  path?: string;
  title: string;
  subTitle?: string;
  onClick?: () => void;
};
export const MenuItem = ({ path, title, subTitle, onClick }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) {
      router.push(path);
      return;
    }
    onClick?.();
  };
  return (
    <div className={S.Container} onClick={handleClick}>
      <div className={S.Title}>
        <Typography variant="B1">{title}</Typography>
        {subTitle && (
          <Typography variant="B2" color={styleToken.color.gray1} style={{ marginLeft: 8 }}>
            {subTitle}
          </Typography>
        )}
      </div>
      {path && <IconButton icon={<ArrowRight color={styleToken.color.gray1} />} size="24px" />}
    </div>
  );
};
