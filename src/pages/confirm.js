import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Text } from '../components/common';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviewForm, submitReviewAsync } from '../slices/review';

function Confirm() {
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector(selectReviewForm);
  return (
    <Layout>
      <Text variant="h1">Confirm before submitting</Text>
      <div className="mt-10 w-full mx-auto flex justify-center">
        {/* <ReviewFormConfirmation /> */}
      </div>
      <Button
        className={'mt-4'}
        loading={status === 'loading'}
        name="submit-review"
        onClick={async () => {
          const { payload } = await dispatch(submitReviewAsync());
          setResponseMessage(payload);
          router.push('/thanks');
        }}
      >
        Submit
      </Button>
      {responseMessage && (
        <span className={'mt-4'}>
          <Text variant="h3">{responseMessage}</Text>
        </span>
      )}
    </Layout>
  );
}

export default Confirm;
