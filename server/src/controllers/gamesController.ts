import {Request,Response} from 'express'
import pool from '../database';
class GamesController{
    
    public  async getOne (req:Request, res:Response) : Promise<any>{
       // res.json({text: 'juego  '+req.params.id})
       const { id } = req.params;
       const games = await pool.query('select * from games where id = ? ',[id]);
       if(games.length>0){
        res.json(games[0])
       }else{
         return res.status(404).json({text:"juego no existe"})
       }

       
      
    }

   public  async list (req:Request, res:Response){
     const games= await  pool.query('select * from games');
     res.json(games);
    }
    public async create(req:Request, res:Response){
       await pool.query('INSERT INTO games set ?',[req.body])
        console.log(req.body)
        res.json({text: 'Juego creado'})
    }
    public async delete(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        const games = await pool.query('delete  from games where id = ? ',[id]);
        res.json({text: 'juego eliminado '+req.params.id})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        const games = await pool.query('update games set ? where id = ? ',[req.body,id]);
        res.json({text: 'juego actualizado '+req.params.id})
    }
}
export const gamesController = new GamesController();
export default gamesController