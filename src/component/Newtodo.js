import { useEffect, useState } from "react"
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom"
import { Form, Formik, Field, ErrorMessage } from "formik"
import { useDispatch, useSelector } from 'react-redux';


import { addTodos, updateToDosStatus } from "../actions";

function NewToDo(){


    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {id} = useParams();


    const todo = useSelector((state) =>id ? state.data.find((todo) => String(todo.id) === String(id)) : null);
    
    const error = useSelector((state) => state.error);

    const [initialValues,setInitialValues]=useState({
        id:"",
        title:"",
        description:""
    })



    useEffect(() => {
        if (id && todo) {
          setInitialValues({
            id:todo.id,
            title: todo.title || "",
            description: todo.description || "",
            dueDate: todo.dueDate ? todo.dueDate.slice(0, 10) : ""
          });
        }
      }, [id, todo]);

  

function onSubmit(values, { setSubmitting }) {

    console.log("Values",values);
    if (id) {
        dispatch(updateToDosStatus(id, values.isCompleted))
            .then(() => {
                console.log("updated values are",values);
                setSubmitting(false);
                navigate("/");
            }).catch(
                error => {
                    console.log(error)
                    setMessage(error.ErrorMessage)
                    setTimeout(()=> setMessage(""), 2000)
            });
    } else {
        dispatch(addTodos(values.title, values.description, values.dueDate))
            .then(() => {
                setSubmitting(false);
                navigate("/");
            })
            .catch((err) => {
                console.error("Error Adding todo", err);
                setSubmitting(false);
            });
    }
}
    function validate(values){
        let errors = {}

        if (values.description.length < 5)
        {
            errors.description =  "Minimum characters in description is 5"
        }
        return errors;
    }


    return (
        <div className="container-fluid">
            <h1 className="mb-4 todo_heading">Enter your new todo details</h1>
            <Formik 
            initialValues={initialValues} 
            enableReinitialize={true}
            onSubmit={onSubmit}
            validate={validate}
            validateOnBlur={false}
            validateOnChange={false}>
                {
                    (props) => {
                        return (
                            <Form>
                                 {error && <div className="alert alert-danger">{error}</div>}

                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />

                           
                                <fieldset className="form-group">
                                    <label className="todo_label">Title</label>
                                    <Field type="text" className="form-control" name="title"/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label className="todo_label">Description</label>
                                    <Field type="text" className="form-control " name="description"/>
                                </fieldset>

                           

                                <div className="text-center my-4">
                                    <button className="btn btn-success" type="submit">
                                        Save
                                    </button>
                            </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default connect(
  null
)(NewToDo);