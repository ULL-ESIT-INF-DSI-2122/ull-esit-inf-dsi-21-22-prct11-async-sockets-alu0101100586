import '../db/moongose';
import {User} from '../models/user';

export function UpdateUser(new_name: string, new_sur: string, new_age: number, new_email:string, new_passwd:string, find: string) {
    const user = new User({
        name: new_name,
        surname: new_sur,
        age: new_age,
        email: new_email,
        passwd: new_passwd,
    });

    User.findOneAndUpdate({ email: find }, user, { new: true}).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}

UpdateUser('Jonay', 'Estévez', 38, 'jonay@email.com', 'q1w2e3r4', 'jonay@email.com');