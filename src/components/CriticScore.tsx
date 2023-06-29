import { Badge } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      ml="1"
      colorScheme={color}
      borderRadius={4}
      paddingX={2}
      overflow="hidden"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
