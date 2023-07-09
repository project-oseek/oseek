'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, COLOR_PROPERTIES, IconButton } from '@oseek/ui';
import { NoticeResDto } from '@oseek/apis';
import { MainLayout, Notice } from '../../../src/components';

const responseNotice = [
  {
    noticeId: 1,
    title: '오늘의 식당 개인정보 처리방침 변경 안내',
    registerDate: '23/04/25',
    content: `안녕하세요 오늘의 식당입니다.\n\n저희 서비스를 이용해주시는 모든 분들께 감사드리며,\n2023년 04월 25일 이후로 오늘의 식당 서비스 이용약관이 개정됨을 알려드립니다.`,
  },
  {
    noticeId: 2,
    title: '봄과 가을 사이에서 찾아온 오늘의 식당 1.2.2 업데이트 안내',
    registerDate: '23/04/25',
    content: `안녕하세요 오늘의 식당입니다.\n\n저희 서비스를 이용해주시는 모든 분들께 감사드리며,\n2023년 04월 25일 이후로 오늘의 식당 서비스 이용약관이 개정됨을 알려드립니다.`,
  },
  {
    noticeId: 3,
    title: '공지사항 제목',
    registerDate: '23/04/25',
    content: `안녕하세요 오늘의 식당입니다.\n\n저희 서비스를 이용해주시는 모든 분들께 감사드리며,\n2023년 04월 25일 이후로 오늘의 식당 서비스 이용약관이 개정됨을 알려드립니다.`,
  },
];

type NoticeType = Required<NoticeResDto> & { open: boolean };

const NoticePage = () => {
  const router = useRouter();
  // const { data: responseNotice } = useGetNotice();
  const [notices, setNotices] = useState<NoticeType[]>([]);

  const handlePreviousPage = useCallback(() => {
    router.back();
  }, [router]);

  const handleOpenNotice = useCallback((id: number) => {
    setNotices((prevNotices) =>
      prevNotices.map((notice) => {
        if (notice.noticeId === id) {
          return { ...notice, open: !notice.open };
        }
        return notice;
      }),
    );
  }, []);

  useEffect(() => {
    const noticeState = responseNotice?.map((notice) => ({ ...notice, open: false })) || [];
    setNotices(noticeState);
  }, []);

  return (
    <MainLayout
      title="공지사항"
      activePath="/settings"
      leftAction={<IconButton icon={<ArrowLeft color={COLOR_PROPERTIES.black} />} onClick={handlePreviousPage} />}
      rightAction={<div />}
    >
      {notices.map((notice) => (
        <Notice key={notice.noticeId} id={notice.noticeId} title={notice.title} date={notice.registerDate} content={notice.content} open={notice.open} onClick={handleOpenNotice} />
      ))}
    </MainLayout>
  );
};

export default NoticePage;
