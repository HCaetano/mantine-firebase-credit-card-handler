import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";
import { ThemeProvider } from "./config/ThemeProvider";
import TextInputCustom from "./components/TextInputCustom";
import { HiddenInformation } from "./styles";
import ContactlessPayment from "./assets/Contactless-payment.svg";
import SafetySymbol from "./assets/Safety-symbol.svg";
import VisaLogo from "./assets/Visa.svg";

export default function App() {
  return (
    <ThemeProvider>
      <Center
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[9],
          height: "100vh",
        })}
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[8],
            height: 420,
            padding: 32,
            width: 720,
          })}
        >
          <Flex gap={64}>
            <Flex direction="column" gap="xl" maw={328}>
              <Flex direction="column">
                <Text color="gray" size="sm" weight={500}>
                  Número do cartão
                </Text>
                <TextInputCustom placeholder="4716 8039 02" />
              </Flex>
              <Flex direction="column">
                <Text color="gray" size="sm" weight={500}>
                  Nome do titular
                </Text>
                <TextInputCustom placeholder="Nome como está no cartão" />
              </Flex>
              <Flex align="center" gap="md">
                <Flex direction="column" maw={182}>
                  <Text color="gray" size="sm" weight={500}>
                    Validade
                  </Text>
                  <TextInputCustom placeholder="mm/aa" />
                </Flex>
                <Flex direction="column" maw={130}>
                  <Flex gap="xs">
                    <Text color="gray" size="sm" weight={500}>
                      CVV
                    </Text>
                    <ActionIcon
                      color="gray.3"
                      radius="xl"
                      size="xs"
                      variant="filled"
                    >
                      <IconQuestionMark color="black" />
                    </ActionIcon>
                  </Flex>
                  <TextInputCustom placeholder="***" />
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column" gap={34}>
              <Box
                sx={(theme) => ({
                  background: theme.colors.gray[9],
                  border: `1px solid ${theme.colors.gray[7]}`,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.25)",
                  height: "fit-content",
                  padding: "24px",
                  width: "280px",
                })}
              >
                <Flex direction="column">
                  <Flex align="center" justify="space-between">
                    <Box
                      sx={() => ({
                        width: "32px",
                      })}
                    >
                      <Image alt="Visa logo" src={VisaLogo} />
                    </Box>
                    <Box
                      sx={() => ({
                        width: "32px",
                      })}
                    >
                      <Image
                        alt="Contactless Payment symbol"
                        src={ContactlessPayment}
                      />
                    </Box>
                  </Flex>
                  <Flex justify="space-between" mt={40}>
                    <Text color="gray.0" size="md" weight={600}>
                      4 7 1 6
                    </Text>
                    <Text color="gray.0" size="md" weight={600}>
                      8 0 3 9
                    </Text>
                    <Text color="gray.0" size="md" weight={600}>
                      0 2{" "}
                      <HiddenInformation>&#x2022; &#x2022;</HiddenInformation>
                    </Text>
                    <Text color="gray.0" opacity={0.5} size="md" weight={600}>
                      &#x2022; &#x2022; &#x2022; &#x2022;
                    </Text>
                  </Flex>
                  <Flex justify="space-between" mt={24}>
                    <Text color="gray.0" opacity={0.5} size="md">
                      Seu nome aqui
                    </Text>
                    <Text color="gray.0" opacity={0.5} size="md" weight={600}>
                      &#x2022; &#x2022; / &#x2022; &#x2022;
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Flex align="center" gap={8} m="0 auto">
                <Image height={15} src={SafetySymbol} width={15} />
                <Text color="gray.2">Seus dados estão seguros</Text>
              </Flex>
            </Flex>
          </Flex>
          <Button
            color="purple.0"
            fullWidth
            p={16}
            mt={48}
            styles={{ root: { height: "auto" } }}
          >
            <Text size="lg">Adicionar cartão</Text>
          </Button>
        </Box>
      </Center>
    </ThemeProvider>
  );
}