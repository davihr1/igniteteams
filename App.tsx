
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';

import theme from '@theme/index';
import Loader from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

export default function App() {
  const [FontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      { !FontsLoading ?  <Groups /> : <Loader /> }
    </ThemeProvider>
  );
}