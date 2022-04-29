import React from "react";
import AppLayout from "../../components/AppLayout";
import Hero from "./components/Hero";
import SearchInput from "./components/SearchInput";
import Container from "../../components/Container";
import JobCard from "../../components/JobCard";

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <Container>
        <SearchInput />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 content-center">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </Container>
    </AppLayout>
  );
};

export default Home;
