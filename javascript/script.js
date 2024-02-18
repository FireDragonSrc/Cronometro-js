const timer = document.querySelector('.tempo');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const data = new Date(2024,0,0,0,0,0);
let segundos = data.getSeconds();
let minutos = data.getMinutes();
let hora = data.getHours();

iniciar.addEventListener('click', () => {
    let cron = setInterval(() => {
        if(segundos <= 59){
            segundos++;
        }else if(segundos >= 59){
            segundos = 0;
            minutos++;
        }else if(minutos >= 59){
            minutos = 0;
            hora++;
        }else if(hora == 23 && minutos == 59){
            hora = 0;
            minutos = 0;
            segundos = 0;
        }
        timer.innerHTML = `${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    }, 1000);
    pausar.addEventListener('click', () => {
        clearInterval(cron);
    });
    zerar.addEventListener('click', () => {
        clearInterval(cron);
        hora = 0;
        minutos = 0;
        segundos = 0;
        timer.innerHTML = `00:00:00`;
    });
});