import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function CustomBreadcrumbs() {
    const {pathname} = useLocation();
    const pathnames = pathname.split('/').filter((x) => x);
    
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    function transformLabel(string) {
      return string.split('_').map((word) => capitalize(word)).join(' ');;
    };
    const renderLinks = () => {
      let accumulator = '';
      const links = [
          <Link key='home' underline="hover" color="inherit" href='/'>
            Home
          </Link>
      ];
      pathnames.forEach((pathname) => {
        accumulator = accumulator.concat(`/${pathname}`);
        if (pathnames.indexOf(pathname) === pathnames.length - 1) {
              links.push(
                <Typography key={pathname} sx={{fontWeight: 'bold'}} color="inherit">
                  {transformLabel(pathname)}
                </Typography>
              );
        } else {
              links.push(
                <Link key={pathname} underline="hover" color="inherit" href={`${accumulator}`}>
                  {transformLabel(pathname)}
                </Link>
              );
        };
      });
      return links;
    };
    
    return (
      <Breadcrumbs aria-label="breadcrumb" sx={{position: 'fixed', pt: 8, pl: 2}}>
        {
          renderLinks()
        }
      </Breadcrumbs>
    )

};

export default CustomBreadcrumbs;
