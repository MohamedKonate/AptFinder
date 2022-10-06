import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({children}) => (
    <>
      <Head>
        <title>APT FINDER</title>
        <link rel = "icon" href = "https://www.linkpicture.com/q/Capture-d-écran-2022-09-19-à-14.07.41.png" type = "image/x-icon"/>
        
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );

export default Layout;
  