import Logo from '../../../assets/logos/logo_sjl.png'
import logo_claro from '../../../assets/logos/sjl_logo_claro.png';
import { Link, useLocation } from 'react-router-dom'
import MenuUser from '../../users/menu/MenuUser';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <>
      <header className='w-full flex flex-col items-center justify-center py-4 h-20 border-b dark:border-neutral-700'>
        <div className='px-3 flex justify-between w-[95%] max-w-[1440px]'>
          <div className='flex items-start z-10'>
            <Link to="/" aria-label='Logo Sjl' className={`${location.pathname === '/' ? 'hidden md:flex' : ''}`}>
              {darkMode ? (
                <img src={logo_claro} className='h-12' width={132} height={48} alt="Logo" />
              ) :
                (
                  <img src={Logo} className='h-12' width={132} height={48} alt="Logo" />
                )}

            </Link>
          </div>
          <div className='items-start z-10 hidden md:flex'>
            <MenuUser />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header