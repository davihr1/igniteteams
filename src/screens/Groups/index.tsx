import { Header } from '@components/Header';
import * as S from './styles';
import { HighLight } from '@components/Highlight';
import { GroupsCard } from '@components/GroupCard';
import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpity';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  return (
    <S.Container>
      <Header  />


      <HighLight 
      title="Turmas"
      subtitle="Jogue com sua turma"
       />
       <FlatList 
       data={groups}
       keyExtractor={item => item}
       contentContainerStyle={groups.length === 0 && { flex: 1 }}
       renderItem={({ item }) => (
        <GroupsCard title={item}
        onPress={() => Alert.alert(item)}
        />
       )}
       ListEmptyComponent={() => <ListEmpty message="Cadastre sua primeira turma" />}
       />
    </S.Container>
  );
}
