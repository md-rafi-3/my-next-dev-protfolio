// app/page.js (Server Component)
import Banner from '@/Components/Banner';
import ContactSection from '@/Components/Contact';
import SkillsPathTimeline from '@/Components/Orbit';
import ProjectSection from '@/Components/ProjectSection';
import ServicesSection from '@/Components/ServicesSection';
import TechCodeBlock from '@/Components/TechCodeBlock';
import WelcomeLoader from '@/Components/WelcomeLoader'; // Client Component

export default function Page() {
  return (
    <div>
      {/* Loader will internally manage first-visit logic */}
      <WelcomeLoader />

      <Banner />
   
        
       <SkillsPathTimeline></SkillsPathTimeline>
        <div className="mt-10">
          
          <TechCodeBlock></TechCodeBlock>
          
          </div>
       
      
      <ServicesSection />
      <ProjectSection />
      <ContactSection></ContactSection>
    </div>
  );
}
