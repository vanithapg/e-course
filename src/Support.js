
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Support extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="desc">Enter your Query</label>
          <Field name="desc" component="input" type="textarea"/>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

Support = reduxForm({
  form: 'support'
})(Support);

export default Support;