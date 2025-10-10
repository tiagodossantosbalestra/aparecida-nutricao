       var titulo = document.querySelector("h1");
       console.log(titulo);
       console.log(titulo.textContent);
       titulo.textContent = ("Tiago nutricao");

       var paciente=document.querySelector("#primeiro-paciente");
       var tdNome = document.querySelector(".info-nome");
       var nome = tdNome.textContent;
       console.log(nome);

       var tdPeso =  paciente.querySelector(".info-peso");
       var peso = tdPeso.textContent;
       console.log(peso);

       //07/10/2025
       var tdAltura = document.querySelector(".info-altura")
       var altura = tdAltura.textContent;
       console.log(altura);

       var tdImc = paciente.querySelector(".info-imc");
       var imc = peso/ (altura * altura);
       console.log(imc);


       if(peso<0||peso> 1000){
              console.log("peso inválido");
       }

       if(altura<0||altura>3.00){
              console.log("Altura inválida");
              alturaEhValida = false 
       }

       var pesoEhValido=true;
       var alturaEhValida=true;

       
