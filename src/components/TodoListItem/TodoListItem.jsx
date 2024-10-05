import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import { Text } from 'components';

export const TodoListItem = ({ todoItem, counter, deleteTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{counter}
      </Text>
      <Text>{todoItem.text}</Text>
      <button
        className={style.deleteButton}
        onClick={() => {
          deleteTodo(todoItem.id);
        }}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
