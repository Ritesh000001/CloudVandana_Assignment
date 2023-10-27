const num = [27,23,8,34,22,89,999];

function arrSort(num)
{
    num.sort((a,b)=>a-b);
    num.reverse();
    return num;
}

document.write(arrSort(num));