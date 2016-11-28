#Add Package

npm install --save think-websql

#Create File:

custom_definitions/think-websql.d.ts

![alt tag](https://lh6.googleusercontent.com/qO9SUINMG3Fea6Tu5M6qcZJTbv5Nwt9lAK5E0AjzQxMcLEEgMpOQfoGez80qIKTxDcuivUI8pCf-KH8=w1680-h944-rw)

![alt tag](https://lh6.googleusercontent.com/2BG5VFnipTPLNchr1gbMnEHuAxwNv7dFN5VPpHywBf_27EhSorbL7hmCye4V3LkLCcBcHbo36LUGlB4=w1680-h944-rw)

![alt tag](https://lh3.googleusercontent.com/En0H8buSFi8fizXHR5ej7T3_ZEZUhmTZNvYPzrT4QujHfJcECz8x6k2ePomn7_TL_5W42kkaNgQVJd4=w1680-h944)


#Example Typescript:

![alt tag](https://lh3.googleusercontent.com/w5Fmz919IGg8fQh4Rcb8-cXD4e-ZXDvVsYiEdiSIs-c1hmmQBX4tMNOFRuO4lrRboBMlqn8lJQdOv5k=w1680-h944)

'''

import ThinkWebSql = require("think-websql");

@Injectable()

export class UserData {

    db: any;

    constructor() {

        this.db = ThinkWebSql.WindowDatabase.openDatabase('thinkdb', '1.0', 'DB ThinkApp', 2 * 1024 * 1024);

        this.db.transaction(function (tx: any){

            tx.executeSql('CREATE TABLE IF NOT EXISTS user (id unique, username, password, hasLoggedIn, defaultPassword);');

            tx.executeSql('INSERT INTO user (id, username, password, hasLoggedIn, defaultPassword) values (1, "thinker", "120130", "false", "102030");');

         });

    }

    login(user: User) {

        return new Promise((resolve, reject) => {

            this.db.transaction(function (tx: any) {

                tx.executeSql("SELECT password from user WHERE username = '" + user.username.toLowerCase() + "'", [], function (tx: any, results: any) {

                    if (results.rows.length > 0) {

                        if (results.rows.item(0).password == user.password)

                            resolve(true);

                    }

                    resolve(false);

                }, null);

            });

        });

    }

}

'''