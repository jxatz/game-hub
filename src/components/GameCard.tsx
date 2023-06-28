import React from "react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import MdPhoneIphone from "react-icons/md";
import SiNintendo from "react-icons/si";
import BsGlobe from "react-icons/bs";

import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
