import Logo from '../../../assets/logos/logo_sjl.png'
import logo_claro from '../../../assets/logos/sjl_logo_claro.png';
import { Link } from 'react-router-dom'
import MenuUser from '../../users/menu/MenuUser';
import { useSelector } from 'react-redux';
import SearchPanel from '../../canchas/searchPanel/SearchPanel';

const Header = () => {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <>
      <header className='w-full flex flex-col items-center justify-center py-4 h-20'>
        <div className='container px-3 flex justify-between'>
          <div className='flex items-start z-10'>
            <Link to="/" aria-label='Logo Sjl'>
              {darkMode ? (
                <img src={logo_claro} className='h-12' width={132} height={48} alt="Logo" />
              ) :
                (
                  <img src={Logo} className='h-12' width={132} height={48} alt="Logo" />
                )}

            </Link>
          </div>
          <div className='flex items-start z-10'>
            <MenuUser />
          </div>
        </div>
      </header>
      <SearchPanel />
    </>
  )
}

export default Header