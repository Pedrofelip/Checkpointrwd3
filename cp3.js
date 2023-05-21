const interruptor = document.getElementById("checkbox");
const btn = document.getElementById("botao_cad");
const input1 = document.getElementById("input_1");
const input2 = document.getElementById("input_2");
const input3 = document.getElementById("input_3");
const input4 = document.getElementById("input_4");
const input5 = document.getElementById("input_5");
const label1 = document.getElementById("label_1");
const label2 = document.getElementById("label_2");
const label3 = document.getElementById("label_3");
const label4 = document.getElementById("label_4");
const label5 = document.getElementById("label_5");
const alerta1 = document.getElementById("alerta_1");
const alerta2 = document.getElementById("alerta_2");
const alerta3 = document.getElementById("alerta_3");
const alerta4 = document.getElementById("alerta_4");
const alerta5 = document.getElementById("alerta_5");

interruptor.addEventListener("click", function () {
    if (interruptor.checked) {
        let cabecalho = document.getElementById("header");
        let txt_switch = document.getElementById("texto_sw");
        let fundo_conteudo = document.getElementById("fd_cont");
        let titulo_h2 = document.getElementById("tit_h2");
        document.querySelector("img").src = "./img/pngegg-removebg-preview.png"

        cabecalho.style.backgroundColor = "#F1B565";
        txt_switch.style.color = "black";
        fundo_conteudo.style.backgroundColor = "black";
        titulo_h2.style.color = "white";
        label1.style.color = "#F1B565"
        label2.style.color = "#F1B565"
        label3.style.color = "#F1B565"
        label4.style.color = "#F1B565"
        label5.style.color = "#F1B565"
        input1.style.border = "2px solid #F1B565";
        input2.style.border = "2px solid #F1B565";
        input3.style.border = "2px solid #F1B565";
        input4.style.border = "2px solid #F1B565";
        input5.style.border = "2px solid #F1B565";
        btn.style.backgroundColor = "#F1B565";
        btn.style.color = "black";
    } else {
        let cabecalho = document.getElementById("header");
        let txt_switch = document.getElementById("texto_sw");
        let fundo_conteudo = document.getElementById("fd_cont");
        let titulo_h2 = document.getElementById("tit_h2");
        document.querySelector("img").src = "./img/pngegg.png"

        cabecalho.style.backgroundColor = "blueviolet";
        txt_switch.style.color = "white";
        fundo_conteudo.style.backgroundColor = "white";
        titulo_h2.style.color = "black";
        label1.style.color = "purple";
        label2.style.color = "purple";
        label3.style.color = "purple";
        label4.style.color = "purple";
        label5.style.color = "purple";
        input1.style.border = "2px solid purple";
        input2.style.border = "2px solid purple";
        input3.style.border = "2px solid purple";
        input4.style.border = "2px solid purple";
        input5.style.border = "2px solid purple";
        btn.style.backgroundColor = "purple";
        btn.style.color = "white";
    }
});

input1.oninput = function(){
    this.style.border = this.value.length < 5 || this.value == null ? "2px solid red" : "2px solid purple";
    label1.style.color = this.value.length < 5 || this.value == null ? "red" : "purple";
    alerta1.innerHTML = this.value.length < 5 || this.value == null ? "Nome invalido!!!" : "";
}

input2.oninput = function(){
    this.style.border = this.value.length < 5 || this.value == null ? "2px solid red" : "2px solid purple";
    label2.style.color = this.value.length < 5 || this.value == null ? "red" : "purple";
    alerta2.innerHTML = this.value.length < 5 || this.value == null ? "Sobrenome invalido!!!" : "";
}

input3.oninput = function(email){
    let re = /\S+@\S+\.\S+/;

    this.style.border = re.test(this.value) != true || this.value == null ? "2px solid red" : "2px solid purple";
    label2.style.color = re.test(this.value) != true || this.value == null ? "red" : "purple";
    alerta3.innerHTML = re.test(this.value) != true || this.value == null ? "Email invalido!!!" : "";
}

input4.oninput = function(){
    this.style.border = this.value.length < 6 || this.value.length > 8 || this.value == null ? "2px solid red" : "2px solid purple";
    label4.style.color = this.value.length < 6 || this.value.length > 8 || this.value == null ? "red" : "purple";
    alerta4.innerHTML = this.value.length < 6 || this.value.length > 8 || this.value == null ? "Senha invalida!!!" : "";

}

input5.oninput = function(){
    this.style.border = this.value != input4.value ? "2px solid red" : "2px solid purple";
    label5.style.border = this.value != input4.value ? "red" : "purple";
    alerta5.innerHTML = this.value != input4.value ? "Senha incorreta!!!" : "";

    return true 
}

btn.addEventListener("click", function () {
    if(input5.oninput != true){
        alert("errado");
    }else{
        alert("certo")
    }
});

