import { Button, Flex } from 'antd';
import { FilterStateType } from '../todolist/Todolist.tsx';

interface Props {
  setFilterState: (filterState: FilterStateType) => void;
  filterState: FilterStateType;
}

const listButton: FilterStateType[] = ['All', 'Active', 'Closed'];

export const FilterTasks = (props: Props) => {
  const { setFilterState } = props;

  return (
    <Flex gap={5}>
      {listButton.map((el) => (
        <Button key={el} onClick={() => setFilterState(el)}>
          {el}
        </Button>
      ))}
    </Flex>
  );
};
