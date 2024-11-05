import { AuthContext } from '../../auth/Context';
import { useContext } from 'react';
import './styles.css'

export default function LogoutButton() {
  const {logout} = useContext(AuthContext)
  return <button onClick={logout}>Logout</button>;
}
