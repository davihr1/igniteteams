import styled from 'styled-components/native';

export const Container = styled.View`
align-items: center;
justify-content: center;
flex: 1;
display: flex;
background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
color: ${({ theme }) => theme.COLORS.WHITE};
font-size: 60px;
font-weight: bold;
`