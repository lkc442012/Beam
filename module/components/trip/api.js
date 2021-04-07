import { callAPI } from '../../util/network';

export const getTripList = () => callAPI('/api/trip', {});
