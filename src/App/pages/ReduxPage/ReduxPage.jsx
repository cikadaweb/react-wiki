import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddTodo from '@/App/pages/ReduxPage/components/containers/AddTodo';
import VisibleTodoList from '@/App/pages/ReduxPage/components/containers/VisibleTodoList';
import Footer from '@/App/pages/ReduxPage/components/Footer';
import todoApp from '@/App/pages/ReduxPage/redux/reducers';

const ReduxPage = () => {

    const store = createStore(todoApp);

    return (
        <Provider store={store}>
            <div className="container">
                <div>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </div>
            </div>
        </Provider>
    );
};

export default ReduxPage;