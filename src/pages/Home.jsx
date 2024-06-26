import MyCard from "../components/MyCard";
import MyNavbar from "../components/MyNavbar";
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';

export default function Home() {
    const data = [1,1,1,1,1,1,1,1];
    return (
        <div className="bg-gray">
            <MyNavbar />

            <Container maxW='8xl'>
                <h1 className="market">Marketplace</h1>
                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    {
                        data.map((item, index) => (
                            <GridItem key={'card_'+index}>
                                <MyCard key={'card_'+index} />
                            </GridItem>
                        ))
                    }                                       
                </Grid>
            </Container>
        </div>
    )
}
