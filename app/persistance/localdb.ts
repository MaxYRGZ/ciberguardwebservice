import SQLite from 'react-native-sqlite-storage';

export default class LocalDB {
    static connect() {
        return SQLite.openDatabase({ name: 'ciberguard' });
    }

    static async init() {
        const db = await LocalDB.connect();
        
     
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS cuenta (id INTEGER PRIMARY KEY CHECK (id = 1), correo TEXT NOT NULL, contraseña TEXT NOT NULL)',
                [],
                () => console.log('Created table Cuenta'),
                (error) => console.error('Error creating table Cuenta:', error)
            );

        });
    }
}
