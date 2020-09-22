const PHONE: string = 'PHONE';
const EMAIL: string = 'EMAIL';

export const ACCEPTED: string = 'ACCEPTED';
export const FINISHED: string = 'FINISHED';
export const CANCELED: string = 'CANCELED';
export const REQUESTING: string = 'REQUESTING';
export const ONROUTE: string = 'ONROUTE';

export type verificationTarget = PHONE | EMAIL

export type rideStatus = ACCEPTED | FINISHED | CANCELED | REQUESTING | ONROUTE;
