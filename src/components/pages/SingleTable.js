import {  useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { getTableById } from "../../Redux/tablesRedux"
import PropTypes from 'prop-types';
import EditTableForm from "../features/EditTableForm";

const SingleTable = () => {
  const { id } = useParams()
  const table = useSelector(state => getTableById(state, parseInt(id) ))
  // console.log(table);

  if(!table) return <Navigate to="/"/>
  return (
    
    <EditTableForm table={table}/>
  )
}

EditTableForm.propTypes = {
  table: PropTypes.object
}

export default SingleTable