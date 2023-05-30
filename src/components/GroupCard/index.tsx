import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface Props{
  title: string; 
}

export const GroupsCard = ({ title, ...rest }: Props & TouchableOpacityProps) => {
return (
  <S.Container {...rest}>
    <S.Iocn />

    <S.Title>{title}</S.Title>
  </S.Container>
)
}