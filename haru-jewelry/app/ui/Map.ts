import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./components/MapComponent'), { ssr: false});
export default Map