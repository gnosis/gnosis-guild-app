import React from "react";
import styled from "styled-components";
import { Button, Text } from "@gnosis.pm/safe-react-components";

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  max-width: 28rem;
  max-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &&& {
    border-radius: 0rem 0rem 0.5rem 0.5rem;
  }
`;

type Props = {
  onClick?: (e: any) => void;
  disabled?: boolean;
};

const ContributeButton: React.FC<Props> = ({ onClick, disabled, children }) => (
  <StyledButton
    size="lg"
    color="secondary"
    onClick={onClick}
    disabled={disabled}
  >
    <Text size="lg" strong color="white">
      {children}
    </Text>
  </StyledButton>
);

export default ContributeButton;
