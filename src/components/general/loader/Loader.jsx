import { useSelector } from 'react-redux';
import Logo from '../../../assets/logos/logo_sjl.png'

const loader = () => {
    const { loading } = useSelector((state) => state.auth);
    const className = loading ? 'bg-white/80 z-[9999] opacity-100' : 'z-[-1] opacity-0';

    return (
        <div id='loader' className={`${className} transition-all absolute top-0 left-0 w-full h-full flex items-center justify-center`}>
            <div className='container flex items-center justify-center'>
                <img className='max-w-[160px] animate-scaleUpDown drop-shadow-lg' src={Logo} alt="logo_sjl" />
            </div>
        </div>
    )
}

export default loader