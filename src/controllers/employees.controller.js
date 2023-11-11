import { pool } from '../db.js'

export const getEmployees = async ( req, res ) =>
{
    try
    {
     const [rows] = await pool.query('select * from employees');
     res.json(rows);
    }
    catch
    {
        return res.status(500).json({ message: "Someting goes wrong"})
    }
}

export const getEmployee = async ( req, res ) => 
{
    try
    {

        const [ rows ] = await pool.query('select * from employees where id = ?',[req.params.id]);
        if( rows <= 0 )
        {
            return res.status(404).json({
                message: "Employe not found"
            });
        }
        res.json(rows);
    }
    catch
    {
        return res.status(500).json(
            {
                message: "Somenthing goes wrong"
            }
        );
    }
}  

export const createEmployees = async( req, res ) =>
{   const { name, salary } = req.body;
    try
    {
        const [rows]  = await pool.query('insert into employees (name, salary) value (?,?)', [name, salary]);
        res.send({rows});
    }
    catch
    {
        return res.status(500).json(
            {
                message: "Something goes wrong"
            }
        );
    }
}

export const updateEmployes = async ( req, res ) => 
{
    const { id } = req.params;
    const { name, salary } =  req.body;
    try
    {
       
        const result = await pool.query('update employees set name = ifnull( ?, name ), salary = ifnull( ?, salary) where id = ?',[name, salary, id ]);
        if( result.affectedRows === 0 )return res.status(404).json({
        mensaje: "employee not found" 
            }
        );

        const [rows] = await pool.query('select * from employees where id = ? ', id );
        console.log( result );
        res.json( rows[0] );
        }
    catch
    {
        res.status(500).json(
            {
                message: "Somethin goes wrong"
            }
        );
    }

}


export const deleteEmployees = async( req, res ) =>
{
    try
    {
        const result = await pool.query('delete from employees where id = ?',[req.params.id]);
        if( result.affectedRows <= 0) return res.status(404).joson(
            {message: "Employee not found"}
        );
        res.sendStatus(204);
    }
    catch
    {
        return res.status(500).json(
            {
                message: "Somethin goes wrong"
            }
        );
    }
}