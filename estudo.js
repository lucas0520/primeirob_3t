let tabuada = 111;

function escreva() {
  document.write(" Tabuada do " + tabuada + "<br>");
  document.write(tabuada + " X 1 = " + (tabuada * 1) + "<br>");
  document.write(tabuada + " x 2 = " + (tabuada * 2) + "<br>");
  document.write(tabuada + " x 3 = " + (tabuada * 3) + "<br>");
  document.write(tabuada + " x 4 = " + (tabuada * 4) + "<br>");
  document.write(tabuada + " x 5 = " + (tabuada * 5) + "<br>");
  document.write(tabuada + " x 6 = " + (tabuada * 6) + "<br>");
  document.write(tabuada + " x 7 = " + (tabuada * 7) + "<br>");
  document.write(tabuada + " x 8 = " + (tabuada * 8) + "<br>");
  document.write(tabuada + " x 9 = " + (tabuada * 9) + "<br>");
  document.write(tabuada + " x 10 = " + (tabuada * 10) + "<br>");
}

let lista = ["gilzinho", "spessato", "neuza", "jesus", "Duarte"];

function mostraLista() {
  document.write("tamanho da lista: " + lista.length + "<br>");
  for (let i = 0; i < lista.length; i++) {
    document.write("professores: " + lista[i] + "<br>")
  }
}

function multiplica() {
  for (let i = 1; i <= 10; i++) {
    document.write("Taboada do = " + i + "<br>");
    for (let j = 1; j <= 10; j++) {
      document.write(i + " x" + j + " = " + (i * j) + "<br>");

    }
    document.write("<br>")
  }
}
function moeda(atual) {
  return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
function total() {
  let v = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;

  if (!Number(v)) {
    alert("o valor deve ser numérico")
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return

  }

  if (!Number(j)) {
    alert("o valor deve ser numérico")
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return

  }

  if (!Number(t)) {
    alert("o valor deve ser numérico")
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return

  }


  let texto = "";
  let r = 0;
  for (let i = 1; i <= t; i++) {
    r = v * (1 + (j / 100));
    texto +="Mês " + i + " valor: R$ "  + r + "<br>"
      v = r;
  }
  document.getElementById("mes").innerHTML=texto;
  document.getElementById("totalgeral").innerHTML= "total:" + moeda(r)
  






}

function media() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;

  let r = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
  document.getElementById("result").innerHTML = "media: " + moeda(r);
}
function soma() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;


  let moeda = (Number(n1) + Number(n2) + Number(n3) + Number(n4));
  document.getElementById("result").innerHTML = "soma: " + moeda(r);
}
let a = 5;
let b = -1;
let  c = -6;
let raiz_quadrada;
let x1,x2;
function caucularRaiz(){
  let delta = (b*b)-(4*a*c);
  document.getElementById("raiz").innerHTML = "x1"= + x1 + " e x2=" +x2;
  if (delta < 0){

  }else{
     raiz_quadrada = Math.sqrt(delta);
     x1 = ((-b) + raiz_quadrada)/(2*a);
     x2 = ((-b) - raiz_quadrada)/(2*a);
  }
}
