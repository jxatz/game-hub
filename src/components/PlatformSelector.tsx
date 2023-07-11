import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import usePlatforms, { Platform } from "../hooks/usePlatfroms";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  const [platformSelected, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {platformSelected ? platformSelected.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
