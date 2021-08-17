import React from 'react';
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt';
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt';
import './index.css';
import { Info } from '../../api/hooks/characters/types';

interface IProps {
  info: Info;
  setPaginationUrl: (value: string | null) => void;
}

export const Pagination: React.FC<IProps> = ({
  info,
  setPaginationUrl,
}: IProps) => {
  return (
    <div className='pagination'>
      <LeftArrowAlt onClick={() => setPaginationUrl(info.prev)} />
      <RightArrowAlt onClick={() => setPaginationUrl(info.next)} />
    </div>
  );
};
