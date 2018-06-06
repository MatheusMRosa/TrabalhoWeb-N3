import { connect } from 'react-redux';
import { alterStatusToDo, deleteToDo } from './listToDoActions';
import ListToDo from '../../UI/ListToDo';

const mapStateToProps = state => ({
    list: state.listToDo.list
});

const mapDispatchToProps = ({
    alterStatusToDo,
    deleteToDo
});


export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);