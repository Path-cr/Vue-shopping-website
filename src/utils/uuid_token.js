import { v4 as uuidv4 } from 'uuid';

export const getUuid = () => {
    let uuid_token = localStorage.getItem('VUITTON')
    if(!uuid_token) {
        uuid_token = uuidv4()
        localStorage.setItem('VUITTON', uuid_token)
    }
    return uuid_token
}