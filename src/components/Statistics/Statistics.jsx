import Notification from 'components/Notification/';
import StatisticsInfo from 'components/StatisticsInfo/';

import { StatisticsWrap, SubTitle } from './Statistics.style';

const Statistics = ({ state, total, procentGoodRev }) => {
  const sum = total();
  return (
    <StatisticsWrap>
      <SubTitle>Statistics</SubTitle>
      {sum === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsInfo
          state={state}
          total={sum}
          procentGoodRev={procentGoodRev}
        />
      )}
    </StatisticsWrap>
  );
};

export default Statistics;
