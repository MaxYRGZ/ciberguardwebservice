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
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS contrasenas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, contraseña TEXT NOT NULL)',
                [],
                () => console.log('Created table Contrasenas'),
                (error) => console.error('Error creating table Contrasenas:', error)
            );
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS consejos (id INTEGER PRIMARY KEY AUTOINCREMENT, consejo TEXT NOT NULL)',
                [],
                () => console.log('Created table Consejos'),
                (error) => console.error('Error creating table Consejos:', error)
            );
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS preguntas_respuestas (id INTEGER PRIMARY KEY AUTOINCREMENT, pregunta TEXT NOT NULL, respuesta TEXT)',
                [],
                () => console.log('Created table PreguntasRespuestas'),
                (error) => console.error('Error creating table PreguntasRespuestas:', error)
            );
            

  
        });
    }
}
