import { pool } from "../../src/utils/db.js";

export const deleteData = async (req, res) => {
  
  // const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

  try {

    let sql = ``;
    const params = req.query;

    /*===================================================================
    Peticion DELETE para eliminar datos de los carritos de los usuarios
    ====================================================================*/
    if (params.kingdomDeleteCartUser) {
      sql = `DELETE FROM shoppingcarts WHERE idfirebaseuser_shoppingcart = '${params.kingdomDeleteCartUser}'`;

      /*=============================================
      Peticion DELETE para eliminar datos
      =============================================*/
    } else {
      sql = `DELETE FROM ${params.table} WHERE ${params.nameId} = '${params.id}'`;
    }

    const [rows] = await pool.query(sql);

    if (rows.affectedRows <= 0) {
      return res.status(400).json({ message: "record not found" });
    }
    return res.status(200).json({"status":"The process was successful"});
    
  } catch (error) {
    return res.status(400).json({ message: "Something goes wrong" });
  }
};