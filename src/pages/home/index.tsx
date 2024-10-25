import * as S from './styles';
import { List } from '../../components/Cards';
import { Search } from '../../components/Search';
import { Btn, CommandType } from '../../components/LinkBtn';
import { Button } from '../../components/Button';

const Home = () => (
  <>
    <S.div>
      <Search />
      <Btn path="add" command={CommandType.ADD} />
    </S.div>
    <S.div>
      <List />
    </S.div>
    <Button />
  </>
);

export { Home };
