import { StatusBar } from "expo-status-bar";
import * as S from "./styles";

export default function Loader() {
  return (
    <S.Container>
      <S.Loaderindicator />
      <StatusBar translucent backgroundColor="transparent" style="light" />
    </S.Container>
  );
}