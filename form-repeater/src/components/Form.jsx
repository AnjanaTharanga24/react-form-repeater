import React, { useState } from 'react';
import '../css/form.css';

export default function Form() {
    const [forms, setForms] = useState([{ id: 0 }]);
    const [formData, setFormData] = useState([]);

    const handleChange = (event, formId) => {
        const updatedFormData = [...formData];
        const formIndex = updatedFormData.findIndex(form => form.id === formId);

        if (formIndex === -1) {
            updatedFormData.push({ id: formId, [event.target.name]: event.target.value });
        } else {
            updatedFormData[formIndex] = { ...updatedFormData[formIndex], [event.target.name]: event.target.value };
        }

        setFormData(updatedFormData);
    };

    const addForm = () => {
        const newFormId = forms.length;
        setForms([...forms, { id: newFormId }]);
    };

    const removeForm = (formId) => {
        if (forms.length > 1) {
            setForms(forms.filter(form => form.id !== formId));
            setFormData(formData.filter(form => form.id !== formId));
        }
    };

    return (
        <div className='p-5 w-75 container'>
            {forms.map((form) => (
                <div key={form.id} className='shadow card mt-5 form-card'>
                    <form className='p-5 text-start'>
                        <div className="form-group">
                            <label htmlFor={`fullName-${form.id}`} className='lable-text'>Full name</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`fullName-${form.id}`}
                                name="fullName"
                                onChange={(e) => handleChange(e, form.id)}
                                placeholder="Enter name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`age-${form.id}`} className='lable-text'>Age</label>
                            <input
                                type="number"
                                className="form-control"
                                id={`age-${form.id}`}
                                name="age"
                                onChange={(e) => handleChange(e, form.id)}
                                placeholder="Enter age"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`address-${form.id}`} className='lable-text'>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`address-${form.id}`}
                                name="address"
                                onChange={(e) => handleChange(e, form.id)}
                                placeholder="Enter address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`mobileNumber-${form.id}`} className='lable-text'>Mobile number</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`mobileNumber-${form.id}`}
                                name="mobileNumber"
                                onChange={(e) => handleChange(e, form.id)}
                                placeholder="Enter mobile"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`email-${form.id}`} className='lable-text'>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id={`email-${form.id}`}
                                name="email"
                                onChange={(e) => handleChange(e, form.id)}
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`password-${form.id}`} className='lable-text'>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id={`password-${form.id}`}
                                name="password"
                                onChange={(e) => handleChange(e, form.id)}
                                placeholder="Password"
                            />
                        </div>

                        <div className='mt-3'>
                            <button type="button" className="btn btn-danger mr-2 remove" onClick={() => removeForm(form.id)}>
                                Remove
                            </button>
                        </div>
                    </form>
                </div>
            ))}

            <div className='mt-3'>
                <button type="button" className="btn btn-primary addmore" onClick={addForm}>
                    + Add more
                </button>
            </div>
        </div>
    );
}