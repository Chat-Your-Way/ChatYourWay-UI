import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box, {
  shouldForwardProp: (p) =>
    p !== 'isOpenChat' && p !== 'isOpenContacts' && p !== 'isActive',
})`
  padding-top: 8px;
  padding-left: 8px;
  width: ${(p) =>
    p.isOpenChat ? '368px' : p.isOpenContacts ? '300px' : '396px'};
  display: flex;
  box-sizing: border-box;

  border-radius: 16px;
  background: ${(p) =>
    p.isActive ? p.theme.palette.primary.disabled : 'transparent'};
`;

export const StyledChildrenBox = styled(Box, {
  shouldForwardProp: (p) => p !== 'isOpenChat' && p !== 'isOpenContacts',
})`
  width: ${(p) =>
    p.isOpenChat ? '300px' : p.isOpenContacts ? '241px' : '308px'};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;