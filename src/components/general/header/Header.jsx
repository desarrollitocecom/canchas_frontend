import Logo from '../../../assets/logos/logo_sjl.png'
import { Link } from 'react-router-dom'
import MenuUser from '../../users/menu/MenuUser';
import SearchPanel from '../../canchas/searchPanel/SearchPanel';

const Header = () => {

  return (
    <header className='w-full border-b flex flex-col items-center justify-start py-4'>
      <div className='container px-3 flex justify-between'>
        <Link to="/" aria-label='Logo Sjl'>
          <img src={Logo} className='h-12' height={48} alt="Logo" />
        </Link>
        <div className='flex items-center'>
          <MenuUser />
        </div>
      </div>
      <div>
        <SearchPanel />
      </div>
    </header>
  )
}

export default Header