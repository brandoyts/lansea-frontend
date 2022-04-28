import React from 'react'
import AppLayout from '../../components/AppLayout'
import Hero from './components/Hero'
import SearchInput from './components/SearchInput'
import Container from '../../components/Container';

const Home = () => {
    return (
        <AppLayout>
            <Hero />
            <Container>
                <SearchInput />
            </Container>
        </AppLayout>
    )
}

export default Home