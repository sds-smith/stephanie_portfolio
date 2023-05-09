import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation';
import Album from './Routes/Album';
import CategoryPage from './Routes/CategoryPage';
import About from './Routes/About';
import { Headline } from './assets/data/customConstants';
import Categories from './assets/data/categories';
import './App.css';
import ProjectDoc from './Routes/ProjectDoc';

function App() {

  // const ROUTES = {
  //   "Brand, Brand Development" : <Brand/>,
  //   "Content Strategies & Creation" : <ContentStrategy/>,
  //   "Lead Generation & Media Plans" : <LeadGen/>,
  //   "Social Strategy & Content" : <SocialStrategy/>,
  //   "Product Marketing" : <CategoryPage/>,
  //   "Website Design & Creative" : <WebsiteDesign/>,
  //   "Analytics, SEO" : <Analytics/>
  // };

  useEffect(() => {
    document.title = Headline;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Album/>} />
        {Categories.map((category) => <Route key={category.id} path={category.path} element={<CategoryPage category={category}/>} />)}
        <Route path='/:category/:project' element={<ProjectDoc />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    
  );
}

export default App;
