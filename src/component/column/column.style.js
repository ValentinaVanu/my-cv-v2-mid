import styled from 'styled-components'

export const StyledColumn = styled.div `
  grid-column: 1/-1;
  display: ${
    //               if display, then display
    //               if no display, then 'block'
    ({ display }) => display || "block"
  };
  height: ${
    //              true or false
    ({ height }) => height
      // true
      ? `${height}px` 

      // false
      :  'auto'
  };
`
