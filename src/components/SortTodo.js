import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStores } from '../mobx';

const SortTodo = observer(() => {
  const {todoStore } = useStores();

  return (
    <li>
      <span className="status__width">Статус</span> 
      <div className="name__width width" >
          <p>Наименование</p>
          <p onClick={() =>  todoStore.setSort('name')}>&dArr;</p>
          <p onClick={() =>  todoStore.setSort('name_back')}>&uArr;</p>
      </div> 
      <div className="date__width date" >
          <p>Дата создания</p>
          <p onClick={() =>  todoStore.setSort('date')}>&dArr;</p>
          <p onClick={() =>  todoStore.setSort('date_back')}>&uArr;</p>
      </div>
    </li>
  )
})

export default SortTodo
