/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import FormWrapper from '~/components/FormWrapper';

import { DropdownList } from './styles';

// import { Container } from './styles';

export default function EditRegistration() {
  const options = [
    { key: '1', value: '1', text: 'Aluno 1' },
    { key: '2', value: '2', text: 'Aluno 2' },
  ];
  return (
    <FormWrapper title="Edit Registration">
      <Form>
        <div>
          <label htmlFor="name">Student</label>
          <DropdownList
            name="name"
            fluid
            search
            selection
            openOnFocus
            placeholder="Select a student"
            options={options}
          />
        </div>
        <div>
          <div>
            <div className="visible">
              <label htmlFor="plan">Plan</label>
              <DropdownList
                name="plan"
                fluid
                search
                selection
                openOnFocus
                placeholder="Plan"
                options={options}
              />
            </div>
            <div>
              <label htmlFor="start_date">Start Date</label>
              <Input name="start_date" type="date" />
            </div>
            <div>
              <label htmlFor="end_date">End date</label>
              <Input name="height" type="date" disabled />
            </div>
            <div>
              <label htmlFor="final_price">Final Price</label>
              <Input name="final_price" type="text" disabled />
            </div>
          </div>
        </div>
      </Form>
    </FormWrapper>
  );
}
