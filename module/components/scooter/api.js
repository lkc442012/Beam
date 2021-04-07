import { callAPI } from '../../util/network';

export const getScooterList = () => callAPI('/api/scooter', {});
