import {
  FormLabel,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        id="darkMode"
        colorScheme="green"
        onChange={() =>
          colorMode == "light" ? setColorMode("dark") : setColorMode("light")
        }
      />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
