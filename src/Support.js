import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Support = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Enter your Enquiry</label>
        <div>
          <Field name="enquiry" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'support',
})(Support);
