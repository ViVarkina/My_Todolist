import { Button, Flex, Input } from 'antd';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';

export interface Props {
  title: string;
  saveTitle: (value: string, callBack: () => void) => void;
}

export const ChangeTitle = ({ title ,saveTitle}: Props) => {
  const [titleIsVisible, setTitleIsVisible] = useState<boolean>(true);
  const [value, setValue] = useState<string>(title);

  const closeWind = () => {
    setTitleIsVisible(true);
  };

  const saveTitleInput=()=>{
    saveTitle(value, closeWind)
  }

  return (
    <Flex justify={'space-between'} style={{width:"100%"}}>
      {titleIsVisible ? (
        <Flex justify={'space-between'} gap={10} style={{width:"100%"}}>
          <h3>{title}</h3>
          <Flex gap={5}>
            <Button
              onClick={() => {
                setTitleIsVisible(false);
              }}
            >
              <EditOutlined />
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex justify={'space-between'} gap={10}>
          <Input
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <Flex gap={5}>
            <Button onClick={saveTitleInput}>
              <CheckOutlined />
            </Button>
            <Button onClick={()=>{
              setTitleIsVisible(true);
              setValue(title);
            }}>
              <CloseOutlined/>
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
