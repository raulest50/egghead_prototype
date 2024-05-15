//import { useState } from 'react'
import './App.css'
import imag from './assets/react.svg'
import imag_vite from '../public/vite.svg'

import {
    Container, Flex, VStack, Heading, Text, SimpleGrid, GridItem,
    FormControl, FormLabel, Input, Select, Button, Checkbox, Divider,
    HStack, AspectRatio, Image, Stack, useColorMode, useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react'



// Supports weights 300-800
import '@fontsource-variable/open-sans';


const h_style = {
  clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)', // Adjust the percentages to control the slope of the diagonal
  p:2,
  w:'full',
  bg:'orange.200',
  size:'2xl',
  fontFamily:'Open Sans Variable',
}

function App() {
  
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.50")
  const NgBotonText = useColorModeValue("Alternar a modo oscuro","Desactivar modo oscuro")
  const st_color = useColorModeValue("gray.600", "gray.300")
  
  
  const colSpan = useBreakpointValue({base:2, md:1, xl:1})

  return (
    <Container minW={'container.xl'} p={0} m={0}>
      <Flex h={{base: 'auto', md:'100vh'}} py={[0, 10, 20]} direction={['column', 'column', 'column', 'row']} >
        <VStack w={'full'} h={'full'} p={10} spacing={3} alignItems={'flex-start'} >
          <VStack w={'full'} spacing={2} alignItems={'flex-start'}>
            <Heading sx={h_style}>Detalles</Heading>
            <Text> Si ya tines una cuenta has login porfavor</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w={'full'}>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Primer Nombre</FormLabel>
                <Input placeholder={"John"}/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input placeholder={"Doe"}/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Direccion</FormLabel>
                <Input placeholder={"123 Street"}/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Ciudad</FormLabel>
                <Input placeholder={"123 Street"}/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Pais</FormLabel>
                <Select>
                  <option value='col'>Colombia</option>
                  <option value='uk'>Reino Unido</option>
                  <option value='ar'>Argentina</option>
                  <option value='mex'>Mexico</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Enviar a la direccion de facturacion</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button size={'lg'} variant={'solid'} colorScheme={'brand'}>Ordenar</Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
        
        
        <VStack w={'full'} h={'full'} p={'3em'} spacing={10} alignItems={'flex-start'} bg={bgColor}>
          
          <VStack spacing={3} alignItems={'flex-start'} >
            <Heading>Tu Carrito</Heading>
            <Text>intenta personalizar para reducir costos</Text>
            <Button onClick={toggleColorMode} variant={'link'} colorScheme={'Black'}>{NgBotonText}</Button>
          </VStack>
          
          
          <HStack w={'full'} spacing={6} alignItems={'center'}>
            <AspectRatio ratio={1} w={24}>
              <Image src={imag} />
            </AspectRatio>
            <Stack spacing={0} direction={'row'} align={'center'} w={'full'} justifyContent={'space-between'} >
              <VStack>
                <Heading>React Logo</Heading>
                <Text color={st_color}>11314f112b</Text>
              </VStack>
              <Heading size={"sm"} >$100.00</Heading>
            </Stack>
          </HStack>
          
          <HStack w={'full'} spacing={6} alignItems={'center'}>
            <AspectRatio ratio={1} w={24}>
              <Image src={imag_vite} />
            </AspectRatio>
            <Stack spacing={0} direction={'row'} align={'center'} w={'full'} justifyContent={'space-between'} >
              <VStack>
                <Heading>Vite Logo</Heading>
                <Text color={st_color}>11314f112a</Text>
              </VStack>
              <Heading size={"sm"} >$19.00</Heading>
            </Stack>
          </HStack>
          
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={st_color}>Sub Total</Text>
            <Heading size={'sm'}>$119.00</Heading>
          </HStack>
          
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={st_color}>Costo de envio</Text>
            <Heading size={'sm'}>$19.99</Heading>
          </HStack>
          
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={st_color}>Impuestos (estimado)</Text>
            <Heading size={'sm'}>$23.80</Heading>
          </HStack>
          
          <Divider borderColor={'black'}/>
          
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color={st_color}>Total</Text>
            <Heading size={'lg'}>$162.79</Heading>
          </HStack>
          
          
        </VStack>
      </Flex>
    </Container>
  )
}

export default App
