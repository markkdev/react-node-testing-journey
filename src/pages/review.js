import { useRouter } from 'next/router';
import React from 'react';
import { Text } from '../components/common';
import { Layout } from '../components/Layout';
import { ReviewForm } from '../components/ReviewForm';

function Review() {
  const router = useRouter();
  return (
    <Layout>
      <Text variant="h1">Leave a review!</Text>
      <div className="mt-10 w-full mx-auto flex justify-center">
        <ReviewForm onCompleted={() => router.push('/thanks')} />
      </div>
    </Layout>
  );
}

export default Review;
