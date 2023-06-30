import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <UnorderedList>
      {data.map((genre: Genre) => (
        <ListItem>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreList;
