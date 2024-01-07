import { Flex, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
type ProjectItemProps = {
    title: string,
    location: string,
    time: string,
    content: string[]
};

const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    return (<>
        <Flex
            width={'90%'}
            flexDirection={'column'}
            borderRadius={'10px'}
            m={2}
            p={2}
            justify={'center'}
            align={'center'}
        >
            <Text
                fontFamily='CabinSketch'
                textAlign={'center'}
                width={'100%'}
                fontSize={{ base: 30, md: 40 }}
            >
                {props.title}
            </Text>
            <Flex
                direction={'row'}
                justify={'center'}
                align={'center'}
            >
                <Icon
                    as={CiLocationOn}
                    m={2}
                />
                <Text
                    fontFamily='CabinSketch'
                    textAlign={'center'}
                    width={'100%'}
                    fontSize={20}
                >
                    {props.location}
                </Text>
            </Flex>

            <Flex
                direction={'row'}
                justify={'center'}
                align={'center'}
            >
                <Icon
                    as={MdOutlineAccessTime}
                    m={2}
                />
                <Text
                    fontFamily='CabinSketch'
                    textAlign={'center'}
                    width={'100%'}
                    fontSize={14}
                >
                    {props.time}
                </Text>
            </Flex>
            <Flex
                width={'90%'}
            >
                <UnorderedList>
                    {props.content.map(citem => (
                        <ListItem
                            key={citem}
                        >
                            <Text
                                fontFamily='CabinSketch'
                                width={'100%'}
                                fontSize={{ base: 15, md: 18 }}
                            >
                                {citem}
                            </Text>
                        </ListItem>))}
                </UnorderedList>
            </Flex>
        </Flex >
    </>)
}
export default ProjectItem;