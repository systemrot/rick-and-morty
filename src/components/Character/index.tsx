import React from 'react';
import ReactTooltip from 'react-tooltip';
import { CharacterDetail } from '../../api/hooks/characters/types';
import './index.css';

interface IProps {
  data: CharacterDetail;
}

export const Character: React.FC<IProps> = ({ data }) => {
  return (
    <div className='preview' key={data.id}>
      <ReactTooltip
        multiline={true}
        type='dark'
        effect='solid'
        place='bottom'
      />
      <img
        src={data.image}
        alt={data.name}
        data-tip={`Name: ${data.name}<br /> Status: ${data.status}<br />Species: ${data.species}`}
      />
    </div>
  );
};
