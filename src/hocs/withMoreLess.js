import { useState } from 'react';

function withMoreLess(MoreLessComponent) {
  return function foo() {
    const [isMore, setIsMore] = useState(false);

    function handleMore() {
      setIsMore((prevIsMore) => !prevIsMore);
    }
   
    // eslint-disable-next-line
    return <MoreLessComponent handleMore={handleMore} isMore={isMore} />;
  };
}

export default withMoreLess;
