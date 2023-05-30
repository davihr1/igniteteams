import * as PI from 'phosphor-react-native'
import * as S from './style'

import imgLogo from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <S.Container>
      {
        showBackButton &&
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      }
      <S.Logo source={imgLogo} />
    </S.Container>
  )
}