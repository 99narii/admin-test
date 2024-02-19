import React from 'react';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import {Admin, Create, EditGuesser, ListGuesser, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 500, pv: 2600, amt: 2200},
    {name: 'Page C', uv: 600, pv: 2800, amt: 2000}];

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com/users/2')

function Main() {
    return(
        <div>
            {/*리액트 어드민에서 사전 구현 된 컴포넌트들은*/}
            {/*데이터 리스트, 생성, 수정 폼, 필터, 차트, 그리드, 대시보드 등의 레이아웃으로 사전 구현되어 있다.*/}
            <Admin dataProvider={dataProvider} >
                {/*리소스 컴포넌트를 통해 리소스들을 정리하고, 리스트, 수정, 생성 페이지를 자동으로 생성*/}
                {/*리소스 컴포넌트는 react-admin에서 데이터 모델 및 관련된 작업을 정의하는 데 사용되는 컴포넌트*/}
                {/*API endpoint를 CRUD 인터페이스에 매핑*/}
                <Resource name="users" list={ListGuesser} edit={EditGuesser} create={Create}/>
                <Resource name="posts" list={ListGuesser} edit={EditGuesser} create={Create} />
            </Admin>

            {/*<LineChart width={600} height={300} data={data}>*/}
            {/*    <Line type="monotone" dataKey="uv" stroke="#8884d8" />*/}
            {/*    <CartesianGrid stroke="#ccc" />*/}
            {/*    <XAxis dataKey="name" />*/}
            {/*    <YAxis />*/}
            {/*</LineChart>*/}

        </div>
    )
}
export default Main