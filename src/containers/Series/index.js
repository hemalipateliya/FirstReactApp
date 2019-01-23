import React, { Component } from 'react';
import SeriesList from '../../Compenents/SeriesList';

class Series extends Component{
	state = {

    series: [],
    seriesName:'',
    isFetching:false
  }

 

   

onSeriesInputChange=e=>
{

			this.setState({seriesName:e.target.value,isFetching:true});
		 fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(response=> response.json())
    .then(json=> this.setState({series:json,isFetching:false}));
  
		console.log(e);
		console.log(e.target.value)
}


		render()
	{
		const{series,seriesName,isFetching}=this.state;//////////////////////
		return( 
			


			<div> 
				<div>
				<input 
				value={seriesName}
				type="text" onChange={this.onSeriesInputChange}/>
				</div>
				{
					!isFetching && series.length===0 && seriesName.trim()===''
					&&
					<p> Please enter series name</p>

				}
				{

					!isFetching && series.length===0 && seriesName.trim()!==''
					&&
					<p> No Tv series have been found ..</p>

				}
				{

					isFetching && <p>loading........</p>
				}
				{

					!isFetching && <SeriesList list={this.state.series} />

				}
				<SeriesList list={this.state.series}/>

				</div>
			);
 
		}
}

export default Series;