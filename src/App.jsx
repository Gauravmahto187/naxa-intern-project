import Header from './components/header';
import { useEffect, useState } from 'react';
import HeroSection from './components/heroSection'
import AboutSection from './components/aboutSection';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.naxa.com.np/api/services');
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <>
      <p className="first_header">We Have Been Working On Several Initiatives During The Jajarkot-Rukum Earthquake Responsie 2023. Check Them Out</p>

      <div className='main_section'>
        <Header />
        <HeroSection />
      </div>

   
    <div className="about_section_wrapper">
        <AboutSection data={data[6]} className="row" showLines={true} linesPosition="right" linesImg="./lines.svg" />
        <AboutSection data={data[2]} className="row-reverse" showLines={true} linesPosition="left" linesImg="./lines-2.svg" />
        <AboutSection data={data[3]} className="row" showLines={false} />
        <AboutSection data={data[5]} className="row-reverse" showLines={false} />
        <AboutSection data={data[0]} className="row" showLines={false} />
        <AboutSection data={data[1]} className="row-reverse" showLines={false} />
        <AboutSection data={data[4]} className="row" showLines={true}  linesImg="./lines-3.svg" linesPosition="bottom-left" />
    </div>








    </>
  );
}

export default App;
