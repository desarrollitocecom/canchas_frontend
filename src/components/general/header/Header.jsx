import Logo from '../../../assets/logos/logo_sjl.png'
import logo_claro from '../../../assets/logos/sjl_logo_claro.png';
import { Link } from 'react-router-dom'
import MenuUser from '../../users/menu/MenuUser';
import SearchPanel from '../../canchas/searchPanel/SearchPanel';
import { useSelector } from 'react-redux';

const Header = () => {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <header className='w-full border-b dark:border-neutral-800 flex flex-col items-center justify-center py-4'>
      <div className='container px-3 flex justify-between items-center'>
        <Link to="/" aria-label='Logo Sjl'>
          {darkMode ? (
            <img src={logo_claro} className='h-12' width={132} height={48} alt="Logo" />
          ) :
            (
              <img src={Logo} className='h-12' width={132} height={48} alt="Logo" />
            )}

        </Link>
        <div className='flex items-end'>
          <SearchPanel />
        </div>
        <div className='flex items-center'>
          <MenuUser />
        </div>
      </div>
    </header>
  )
}

export default Header