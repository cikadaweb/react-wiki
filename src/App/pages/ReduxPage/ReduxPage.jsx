import Footer from '@/App/pages/ReduxPage/components/Footer';
import AddTodo from '@/App/pages/ReduxPage/components/containers/AddTodo';
import VisibleTodoList from '@/App/pages/ReduxPage/components/containers/VisibleTodoList';


const ReduxPage = () => {

    return (
        <div className="container">
            <div>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        </div>
    );
};

export default ReduxPage;