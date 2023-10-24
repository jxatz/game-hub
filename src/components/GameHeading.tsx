import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  let heading: string = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  }`;
  return (
    <Heading marginY={5} as={"h1"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
