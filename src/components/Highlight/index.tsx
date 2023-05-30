import * as S from './style'

interface Props {
  title: string;
  subtitle: string;
}

export const HighLight = ({title, subtitle}: Props ) => {
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>

      <S.SubTitle>
        {subtitle}
      </S.SubTitle>
    </S.Container>
  )
}