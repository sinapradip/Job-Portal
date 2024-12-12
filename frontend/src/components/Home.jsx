import React, { useEffect } from 'react'
import { Footer, Navbar } from './shared'
import { CategoryCarousel, HeroSection, LatestJobs } from '.'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetAllJobs from '@/hooks/useGetAllJobs';

export default function Home() {

  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <>
     <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
     </div>
    </>
  )
}
