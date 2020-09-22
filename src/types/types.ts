export const PHONE: string = 'PHONE';
export const EMAIL: string = 'EMAIL';

export const ACCEPTED: string = 'ACCEPTED';
export const FINISHED: string = 'FINISHED';
export const CANCELED: string = 'CANCELED';
export const REQUESTING: string = 'REQUESTING';
export const ONROUTE: string = 'ONROUTE';

export type verificationTarget = typeof PHONE | typeof EMAIL

export type rideStatus = typeof ACCEPTED | typeof FINISHED | typeof CANCELED | typeof REQUESTING | typeof ONROUTE;
