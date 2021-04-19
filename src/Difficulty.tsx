import { FC } from "react";
import styled from "styled-components";

//Props type definition
interface difficultyProps {
  readonly className?: string;
  readonly level: "easy" | "medium" | "hard";
  selectDifficulty(diff: string): void;
}

//Style
const DiffButton = styled.button`
  border-style: none;
  border-radius: 50%;
  color: white;
  width: 8rem;
  height: 8rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: ${(props: difficultyProps) => {
    switch (props.level) {
      case "easy":
        return "#4AB078";
      case "medium":
        return "#EEA246";
      case "hard":
        return "#E34C1A";
    }
  }};

  &:active {
    background-color: #202030;
  }
`;

//Define component
const Difficulty: FC<difficultyProps> = ({
  children,
  level,
  selectDifficulty
}) => {
  return (
    <DiffButton
      onClick={() => selectDifficulty(level)}
      level={level}
      selectDifficulty={selectDifficulty}
    >
      {children}
    </DiffButton>
  );
};

export default Difficulty;
