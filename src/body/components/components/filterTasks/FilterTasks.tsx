import { Button, Flex } from 'antd';


export const FilterTasks=()=>{

  return (
    <Flex gap={5}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Closed</Button>
    </Flex>
  )

}