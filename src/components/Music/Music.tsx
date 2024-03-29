import { Accordion, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiPocketRadio } from 'react-icons/gi';
import Typewriter from 'typewriter-effect';
import { dataAboutText, dataFavouriteMusic } from '../../../data';
import MusicItem from './MusicItem';
type MusicProps = {

};

const Music: React.FC<MusicProps> = () => {
    const [musicDone, setMusicDone] = useState(false);
    return (
        <>
            <Flex
                id='music'
                zIndex={3}
                width={'100%'}
                borderRadius={10}
                backdropFilter={'blur(40px) contrast(90%)'}
                align={'center'}
                flexDirection={'column'}
                display={dataAboutText ? 'flex' : 'none'}
                pb={2}
                boxShadow={'2xl'}
                _hover={{
                    boxShadow: 'dark-lg'
                }}
            >
                <Flex
                    align={'center'}
                    width={'100%'}
                    justify={'center'}
                >
                    <Icon
                        fontSize={40}
                        as={GiPocketRadio}
                        mr={2}
                    />
                    <Text
                        fontFamily={'PWPers'}
                        textAlign={'center'}
                        // width={'100%'}
                        display={musicDone ? 'unset' : 'none'}
                        fontSize={{ base: 22, md: 50 }}
                    >
                        FAVOURITE MUSIC
                    </Text>
                </Flex>
                <Flex
                    fontFamily={'PWPers'}
                    fontSize={{ base: 22, md: 50 }}
                    textAlign={'center'}
                    width={'100%'}
                    justify={'center'}
                    display={!musicDone ? 'flex' : 'none'}
                >
                    <Typewriter
                        options={{
                            delay: 100,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('FAVOURITE')
                                .pauseFor(200)
                            typewriter.typeString(' ')
                                .pauseFor(400)
                            typewriter.typeString('MUSIC')
                                .callFunction(() => {
                                    setMusicDone(true);
                                })
                                .start();
                        }}
                    />
                </Flex>

                <Accordion allowToggle width={'100%'}>
                    <Stack
                        width={'100%'}
                        justify={'center'}
                        align={'center'}
                    >
                        {dataFavouriteMusic.map((item, index) => (<MusicItem key={index} music={item} index={index} />))}
                    </Stack>
                </Accordion>
            </Flex >
        </>
    )
}
export default Music;