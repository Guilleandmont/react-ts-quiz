import { FC } from "react";
import styled from "styled-components";

interface difficultyProps {
  readonly className?: string;
  readonly level: "easy" | "medium" | "hard";
  selectDifficulty(diff: string): void;
}

const DiffButton = styled.button`
  border-style: none;
  border-radius: 50%;
  color: white;
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
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
`;

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
