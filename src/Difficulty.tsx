import { FC } from "react";
import styled from "styled-components";

interface difficultyProps {
  children: string;
  level: string;
  selectDifficulty: (level: string) => void;
}

const DiffButton = styled.button<difficultyProps>`
  border-style: none;
  border-radius: 50%;
  color: white;
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ children }) => {
    switch (children) {
      case "Easy":
        return "#4AB078";
      case "Medium":
        return "#EEA246";
      case "Hard":
        return "#E34C1A";
    }
  }};

  &:hover {
  }
`;

const Difficulty: FC<difficultyProps> = ({
  children,
  level,
  selectDifficulty
}) => {
  return (
    <DiffButton onClick={() => selectDifficulty(level)}>{children}</DiffButton>
  );
};

export default Difficulty;
