'use client';

import { SettingKeywordPage, SettingLocationPage, SettingMatchPage, SettingNamePage } from '@components/login';

type Props = {
  params: {
    slug: 'setting-name' | 'setting-location' | 'setting-match';
  };
};

const SettingPages = {
  'setting-name': SettingNamePage,
  'setting-keyword': SettingKeywordPage,
  'setting-location': SettingLocationPage,
  'setting-match': SettingMatchPage,
};

const LoginSettingPage = ({ params }: Props) => {
  const PageComponent = SettingPages[params.slug];
  return <PageComponent />;
};

export default LoginSettingPage;
