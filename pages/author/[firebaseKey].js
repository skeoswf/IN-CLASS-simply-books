import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((authorBooksArray) => (
          <BookCard key={authorBooksArray.firebaseKey} bookObj={authorBooksArray} />
        ))}
        {console.warn(authorDetails)}
      </div>
    </div>
  );
}
