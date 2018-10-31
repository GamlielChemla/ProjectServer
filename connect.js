let express = require('express')
let mysql = require('mysql');
var bodyParser = require('body-parser')
let app = express();

const port = 5000;


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rina3004',
    database: "risk"
  
  });
  connection.connect(function (err) {
    if (!!err) {
      console.log('error: ' + err.message);
    } else {
      console.log("connect");
  
    }
  });
  app.use(bodyParser.json())
  app.post('/page', (req, res)=> {
    
    console.log("req",req.body)
  
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Max-Age', 86400)
    res.header('Access-Control-Allow-Headers', '*');
   
    console.log("1er");
    
  
   insertInDb = (req)=>{
      let ProbabilityTest=req.body.ProbabilityTest
      let ConcequenceTest=req.body.ConcequenceTest
      let MitigationTest=req.body.MitigationTest
      let ReasonTest=req.body.ReasonTest
      let ProbabilityBudget=req.body.ProbabilityBudget
      let ConcequenceBudget=req.body.ConcequenceBudget
      let MitigationBudget=req.body.MitigationBudget
      let ReasonBudget=req.body.ReasonBudget
      let ProbabilityDeliveryD=req.body.ProbabilityDeliveryD
      let ConcequenceDeliveryD=req.body.ConcequenceDeliveryD
      let MitigationDeliveryD=req.body.MitigationDeliveryD
      let ReasonDeliveryD=req.body.ReasonDeliveryD
      let ProbabilityCustomer=req.body.ProbabilityCustomer
      let ConcequenceCustomer=req.body.ConcequenceCustomer
      let MitigationCustomer=req.body.MitigationCustomer
      let ReasonCustomer=req.body.ReasonCustomer
      


      // let query = 'select * from myproject.Riskmanager'

      let sql = `INSERT INTO myproject.RiskManager (ProbabilityTest,ConcequenceTest,MitigationTest,ReasonTest,ProbabilityBudget,ConcequenceBudget,MitigationBudget,ReasonBudget,ProbabilityDeliveryD,ConcequenceDeliveryD,MitigationDeliveryD,ReasonDeliveryD,ProbabilityCustomer,ConcequenceCustomer,MitigationCustomer,ReasonCustomer) VALUES 
      
      ('${ProbabilityTest}', '${ConcequenceTest}', '${MitigationTest}', '${ReasonTest}',
      '${ProbabilityBudget}', '${ConcequenceBudget}', '${MitigationBudget}', '${ReasonBudget}',
      '${ProbabilityDeliveryD}', '${ConcequenceDeliveryD}', '${MitigationDeliveryD}', '${ReasonDeliveryD}',
      '${ProbabilityCustomer}', '${ConcequenceCustomer}', '${MitigationCustomer}', '${ReasonCustomer}')`
    // console.log(sql);
    
    return sql
    // return query
  }
  const mysqlll = insertInDb(req);

// console.log(mysqlll);

     connection.query(mysqlll, (err, result, files, rows) => {
      if (err) {
        console.log('error query ' + err.message);
      } else {
        console.log("succes ",result)
        
      }
    
    })
    
})
 
  app.listen(port, () => console.log(`server ${port}`))