import { List, Datagrid, TextField, DateField, BooleanField,
    CreateButton,
    DatagridConfigurable,
    ReferenceManyCount,
    NumberField,
    ExportButton,
    FilterButton,
    SelectColumnsButton,
    TopToolbar,
    SearchInput,
    TextInput,
    useListContext, //작업 사용자 정의
    usePermissions, //권한에 따라 버튼 나타내기 숨기기
    EditButton,
    ShowButton
} from 'react-admin';
import {useState} from "react";
import IconEvent from '@mui/icons-material/Event';

const ListActions = () => {
    const {total, isLoading} = useListContext();
    //예제에서는 usePermissions을 사용하여 권한을 주었지만,,, 간단하게 해보았다.
    //const {permissions} = usePermissions( isAdmin ? "admin" : undefined);
    const [isAdmin, setIsAdmin] = useState(false);

    const togglePermissions = () => {
        setIsAdmin(!isAdmin);
        console.log(isAdmin);
    };

    return(
    <TopToolbar>
            <button onClick={togglePermissions}>{isAdmin ? "Logout" : "Login"}</button>
        <SelectColumnsButton/>
        <FilterButton/>
        {isAdmin ? <CreateButton/> : null}
        {/*자료가 없으면 비활성화, downloadCSV를 참조하지 않았는데 되긴 됌....*/}
        <ExportButton disabled={isLoading || total === 0} />
    </TopToolbar>
    );
}

const postFilters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];


export const PostList = () => (
    // 리스트 상단에 액션과 필터(검색)도 추가 할 수 있음
    <List actions={<ListActions/>} filters={postFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <ReferenceManyCount label="Nb comments" reference="comments" target="post_id" link />
            <BooleanField source="commentable" label="Com." />
            <NumberField source="nb_views" label="Views" />
            <>
                <EditButton />
                <ShowButton />
            </>
        </Datagrid>
    </List>
);
