import React, { useEffect, useState } from "react"
import loadDatabase from '../services/loadDatabase';
import { CircularProgress, Box, SimpleGrid, Button, Stack, Badge } from "@chakra-ui/react"
import Table from "../components/Table/Table";

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const [typeShow, setTypeShow] = useState('All')
  const [data, setData] = useState(null)
  const [animals, setAnimals] = useState(null)

  const processData = (data) => {
    if(data && data.length) {
      let dataProcessed = data.map((item) => {
        return {
          ...item,
          "name": `${item.name.given} ${item.name.surname}`,
          "animals": `${item.animals.join(" - ") }`
        }
      })
      dataProcessed = dataProcessed.sort((a,b)=>b.points-a.points)
      setData(dataProcessed)
      setTimeout(() => {
        setLoading(false)
      }, 500);
    }
  }

  const loadAnimals = () => {
    const animals = loadDatabase()[1].animals;
    setAnimals(animals)
  }

  const searchByAnimal = (animal) => {
    setLoading(true)
    let data = loadDatabase().filter(item => item.animals.includes(animal))
    processData(data);
  }

  const setAllUsers = () => {
    setLoading(true)
    processData(loadDatabase());
    setTypeShow('All');
  }

  const setActiveUsers = () => {
    setLoading(true)
    let data = loadDatabase().filter(item => item.isActive)
    processData(data);
    setTypeShow('Active');
  }

  useEffect(() => {
    processData(loadDatabase());
    loadAnimals();
    setTypeShow('All');
  }, [])

  if (loading) {
    return (
      <SimpleGrid columns={1}>
        <Box bg="white" textAlign="center" paddingTop="200px">
          <CircularProgress isIndeterminate color="teal.300" />
        </Box>
      </SimpleGrid>
    )
  }

  return (
    <>
    <SimpleGrid columns={2} paddingTop="50px">
      <Stack direction="row" alignItems="flex-end" >
        <Badge colorScheme="green">{typeShow} users</Badge>
      </Stack>
      <Stack direction="row" alignItems="flex-end" justifyContent="flex-end">
        <Button colorScheme="teal" size="xs" onClick={() => setActiveUsers()}>
          Show Active Users
        </Button>
        <Button colorScheme="teal" size="xs" onClick={() => setAllUsers()}>
          Show All Users
        </Button>
      </Stack>  
    </SimpleGrid>
    <SimpleGrid columns={1} paddingTop="30px">
      <Stack direction="row" >
        { animals.map(item => (
        <Badge key={item} variant="outline" colorScheme="green" className="hover" onClick={() => searchByAnimal(item)}>{item}</Badge>
        ))}
      </Stack>
    </SimpleGrid>
    <SimpleGrid columns={1}>
        <Box bg="white" textAlign="center" paddingTop="20px">
          <Table data={data} />
        </Box>
      </SimpleGrid>
    </>
  )
}