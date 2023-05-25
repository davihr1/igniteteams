import { StatusBar } from 'react-native';
import * as S from './styles';

export function Groups() {
  return (
    <S.Container>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <S.Title>Hello at Rocketseat Curses</S.Title>
    </S.Container>
  );
}
