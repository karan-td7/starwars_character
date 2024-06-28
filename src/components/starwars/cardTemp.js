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
import { char_images } from "./images";
import Image from "next/image";

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
        <Image
          src={char_images[data.name]}
          alt=""
          objectFit={"fit"}
          width={"100%"}
          height={200}
        />
      </CardHeader>

      <CardBody>
        <Heading size="md">{data?.name}</Heading>
      </CardBody>
    </Card>
  );
}
