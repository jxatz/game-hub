import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <UnorderedList>
      {genres.map((genre: Genre) => (
        <ListItem>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreList;
