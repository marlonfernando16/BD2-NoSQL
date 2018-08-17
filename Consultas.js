

1.01 com Cole��o inteira
 /* Consulta com cole��o 
inteira ordenado pelo nome */

db.paciente.find().sort({nome: 1})

2.  01 com Contagem de documentos na cole��o

/* Contando os pacientes cadastrados */

db.paciente.count()

3 . 03 consultas com filtros diversos (IN, GT, etc), sem proje��o
/* Exibindo os pacientes que tem convenio */
db.paciente.find({
"Convenio" :{$exists:
 true}})

/* Exibindo os pacientes que sao de 
Joao Pessoa */

db.paciente.find({
"endereco.cidade":{$eq:"joao pessoa"}})

/* Exibindo os pacientes que n�o tem convenio */
db.paciente.find({
"Convenio" :{$exists:
 false}})


4. 03 consultas com filtros diversos, com proje��o

/* consultando o valor mais caro */

db.paciente.aggregate(
   [
      {
        $group : {
            _id : 0,
            valor: { $max: "$valor" }
        }
      }
   ]
)


/* Listando o nome e o email dos pacientes */

db.paciente.find({
"Convenio" :{$exists:
 false}})

/* filtrando  nome e endereco dos clientes que s�o da para�ba  */

db.paciente.find({"endereco.uf": "PB"},{nome:1,endereco:1,_id:0})

5. 01 consulta com filtro, proje��o e uso de express�o regular.
/* Nome dos clientes que moram em ferreiros, e 
que comecam com M */

db.paciente.find({"
endereco.cidade":"ferreiros",
nome:{$regex:/M/}},{nome:1,_id:0})



6. 01 consulta com acesso a array de elementos

/* Nome e Telefones(caso existam) do cliente */
db.paciente.find({
 "telefones" :{$exists:
 true}},{nome:1,_id:0,telefones:1})

7. 01 consulta com acesso a estrutura embutida

db.paciente.find({
 "Convenio" :{$exists:
 true}},{nome:1,_id:0,Convenio:1})

8.  01 consulta com fun��o de agrega��o (sum, avg, max ou min)

Consultando o somatorio do valor dos pacientes sem convenio

db.paciente.aggregate(
   [
      {
        $group : {
           _id:null,
           valor: { $sum: "$valor" }
        }
      }
   ]
)


9.  01 consulta que use distinct ou limit

/* Consultando o primeiro paciente cadastrado */

db.paciente.find({},{_id:0}).limit(1)


10. Fa�a uma consulta a seu crit�rio

/* Consultando o nome e o valor dos pacientes que n�o tem convenio */

db.paciente.find({"Convenio" :{$exists:
 false}},{nome:1,valor:1,_id:0})






