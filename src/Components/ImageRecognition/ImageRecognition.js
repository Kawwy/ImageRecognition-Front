import React from 'react';
import './ImageRecognition.css'

const ImageRecognition = ({ imageUrl, box }) =>
{
	return(
		<div className='center ma'>
			<div className='absolute mt2 mb2'>
			 <img id='inputImage' alt="ImageRecognition" src={imageUrl} width='600' height='400'/>
			 <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	);
}

export default ImageRecognition;