export const API_KEY =  'AIzaSyA9L5kaW7ngb7fZB-_S__t7GeAbDIwxQ1U'

export const value_converter = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}