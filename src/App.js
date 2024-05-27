import React from 'react';
import './App.css';
import Profile from './components/profile';

function App() {

  const users = [
    { Name: 'Nancy', Boi: 'choir', DateOfBirth: '29/05/1997' },
    { Name: ' Nelson ', Boi: 'artist', DateOfBirth: '13/05/2003' },
    { Name: 'Nonso', Boi: 'creator', DateOfBirth: '04/02/1998' },
    { Name: 'Nelly', Boi: 'comedy', DateOfBirth: '09/06/2000' },
    { name: 'Nickel', }
  ];

  return (
    <div className= "p-" >
      <Profile users={users} />
    </div>
  );
}

export default App;