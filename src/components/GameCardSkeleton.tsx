import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
