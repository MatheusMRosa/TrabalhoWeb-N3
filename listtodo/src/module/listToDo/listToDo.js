import { connect } from 'react-redux';
import { alterStatusToDo } from './listToDoActions';
import ListToDo from '../../UI/ListToDo';

const mapStateToProps = state => ({
    list: state.listToDo.list
});

const mapDispatchToProps = ({
    alterStatusToDo
});


export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);