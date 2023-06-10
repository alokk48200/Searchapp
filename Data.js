import Card from './Faker';
const Data=()=>{
    const list=[];
    for(var i=0;i<100;i++){
        list.push(Card);
    }
    return(
        <div>
            <div className='cart1'>
       
        
       { list.map((card)=>{
           return   <Card/>;
        })
       }</div>
        </div>
    )
}
export default Data;