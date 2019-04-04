let state={
    hour:00,
    minute:''|00,
    seconds:''|00,
    ampm:'',
    intervalId:0
}

function getTime() {
    let date = new Date();
    state = {
        hour: (date.getHours()>12) ? date.getHours()-12:date.getHours(),
        minute:(date.getMinutes()<10) ? `0${date.getMinutes()}`:date.getMinutes(),
        seconds:(date.getSeconds()<10) ? `0${date.getSeconds()}`:date.getSeconds(),
        ampm:(date.getHours()>=12) ? 'pm':'am'
    }
    document.getElementById('hour').innerHTML=state.hour;
    document.getElementById('minute').innerHTML=state.minute;
    document.getElementById('seconds').innerHTML=state.seconds;
    document.getElementById('ampm').innerHTML=state.ampm;

    setTimeout(getTime,1000)
}

getTime()