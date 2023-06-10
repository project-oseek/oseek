import React from 'react';
import { SettingKeywordPage, SettingLocationPage, SettingMatchPage, SettingNamePage } from '../../../components/login/page';

type Props = {
  params: {
    slug: 'setting-name' | 'setting-keyword' | 'setting-location' | 'setting-match';
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
