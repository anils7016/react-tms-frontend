// material-ui
//import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logo.png';
/**
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 */

const Logo = () => {
  //const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <>
      <img src={logo} alt="Translation Management System" style={{width:'150px'}}></img>
    </>
  );
};

export default Logo;
