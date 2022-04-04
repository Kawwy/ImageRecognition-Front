import React from 'react';

const Rank = ({ name, entries }) =>
{
	return(
		<div className='white f3'>
			<div className='center white f2'>
			 {`${name}, your current entry count is...`}
			</div>
			<div className='center white f1'>
			 {entries}
			</div>
		</div>
	);
}

export default Rank;