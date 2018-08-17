
db.paciente.insert({nome : "Agelo",
   cpf:"56834263456",
endereco:{cep:"55880000",rua:" Rua do Sol",
    numero: 63, bairro: "centro",uf:"PE",cidade:
   "Ferreiros"},valor:100})
   
   
db.paciente.insert({nome : "Fernando",
  email: "fernandobeija@hotmail.com",
  endereco:{cep:"55880000",rua:"Praca 10 de marco ",
    numero: 62, bairro: "centro",uf:"PE",cidade:
   "Ferreiros"},valor:200})  
  
  
db.paciente.insert({nome : "JohnKobNeilson",
    Sexo:"Masculino" ,cpf:"12343768904",
    endereco:{cep:"58053100",rua:"Praca das Muricocas ",
    numero: 10, bairro: "Miramar",uf:"PB",cidade:
    "Joao Pessoa", email: "join.com"},valor:50})   
   
 
db.paciente.insert({nome : "Fagundes",
    Sexo:"Masculino",cpf:"12324343567",
    endereco:{cep:"58053100",rua:"Rua 10",
    numero: 30, bairro: "Tambau",uf:"PB",cidade:
       "Joao Pessoa", email: "join.com"},valor:50}) 
 
 
db.paciente.insert({nome : "Micheline",
  cpf:"12324343568",endereco:{cep:"55880000",
    rua:"Rua da esperanca", numero: 62, bairro:
   "Tambau",uf:"PB",cidade:
   "Joao Pessoa"},valor:150}) 


   
db.paciente.insert({nome : "junior",
  cpf:"12324343568", Convenio: [{nome:"Unimed"}],endereco:{cep:"55880000",
    rua:"Cohab", numero: 50, bairro:
   "centro",uf:"PE",cidade:
   "Ferreiros"}}) 

   
   db.paciente.find()
   