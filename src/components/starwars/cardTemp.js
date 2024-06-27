"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CardTemp({ data, setOpen, setDetail }) {
  const handleCardClick = () => {
    setOpen(true);
    setDetail(data);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{ cursor: "pointer" }}
      bg={useColorModeValue("gray.300", "gray.400")}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "0 5px 7px -1px #000000",
      }}
    >
      <CardHeader>
        <Heading size="md">{data?.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Height
            </Heading>
            <Text pt="2" fontSize="sm">
              {data?.height}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
