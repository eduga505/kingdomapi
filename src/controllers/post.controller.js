import { request } from "express";
import { config } from "dotenv";
import { pool } from "../../src/utils/db.js";
import twilio from 'twilio';

const accountSid = process.env.ACCOUNTSIDTWILIO;
const authToken = process.env.AUTHTOKENTWILIO;

const client = twilio(accountSid, authToken);

export const postData = async (req= request, res) => {
  
  // const [rows] = await pool.query("INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);

  try {
    const params = req.query;
    const body = req.body;
    
    let sizeBody = Object.keys(body).length;
    let columsAux = Object.keys(body);
    let valuesAux = Object.values(body);

    let colums = '';
    let values = '';
    let sql = '';
    

    if (params.notification && params.body) {
      
      /*========================================================
       Estas son las notificaciones de TWILIO
      =========================================================*/

      try {
        const mensaje = await client.messages.create({
          body: params.body,
          from: process.env.PHONETWILIO,
          to: process.env.PHONETWILIOTO
        });

        return res.status(200).json({ message: `SMS enviado. ID del mensaje: ${mensaje.sid}` });
      } catch (error) {
        return res.status(400).json({ message: 'Error al enviar el SMS:', error });
      }
      
    } else {
      for (let i = 0; i < sizeBody; i++) {
        if (i === sizeBody - 1) {
          colums += `${columsAux[i]}`;
          values += `'${valuesAux[i]}'`;
        } else {
          colums += `${columsAux[i]},`;
          values += `'${valuesAux[i]}',`;
        }
        
      }
    
      sql = `INSERT INTO ${params.table} (${colums}) VALUES (${values})`;
      
      const [rows] = await pool.query(sql);
      
      res.status(200).json({
        "lastId": rows.insertId,
        "comment": "The process was successful"
      });
    }
    
    // for (const property in body) {
    //   console.log(`${property}: ${body[property]}`);
    // }

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};