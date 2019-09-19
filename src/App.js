import React, {Component} from 'react';
import Customer from "./components/Customer"

const customers = [
  {
    'id':1,
    'name':'홍길동',
    'birthday':'961003',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':2,
    'name':'홍길',
    'birthday':'961004',
    'gender':'남자',
    'job':'대학생'
  },
]


class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{
          return <Customer key={c.id} id ={c.id}
          name={c.name}
          birthday={c.birthday}
          gender = {c.gender} />
        })}
      </div>
    )
  }
}

export default App;
