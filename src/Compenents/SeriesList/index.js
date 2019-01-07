import React from 'react';


const SeriesListItem =({series})=>
(
	<li > 
				{series.show.name}
				 </li>

)


const SeriesList = (props) =>
{
	console.log(props.list);
	
	return (

		<div>

			<ul>
			{props.list.map(series => (
				<SeriesListItem series={series} key={series.show.id}/>
				))}
				</ul>
				</div>
				
		)



}

export default SeriesList;