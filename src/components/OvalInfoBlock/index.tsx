import { FC} from 'react';

import {InfoItem} from './styled';

interface Props {
  info: string | number;
}

const OvalInfoBlock: FC<Props> = ({ info }) =>
  <InfoItem>
    {
      typeof info === 'string'
        ? info.toUpperCase() : info
    }
  </InfoItem>;


export default OvalInfoBlock;
