import HeroSection from '@/components/molecules/hero-section';
import React from 'react';

const GlobalOffices = () => {
    return (
        <div>
            <HeroSection
                backgroundUrl="/images/pages/about-us/GlobalOfficesBanner.png"
                heading={<>Global Offices</>}
            />

            {/* todo */}
            <section className="mt-[50px] bg-[url('/images/pages/about-us/global-map.png')] bg-cover bg-center min-h-[500px] md:min-h-[1400px]  ">

            </section>

        </div>
    );
};

export default GlobalOffices;