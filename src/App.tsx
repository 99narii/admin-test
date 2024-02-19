import React from 'react';
import './App.css';
import { AdminContext, Admin, Create, EditGuesser, ListGuesser, Resource} from 'react-admin';
import Main from './View/Main';
import Board from "./View/Board";
import jsonServerProvider from 'ra-data-json-server';
import {PostList} from "./View/Board/list";

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com/users/2')

//Json 서버 api 엔드포인트 데이터를 가져오고 서버와 통신하기 위한 중요한 부분!
function App() {

  return (
    <div className="App">
            <AdminContext>
                <Admin dataProvider={dataProvider} >
                    <Resource name="posts" list={PostList} />
                    <Resource name="users" list={ListGuesser} edit={EditGuesser} create={Create}/>
                    {/*<Resource name="posts" list={ListGuesser} edit={EditGuesser} create={Create} />*/}
                </Admin>
            </AdminContext>

    </div>
  );
}

export default App;
