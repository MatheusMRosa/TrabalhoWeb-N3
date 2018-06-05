import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import {addNewToDo} from './addNewToDoActions';

import AddNewToDo from '../../UI/AddNewToDo';

const mapStateToProps = state => ({});

const mapDispatchToProps = ({
    addNewToDo
});

export default reduxForm({ form: 'AddNewToDoForm' })(connect(mapStateToProps, mapDispatchToProps)(AddNewToDo))
