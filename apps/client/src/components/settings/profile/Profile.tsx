'use client';

import { Button, Typography } from '@oseek/ui';
import * as S from './Profile.css';

type Props = {
  thumbnail?: string;
  nickname?: string;
  description?: string;
  onClick: () => void;
};

export const Profile = ({ thumbnail, nickname, description, onClick }: Props) => {
  return (
    <div className={S.Container}>
      <div className={S.ImageContainer}>
        <img className={S.Image} src={thumbnail} alt="profile" />
      </div>
      <div className={S.UserContainer}>
        <Typography variant="H2">{nickname}</Typography>
        <Typography variant="B2">{description}</Typography>
      </div>
      <Button className={S.Button} buttonType="Line" onClick={onClick}>
        <Typography variant="B2">프로필 수정</Typography>
      </Button>
    </div>
  );
};
