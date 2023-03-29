import { pool } from "../../src/utils/db.js";

export const updateDate = async (req, res) => {

  // const [result] = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id]);

  try {
    const params = req.query;
    const body = req.body;

    let sizeBody = Object.keys(body).length;
    let columsAux = Object.keys(body);
    let valuesAux = Object.values(body);

    let colums = '';
    let values = [];
    let sql = '';
    
    for (let i = 0; i < sizeBody; i++) {
      if (i === sizeBody - 1) {
        colums += `${columsAux[i]} = IFNULL(?, ${columsAux[i]})`;
      } else {
        colums += `${columsAux[i]} = IFNULL(?, ${columsAux[i]}), `;
      }

      values.push(valuesAux[i]);
      
    }
    values.push(params.id);


    /*=============================================
      Ruta para eliminar la direccion
    =============================================*/
    if (params.id && params.nameId && params.address) {
      values = [];
      values.push('delete');
      values.push(params.id);

		  // $stmt = Connection::connect()->prepare("UPDATE $table SET $set WHERE $nameId = :$nameId");
      // 'state_address': 'delete'
      sql = `UPDATE ${params.table} SET state_address = IFNULL(?, state_address) WHERE ${params.nameId} = ?`;

      /*====================================================
			 Ruta para seleccionar la direccion preestablecida
		  ======================================================*/
    } else if(params.id && params.idItem && params.address) {
      values = [];
      values.push('0');
      values.push(params.id);
      sql = `UPDATE ${params.table} SET selected_address = IFNULL(?, selected_address) WHERE idfirebase_address = ?`;
      await pool.query(sql, values);

			// $query = "UPDATE `addresses` SET `selected_address` = '1' WHERE id_address = '";
      values = [];
      values.push('1');
      values.push(params.id);
      values.push(params.idItem);
      sql = `UPDATE ${params.table} SET selected_address = IFNULL(?, selected_address) WHERE idfirebase_address = ? AND id_address = ?`;
      const [result] = await pool.query(sql, values);

      return res.status(200).json({ 
        'status': 200,
        'results': "The process was successful"
      });






      /*====================================================
			 Ruta para eliminar la card
		  ======================================================*/
    } else if(params.id && params.nameId && params.card) {
      values = [];
      values.push('delete');
      values.push(params.id);

      sql = `UPDATE ${params.table} SET state_card = IFNULL(?, state_card) WHERE ${params.nameId} = ?`;
      const [result] = await pool.query(sql, values);

      return res.status(200).json({ 
        'status': 200,
        'results': "The process was successful"
      });


      /*====================================================
			 Ruta para seleccionar la card preestablecida
		  ======================================================*/
    } else if(params.id && params.idItem && params.card) {

      values = [];
      values.push('0');
      values.push(params.id);
      sql = `UPDATE ${params.table} SET selected_card = IFNULL(?, selected_card) WHERE iduserfirebase_card = ?`;
      await pool.query(sql, values);

      values = [];
      values.push('1');
      values.push(params.id);
      values.push(params.idItem);
      sql = `UPDATE ${params.table} SET selected_card = IFNULL(?, selected_card) WHERE iduserfirebase_card = ? AND id_card = ?`;
      const [result] = await pool.query(sql, values);

      return res.status(200).json({ 
        'status': 200,
        'results': "The process was successful"
      });














    } else {
      sql = `UPDATE ${params.table} SET ${colums} WHERE ${params.nameId} = ?`;
    }





    const [result] = await pool.query(sql, values);
    
    return res.status(200).json({ 
      'status': 200,
      'results': "The process was successful"
    });

  } catch (error) {
    return res.status(400).json({ message: "Something goes wrong" });
  }
};