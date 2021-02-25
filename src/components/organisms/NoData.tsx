import React from 'react';
import styled from 'styled-components';

const StyledNoData = styled.div`
  font-size: 100px;
  font-family: InkLipquid;
`;

const NoData = (): JSX.Element => {
  return <StyledNoData>No data</StyledNoData>;
};

export default NoData;
