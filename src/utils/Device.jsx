import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => {
  return useMediaQuery({ maxWidth: 820 }); // Adjust the maxWidth as per your requirement
};

export default useIsMobile;
