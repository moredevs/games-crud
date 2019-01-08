import mysql from 'promise-mysql'
import keys  from './keys'
import { PoolCluster } from 'mysql';
const pool=mysql.createPool(keys.database)
pool.getConnection()
.then(connection=>{
    pool.releaseConnection(connection)
    console.log("bd esta conectado")
})

export default pool;