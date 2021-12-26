

const cbMap = (el,index)=> {
return(
    <div>
    <li key={index}>{`My name: ${el.nombre}`}</li>
    <li key={index}>{`My email : ${el.email}`}</li>
    <li key={index}>{`My Password : ${el.password}`}</li>
    </div>
)
}


export default cbMap