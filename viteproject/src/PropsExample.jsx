// const PropsExample = (props) => {
const PropsExample = ({myname,myage}) => {
  return (
    <div>
      <h3>Name is == {myname}</h3>
      {/* <h3>Age is == {props.myage}</h3> */}
      {/* <h3>Name is == {props.myname}</h3> */}
      <h3>Age is == {myage}</h3>
    </div>
  )
}
export default PropsExample
