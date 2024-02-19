import React from "react";
import {Admin, Create, EditGuesser, ListGuesser, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// import {AdminContext} from "react-admin";

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com/users/2')

function Board() {
    return(
        <div>게시판
            {/*리액트 어드민에서 사전 구현 된 컴포넌트들은*/}
            {/*데이터 리스트, 생성, 수정 폼, 필터, 차트, 그리드, 대시보드 등의 레이아웃으로 사전 구현되어 있다.*/}
            <Admin dataProvider={dataProvider} >
                {/*리소스 컴포넌트를 통해 리소스들을 정리하고, 리스트, 수정, 생성 페이지를 자동으로 생성*/}
                {/*리소스 컴포넌트는 react-admin에서 데이터 모델 및 관련된 작업을 정의하는 데 사용되는 컴포넌트*/}
                {/*API endpoint를 CRUD 인터페이스에 매핑*/}
                <Resource name="users" list={ListGuesser} edit={EditGuesser} create={Create}/>
                <Resource name="posts" list={ListGuesser} edit={EditGuesser} create={Create} />
            </Admin>

        </div>
    )
}
export default Board