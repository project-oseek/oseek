import { useCallback, useMemo } from 'react';
import { Typography } from '@oseek/ui';
import * as S from './LocationList.css';

type Props = {
  keyword: string;
  locations: string[];
  onLocationClick: (location: string) => void;
};

export const LocationList = ({ keyword, locations, onLocationClick }: Props) => {
  const title = keyword ? `'${keyword}' 검색 결과` : '근처 지역';

  const locationsWithFilterKeyword = useMemo(() => {
    if (!keyword) return locations;
    const regex = new RegExp(keyword, 'i');
    return locations.filter((location) => regex.test(location));
  }, [keyword, locations]);

  const handleLocationClick = useCallback(
    (location: string) => {
      onLocationClick(location);
    },
    [onLocationClick],
  );

  return (
    <div className={S.container}>
      <Typography as="label" variant="ST2">
        {title}
      </Typography>
      <ul className={S.listContainer}>
        {locationsWithFilterKeyword.map((location, index) => (
          <li key={index} className={S.listItem} onClick={() => handleLocationClick(location)}>
            <Typography as="span" variant="B1">
              {location}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
