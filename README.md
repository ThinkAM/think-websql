#Add Package

npm install --save think-websql

#Create File:

custom_definitions/think-websql.d.ts

![think-websql.d.ts Line 1 - 58](https://raw.githubusercontent.com/ThinkAM/images/master/think-websql/ThinkWebSql-1-58.JPG)

![think-websql.d.ts Line 59 - 116](https://raw.githubusercontent.com/ThinkAM/images/master/think-websql/ThinkWebSql-59-116.JPG)

![think-websql.d.ts Line 117 - 139](https://raw.githubusercontent.com/ThinkAM/images/master/think-websql/ThinkWebSql-117-139.JPG)


#Example Typescript:

![Reference think-websql.d.ts](https://raw.githubusercontent.com/ThinkAM/images/master/think-websql/reference.JPG)

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