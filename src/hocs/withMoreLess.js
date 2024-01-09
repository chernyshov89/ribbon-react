import { useState } from 'react';

function withMoreLess(MoreLessComponent) {
  return function foo() {
    const [isMore, setIsMore] = useState(false);

    const handleMore = () => {
      setIsMore((prevIsMore) => !prevIsMore);
    };
    
    return <MoreLessComponent handleMore={handleMore} isMore={isMore} />;
  };
}

export default withMoreLess;
