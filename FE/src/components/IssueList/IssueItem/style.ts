import styled from 'styled-components';

import { COLOR } from '@/styles/color';
import { FONT_MIXIN, mixins } from '@/styles/mixins';

const Flex = styled.div`
  ${mixins.flexBox({})}
`;
const IssueItem = styled.li`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  padding: 16px 32px;
  border-top: 1px solid ${({ theme: { color } }) => color.line};
`;

const IssueInfoContainer = styled.div`
  margin-top: -5px;
`;

const IssueInfo = styled.div`
  ${mixins.flexBox({ justifyContent: 'flex-start' })}
`;

const IssueInfoBottom = styled(IssueInfo)`
  margin-top: 8px;
  gap: 16px;
  color: ${COLOR.grey[400]};
`;

const IssueTitle = styled.h3`
  margin: 0 8px;
  ${FONT_MIXIN.medium(700)}
`;

const LabelContainer = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;

const MilestonBox = styled.span`
  ${mixins.flexBox({})}
`;

const IssueAssignees = styled.div`
  ${mixins.flexBox({})}
  flex-direction: row-reverse;
  margin: 0 22px;

  img {
    margin-left: -11px;
    transition: margin-left 0.1s ease-in-out;
    z-index: 2;

    &:first-child {
      z-index: 3;
    }
    &:nth-child(3) {
      z-index: 1;
    }

    &:nth-child(n + 4) {
      display: none;
    }
  }

  &:hover img {
    margin-left: 3px;

    &:nth-child(n + 4) {
      display: block;
    }
  }
`;

export {
  Flex,
  IssueItem,
  IssueInfoContainer,
  IssueInfo,
  IssueInfoBottom,
  IssueTitle,
  LabelContainer,
  MilestonBox,
  IssueAssignees,
};
