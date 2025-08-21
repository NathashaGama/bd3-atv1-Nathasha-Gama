const datadabase = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(datadabase);
db.createCollection(collection);

//listando TODOS os alunos
//db['bd3-nosql-atv1'].find();

//listando aluno pelo campo CFP
//db['bd3-nosql-atv1'].find({"cpf":"111111111-2"});

//listando aluno pelo cpf sem mostrar o campo cod_aluno
db['bd3-nosql-atv1'].find({"cpf": '000000000-1'},{"_id":0,"cod_aluno":0});