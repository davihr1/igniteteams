import styled from 'styled-components/native';

export const Container = styled.View`
align-items: center;
justify-content: center;
flex: 1;
display: flex;
background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
color: #fff;
font-size: 100px;
font-weight: bold;
`