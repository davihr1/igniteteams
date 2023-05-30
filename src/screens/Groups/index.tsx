import { Header } from '@components/Header';
import * as S from './styles';
import { HighLight } from '@components/Highlight';
import { GroupsCard } from '@components/GroupCard';

export function Groups() {
  return (
    <S.Container>
      <Header  />

      <HighLight 
      title="Turmas"
      subtitle="Jogue com sua turma"
       />

       <GroupsCard title="Galera do ignite" />
       <GroupsCard title="Galera do ignite" />
    </S.Container>
  );
}
