import { Formik, ErrorMessage, Field, Form } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
export default function ContactForm ({onAdd}){
const ContactSchema = Yup.object().shape({
        username: Yup.string()
          .min(3, "Too short!")
          .max(50,"Too long!")
          .required("Required"),
        number:Yup.string()
        .min(3, "Too short!")
        .max(12,"Too long!")
        .required("Required"),});

   
    const fieldIdName = useId();
    const fieldIdNumber = useId();
    const handleSubmit = (values,actions) =>{
        onAdd({
            id: nanoid(),
      name: values.name,
      number: values.number,
        });
        actions.resetForm();
    };

    
    return(
        <Formik
        initialValues={{
            username:"",
            number:"",}}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
        <Form className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor={fieldIdName}>Name</label>
            <Field className={css.input} 
            type="text" 
            name = "username" 
            id={fieldIdName}/>
            <ErrorMessage className={css.error}
            name="username"
            component="span"
            />
             </div>
             <div className={css.formGroup}>
                <label htmlFor={fieldIdNumber}>Number</label>
            <Field className={css.input}
            type ="tel" 
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            id={fieldIdNumber}/>
             <ErrorMessage className={css.error}
            name="number"
            component="span"
            />
            </div>
            <button type="submit">Add contact</button>
           
        </Form>
        </Formik>
    );
        }
