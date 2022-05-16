import '../db/moongose';
import {User} from '../models/user'

export function addUser(user_n: string, user_s: string, user_a: number, user_e:string, user_p:string) {

    const user = new User({
        name: user_n,
        surname: user_s,
        age: user_a,
        email: user_e,
        passwd: user_p,
    });

    user.save().then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}

addUser('Eliminado', 'Deleted', 100, 'deleted@deleted.com', 'w5e6r7t8y9');
