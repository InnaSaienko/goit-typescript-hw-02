import s from "./SearchBar.module.css";
import stl from "../../App.module.css"
import {ErrorMessage, Field, Form, Formik, type FormikHelpers} from "formik";
import * as Yup from 'yup';
import toast from "react-hot-toast";
import type {JSX} from "react";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}
interface FormValues {
    query: string;
}

function SearchBar({onSubmit} : SearchBarProps) : JSX.Element {
    const initialValues : FormValues= {
        query: "",
    };
    const validationSchema = Yup.object({
        query: Yup.string()
            .min(3, "Query must be at least 3 characters long.")
            .required("Please enter text to search for images."),
    });

    const handleSubmit = (
        values: FormValues,
        actions: FormikHelpers<FormValues>) => {
        if (values.query.trim() === '') {
            toast.error('Please enter text to search for images.');
        } else {
            onSubmit(values.query.trim());
        }
        actions.resetForm();
    };

    return (
        <header className={s.searchBox}>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <Field className={s.input}
                           type="text"
                           name="query"
                           autoComplete={"off"}
                           id="query"
                           style={{ fontSize: '18px', padding: '10px' }}
                           placeholder="Search images and photos..."/>
                    <ErrorMessage name="query" component="span" className={s.errorMessage}/>
                    <button type="submit" className={stl.button}>Search</button>
                </Form>
            </Formik>
        </header>
    );
}

export default SearchBar;