import { Box, Flex, Image, Text, VStack, Input } from "@chakra-ui/react";
import { useState } from 'react';
import Signup from "./Signup";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Box border="1px solid gray" borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' h={24} cursor="pointer" alt='Instagram' />
          {isLogin ? <Login /> : <Signup />}

          {/* --------------------  OR  --------------------------*/}
          <Flex alignItems="center" justifyContent="center" my={4} gap={1} w="full">
            <Box flex={2} h="1px" bg="gray.400" />
            <Text mx={1} color="white">
              OR
            </Text>
            <Box flex={2} h="1px" bg="gray.400" />
          </Flex>
          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box border="1px solid gray" borderRadius={4} padding={5} mt={4}>
        <Flex alignItems="center" justifyContent="center">
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={handleToggle} color="blue.500" cursor="pointer">
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
