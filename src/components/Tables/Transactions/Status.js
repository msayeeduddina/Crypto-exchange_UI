import { memo } from 'react';
import PropTypes from 'prop-types';

const Status = memo(({ status }) => {
  if (status === 1) {
    return <span className='status green'>finished</span>;
  }

  if (status === 2) {
    return <span className='status red'>cancel</span>;
  }

  return <span className='status gray'>waiting</span>;
});

Status.propTypes = {
  status: PropTypes.number.isRequired,
};

export default Status;
