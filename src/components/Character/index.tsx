import React from 'react';
import ReactTooltip from 'react-tooltip';

import { ImgSC, Wrapper } from './styled';

interface IProps {
  data: any;
}

export const Character = ({ data }: IProps['data']) => {
  return (
    <Wrapper key={data.id}>
      <ReactTooltip
        multiline={true}
        type='dark'
        effect='solid'
        place='bottom'
      />
      <ImgSC
        src={data.image}
        alt={data.name}
        data-tip={`Name: ${data.name}<br /> Status: ${data.status}<br />Species: ${data.species}`}
      />
    </Wrapper>
  );
};
