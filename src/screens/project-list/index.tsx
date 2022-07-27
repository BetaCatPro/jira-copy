import styled from '@emotion/styled';
import { Typography } from 'antd';
import { List } from 'screens/project-list/list';
import { SearchPanel } from 'screens/project-list/search-panel';
import { useProjects } from 'utils/project';
import { useUsers } from 'utils/user';
import { useDebounce } from '../../utils';
import { useDocumentTitle } from 'utils/index';
import { useUrlQueryParam } from 'utils/url';

// 使用 JS 的同学，大部分的错误都是在 runtime(运行时) 的时候发现的
// 我们希望，在静态代码中，就能找到其中的一些错误 -> 强类型
export const ProjectListScreen = () => {
    useDocumentTitle('项目列表');

    const [param, setParam] = useUrlQueryParam(['name', 'personId']);
    const debouncedParam = useDebounce(param, 200);
    const { isLoading, error, data: list } = useProjects(debouncedParam);
    const { data: users } = useUsers();

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users || []} param={param} setParam={setParam} />
            {error ? (
                <Typography.Text type={'danger'}>{error.message}</Typography.Text>
            ) : null}
            <List loading={isLoading} users={users || []} dataSource={list || []} />
        </Container>
    );
};

ProjectListScreen.whyDidYouRender = false;
const Container = styled.div`
  padding: 3.2rem;
`;
