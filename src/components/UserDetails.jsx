import { useParams } from "react-router-dom"



const UserDetails = () => {
    const { userId } = useParams();
  return (
    <div>UserDetails  {userId}</div>
  )
}

export default UserDetails