import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import React from 'react';
import SearchFilters from '../components/SearchFilters';

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();


const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
  
console.log(data)


    return (
     
        <Box>
            <Flex
            cursor= 'pointer'
            bg= 'gray.100'
            borderBottom='1px'
            borderColor='gray.200'
            p='2'
            fontWeight='black'
            fontSize='lg'
            justifyContent='center'
            alignItems='center'
            onClick={() => setSearchFilters(!searchFilters)}

                >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />

            </Flex>
            {searchFilters && <SearchFilters />}


            <div>
        <p>{!data ? "Loading..." : data}</p>
      </div>
        </Box>
        
    )
    }

    export default Search;