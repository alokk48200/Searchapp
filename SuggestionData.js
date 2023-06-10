
import Card from './Faker';
const SuggestionData=()=>{
    const list=[];
    for(var i=0;i<4;i++){
        list.push(Card);
    }
    return(
        <>
       <div>
       <h2 id="header">Latest Trends:</h2>
        <div className='cart'>
       
        
            { list.map((card)=>{
                return   <Card/>;
             })
            }</div>
           </div>
           <h2 id="header">Popular Suggestion:</h2>
         <div className='id2'>
            <ul className='id1'>
                <li>Stripe shirt dress</li>
                <li>Stain dress</li>
                <li>Denim suits</li>
                <li>Jockey paints</li>
                <li>Solid tshirts</li>
            </ul>
         </div>
        </>
    )
}
export default SuggestionData;