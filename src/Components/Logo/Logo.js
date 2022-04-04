import React from 'react';
import Tilt from 'react-tilt';
import cpu from './cpu.png';

const Logo = () =>
{
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2 pa3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> <img alt='Eye Logo' src={ cpu }/> </div>
			</Tilt>
		</div>
	);
}

export default Logo;